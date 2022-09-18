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

const colors = [
    [255, 0, 255, 1],
    [0, 255, 0, 1],
    [255, 97, 71, 1],
    [255, 255, 0, 1],
    [255, 0, 0, 1] 
];

const rgba = (r, g , b, a) => `rgba(${r}, ${b}, ${g}, ${a})`;
const r1 = 10;
const r2 = 300; 
const radial = ctx.createRadialGradient(...center, r1, ...center, r2);
//radial.addColorStop(0, 'red');
//radial.addColorStop(1, 'green');
colors.forEach((color, index) => {
    radial.addColorStop(index / colors.length, rgba(...color));
});
ctx.fillStyle = radial;
ctx.fillRect(...topLeft, canvas.clientWidth, canvas.height);
ctx.beginPath();
//ctx.arc(...center, r1, 0, Math.PI * 2);
//ctx.arc(...center, r2, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
//linear.addColorStop(0, 'red');
//linear.addColorStop(0.5, 'yellow');
// colors.forEach( (color , index) => {
//         const pos = index / colors.length;
//         linear.addColorStop(pos, rgba(...color))
// }) ;
// //linear.addColorStop(1.0, 'green');
// ctx.fillStyle = linear;
// ctx.fillRect(...topLeft, canvas.width, canvas.height)
// console.log(linear);

