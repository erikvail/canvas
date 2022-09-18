const canvas = document.querySelector('.canvas');
console.log(canvas);
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300, 200);
ctx.stroke();
ctx.closePath();

console.log(ctx);