const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const palette = document.getElementById('palette')

const size = 10;

var isPressed = false;
var color = "#000000";

var x = undefined;
var y = undefined;

function drawLine(x, y, x1, y1) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1,y1);
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    ctx.stroke();
}

function drawCircle(x, y) {
    ctx.beginPath();

    //0 -> r / 180 * Math.PI (r = 度数)
    ctx.arc(x, y, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;

    color = palette.value;
})


canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) => {

    if(!isPressed) return;
    var x1 = e.offsetX;
    var y1 = e.offsetY;
    drawLine(x,y,x1,y1)
    drawCircle(x,y);
    x = x1;
    y = y1;

})