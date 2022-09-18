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

//bezier curve
/*
ctx.beginPath();
ctx.moveTo(...midLeft);
ctx.bezierCurveTo(...topLeft, ...topRight, ...midRight);
ctx.bezierCurveTo(...bottomRight, ...bottomLeft, ...midLeft);
//ctx.bezierCurveTo(...topLeft, ...topRight, ...midLeft);
//ctx.bezierCurveTo(...midTop, ...midTop, ...midRight)
//ctx.fill();
ctx.stroke()
ctx.closePath();
*/

// quadratic curve
// endpoints midleft and midRight
// control point midTop
/*
ctx.beginPath();
//ctx.moveTo(...midLeft);
//ctx.quadraticCurveTo(...[300, -200], ...midRight);
//ctx.quadraticCurveTo(...topLeft, ...midRight);
//ctx.quadraticCurveTo(...bottomLeft, ...midLeft);
ctx.moveTo(...bottomLeft);
ctx.quadraticCurveTo(...bottomRight, ...topRight);
ctx.stroke();
ctz.closePath();
*/

const deg2Rad = (degrees) => {
    return Math.PI * (degrees / 180.0) ;
}
//arcs
const radius = 100;
const start = 0;
//const end  = Math.PI * 1.5;
const end =  deg2Rad(360);
ctx.beginPath();
ctx.moveTo(...center);
//ctx.arc(...center, radius, start, end);
ctx.arcTo(...topRight, ...topLeft, radius);
ctx.stroke();
//ctx.fill();
ctx.closePath();