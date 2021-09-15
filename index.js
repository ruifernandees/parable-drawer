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
    console.log("hello world")
}

const canvas = document.getElementById('myCanvas');

if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    
    drawAxes(ctx, 600, 600, 40);
    
}