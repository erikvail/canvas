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

//helpers
const line = (ctx, firstPoint, secondPoint) => {
    ctx.beginPath();
    ctx.moveTo(...firstPoint);
    ctx.lineTo(...secondPoint);
    ctx.stroke();
    ctx.closePath();
}

const figure = (ctx, ...points) => {
    ctx.beginPath();
    const [first, ...otherPoints] = points;
    ctx.moveTo(...first);
    otherPoints.forEach(point => ctx.lineTo(...point));
    ctx.lineTo(...first);
    ctx.fill();
    ctx.closePath();
}

const outline = (ctx, ...points) => {
    ctx.beginPath();
    const [first, ...otherPoints] = points;
    ctx.moveTo(...first);
    otherPoints.forEach(point => ctx.lineTo(...point));
    ctx.lineTo(...first);
    ctx.stroke();
    ctx.closePath();
}

const getRectCenter = (center, width, height) => {
    const [x, y] = center;
    const cx = x - width / 2;
    const cy = y - height / 2;
    return [cx, cy];
}

const outlinedSquare = (ctx, center, size, color) => {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.strokeRect(...center, size, size);
    ctx.restore();
} 

const filledSquare = (ctx, center, size, color) => {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillRect(...center, size, size);
    ctx.restore();
} 

//rect setup
const dimensions = [200, 200];
const newCenter = getRectCenter(center, ...dimensions);
//filledSquare(ctx, newCenter, dimensions[0]);
ctx.save();
//ctx.strokeStyle = 'fuchsia';
//ctx.strokeStyle = '#FF00FF';
//ctx.strokeStyle = '#F0F';
//ctx.strokeStyle = 'rgba(255, 0, 255, 0.1)';
//ctx.strokeStyle = 'green';
// ctx.lineWidth = 30;
// //line(ctx, topLeft, bottomRight);
// line(ctx, midBottom, center);
// ctx.lineWidth = 1;
// ctx.strokeStyle = 'rgba(255, 0, 255, 0.8)';
// line(ctx, midBottom, midTop);
ctx.setLineDash([10,20, 5, 10]);
line(ctx, midLeft, midRight);
ctx.setLineDash([]);
ctx.lineWidth = 50;
ctx.lineJoin = 'round';
ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
//ctx.fillStyle = 'rgba(255, 255, 255, 0)';
//ctx.lineCap = 'square';
//line(ctx, midBottom, center);
//outline(ctx, topLeft, topRight, center);
figure(ctx, topLeft, topRight, center);
ctx.fillStyle = 'rgba(255, 0, 255, 0.3)';
figure(ctx, topLeft, midTop, center);
//outline(ctx, topLeft, topRight, center);

ctx.restore();
//line(ctx, bottomLeft, topRight);