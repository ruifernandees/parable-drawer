class Parable {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = null;
        if (this.canvas.getContext) {
            this.ctx = this.canvas.getContext('2d');
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

    drawParable() {
        const paramY = document.getElementById('paramY').value;
        const p = paramY / 2;
        const p2 = p / 2;
        console.log(`Foco: (0, ${p2})`)
        console.log(`Diretriz: ${-p2}`)

        const xFocus = Math.sqrt(paramY * p2);
        console.log(xFocus)
        
        const pWeb = p * 40;
        const p2Web = p2 * 40;

        this.clearCanvas();
        
        if (this.ctx) {
            this.ctx.beginPath();
            let radius = p2Web;
            let anticlockwise = false;
            if (p2Web < 0) {
                radius *= -1;
                anticlockwise = true;
            }
            this.ctx.arc(0, -p2Web, radius, 0, Math.PI, anticlockwise)
            this.ctx.stroke();
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