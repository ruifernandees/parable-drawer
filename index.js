class Parable {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = null;
        if (this.canvas.getContext) {
            this.ctx = this.canvas.getContext('2d');
            this.ctx.strokeStyle = "black";
            this.drawAxes(40);
        }
    }

    drawAxes(distancePoints) {
        if (this.ctx) {
            this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
    
            this.ctx.beginPath();
    
            this.ctx.moveTo(-(this.canvas.width / 2), 0);
            this.ctx.lineTo(this.canvas.width / 2, 0);
    
            this.ctx.moveTo(0, 0);
            
            this.ctx.font = "12px Arial";
            for (let i = -this.canvas.width; i < this.canvas.width; i += distancePoints)
            {
                if (i != 0) {
                    this.ctx.moveTo(i, 10);
                    this.ctx.lineTo(i, -10);
                    this.ctx.fillText(`${i / distancePoints}`, i - 4, 25)
                } else {
                    this.ctx.fillText(`${i / distancePoints}`, i - 10, 20)
                }
            }
    
            this.ctx.moveTo(0, -(this.canvas.height / 2));
            this.ctx.lineTo(0, (this.canvas.height / 2));
    
            this.ctx.moveTo(0, 0);
    
            for (let i = -this.canvas.height; i < this.canvas.height; i += distancePoints)
            {
                if (i != 0) {
                    this.ctx.moveTo(10, i);
                    this.ctx.lineTo(-10, i);
                    this.ctx.fillText(`${-i / distancePoints}`, 25, i + 4)
                }
            }
    
            this.ctx.moveTo(0,0);
            this.ctx.fillText("y", -20, (-this.canvas.height / 2) + 10);
            this.ctx.fillText("x", (this.canvas.width / 2) - 10, -20);
            this.ctx.stroke();
        } else {
            console.warn("Missing context");
        }
    }

    drawParableXAxis() {
        const doubleP = document.getElementById('doubleP').value;

        if (doubleP < 1 && doubleP > - 1 && doubleP != 0) {
            return;
        }

        const p = doubleP / 2;
        const p2 = p / 2;
        document.getElementById('focus').innerHTML = `Foco: (0, ${p2})`;
        const directrix = -p2;
        document.getElementById('directrix').innerHTML = `Diretriz: ${directrix}`;
        
        const symmetricalX = Math.sqrt(Math.abs(doubleP * p2));
        document.getElementById('symmetricalPoint').innerHTML = `Pontos simétricos usados: ${symmetricalX} e ${-symmetricalX}`;
        
        const symmetricalXWeb = symmetricalX * 40;
        const p2Web = - (p2 * 40);
        const directrixWeb = - (directrix * 40);

        this.clearCanvas();
        
        if (this.ctx) {
            this.ctx.beginPath();
            let radius = symmetricalXWeb;
            let anticlockwise = false;
            if (doubleP < 0) {
                anticlockwise = true;
            }
            this.ctx.arc(0, p2Web * 2, radius, 0, Math.PI, anticlockwise)
            this.ctx.strokeStyle = "red";
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(-(this.canvas.width / 2), directrixWeb);
            this.ctx.lineTo(this.canvas.width / 2, directrixWeb);

            this.ctx.strokeStyle = "blue";
            this.ctx.stroke();
            this.ctx.strokeStyle = "black";
        }
    }

    drawParableYAxis() {
        const doubleP = document.getElementById('doublePY').value;

        if (doubleP < 1 && doubleP > - 1 && doubleP != 0) {
            return;
        }

        const p = doubleP / 2;
        const p2 = p / 2;
        document.getElementById('focus').innerHTML = `Foco: (0, ${p2})`;
        const directrix = -p2;
        document.getElementById('directrix').innerHTML = `Diretriz: ${directrix}`;


        const symmetricalY = Math.sqrt(Math.abs(doubleP * p2));
        document.getElementById('symmetricalPoint').innerHTML = `Pontos simétricos usados: ${symmetricalY} e ${-symmetricalY}`;

        
        const symmetricalYWeb = symmetricalY * 40;
        const p2Web = (p2 * 40);
        const directrixWeb = (directrix * 40);

        this.clearCanvas();
        
        if (this.ctx) {
            this.ctx.beginPath();
            let radius = symmetricalYWeb;
            let anticlockwise = false;
            if (doubleP < 0) {
                anticlockwise = true;
            }
            this.ctx.arc(p2Web * 2, 0, radius, Math.PI / 2, 1.5 * Math.PI, anticlockwise)
            this.ctx.strokeStyle = "red";
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(directrixWeb, -(this.canvas.height / 2));
            this.ctx.lineTo(directrixWeb, this.canvas.height / 2);
            this.ctx.strokeStyle = "blue";
            this.ctx.stroke();
            this.ctx.strokeStyle = "black";
        }
    }

    
    clearCanvas() {
        if (this.ctx) {
            this.ctx.translate(-(this.canvas.width / 2), - (this.canvas.height/2));
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drawAxes(40);
        }
    }
}

const parable = new Parable('myCanvas');