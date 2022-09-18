const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

//setup
const topLeft = [0, 0];
const topRight = [600, 0];
const midTop = [300, 0];
const midBottom = [300, 400]
const midLeft = [0, 200];
const midRight = [600, 200];
const bottomLeft = [0, 400];
const bottomRight = [600, 400];
const center = [300, 200];

const point = (ctx, x, y) => {
    ctx.save();
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

const message = 'welcome to html5 canvas with text';

ctx.font = '40px Comic Sans MS';
//ctx.strokeText(message, ...center);
ctx.font ="40px Comic Sans MS";
ctx.fillStyle = 'lime';
ctx.strokeStyle = 'rgba(255, 99, 71, 0.5)';
ctx.textAlign = 'start';
point(ctx, ...center);
ctx.fillText(message, ...center);
ctx.strokeText(message, ...center);

const baseLines = ['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom'];
let index = 0;
const cycleBaseLine = () => {
    ctx.clearRect(...topLeft, canvas.clientWidth, canvas.height)
    ctx.beginPath();
    ctx.moveTo(...center);
    ctx.lineTo(...midRight);
    ctx.stroke();
    ctx.closePath();
    point(ctx, ...center);
    const baseline = baseLines[index];
    ctx.textBaseline = baseline;
    ctx.fillText(baseline, ...center);
    index = index < baseLines.length - 1 ? index + 1 : 0;
    
}

setInterval(cycleBaseLine, 1000);