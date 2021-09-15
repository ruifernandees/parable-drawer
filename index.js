function getCtx() {
    const canvas = document.getElementById('myCanvas');

    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        return ctx;
    }

    return null;
}

function drawAxes(ctx, canvasWidth, canvasHeight, distancePoints) {
    ctx.translate(canvasWidth / 2, canvasHeight / 2);

    ctx.beginPath();

    ctx.moveTo(-(canvasWidth / 2), 0);
    ctx.lineTo(canvasWidth / 2, 0);

    ctx.moveTo(0, 0);
    
    ctx.font = "12px Arial";
    for (let i = -canvasWidth; i < canvasWidth; i += distancePoints)
    {
        if (i != 0) {
            ctx.moveTo(i, 10);
            ctx.lineTo(i, -10);
            ctx.fillText(`${i / distancePoints}`, i - 4, 25)
        } else {
            ctx.fillText(`${i / distancePoints}`, i - 10, 20)
        }
    }

    ctx.moveTo(0, -(canvasHeight / 2));
    ctx.lineTo(0, (canvasHeight / 2));

    ctx.moveTo(0, 0);

    for (let i = -canvasHeight; i < canvasHeight; i += distancePoints)
    {
        if (i != 0) {
            ctx.moveTo(10, i);
            ctx.lineTo(-10, i);
            ctx.fillText(`${-i / distancePoints}`, 25, i + 4)
        }
    }

    ctx.moveTo(0,0);
    ctx.fillText("y", -20, (-canvasHeight / 2) + 10);
    ctx.fillText("x", (canvasWidth / 2) - 10, -20);
    ctx.stroke();
}

function drawParable() {
    const paramY = document.getElementById('paramY').value;
    const p = paramY / 2;
    const p2 = p / 2;
    console.log(`Foco: (0, ${p2})`)
    console.log(`Diretriz: ${-p2}`)

    const xFocus = Math.sqrt(paramY * p2);
    console.log(xFocus)
    
    const pWeb = p * 40;
    const p2Web = p2 * 40;

    const ctx = getCtx();
    clearCanvas();
    
    if (ctx) {
        ctx.beginPath();
        let radius = p2Web;
        let anticlockwise = false;
        if (p2Web < 0) {
            radius *= -1;
            anticlockwise = true;
        }
        ctx.arc(0, -p2Web, radius, 0, Math.PI, anticlockwise)
        ctx.stroke();
    }

}

function clearCanvas() {
    const canvas = document.getElementById('myCanvas');
    
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.translate(-(canvas.width / 2), - (canvas.height/2));
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawAxes(ctx, canvas.width, canvas.height, 40);
    }
}

const canvas = document.getElementById('myCanvas');

if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    drawAxes(ctx, canvas.width, canvas.height, 40);
    
}