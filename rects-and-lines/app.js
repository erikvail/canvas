const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

//setup
const topLeft = [0, 0];
const topRight = [600, 0];
const bottomLeft = [0, 400];
const bottomRight = [600, 400];
const center = [300, 200];
//basic line
ctx.beginPath();
ctx.moveTo(...topLeft);
ctx.lineTo(...center);
ctx.stroke();
ctx.closePath();

//second line
ctx.beginPath();
ctx.moveTo(...center);
ctx.lineTo(...topRight);
ctx.lineTo(200, 200)
ctx.stroke();
ctx.closePath();

const getRectCenter = (x, y, w, h) => {
    const cx = x - w / 2;
    const cy = y - h / 2;
    return [cx, cy];
}

//rect setup
const dimensions = [200, 100];
const newCenter = getRectCenter(...center, ...dimensions);
//first rectangle
ctx.strokeRect(...newCenter, ...dimensions);
//ctx.fillRect(...topLeft, ...dimensions);
//ctx.clearRect(...topLeft, 100, 50);