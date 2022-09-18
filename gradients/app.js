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
    [255, 0, 255, .7],
    [0, 255, 0, 0.5],
    [255, 97, 71, 0.3],
    [255, 255, 0, 0.2],
    [255, 0, 0, 0.1],
];

const rgba = (r, g , b, a) => `rgba(${r}, ${b}, ${g}, ${a})`;

const linear = ctx.createLinearGradient(...topLeft, ...bottomRight);
//linear.addColorStop(0, 'red');
//linear.addColorStop(0.5, 'yellow');
colors.forEach( (color , index) => {
        const pos = index / colors.length;
        linear.addColorStop(pos, rgba(...color))
}) ;
//linear.addColorStop(1.0, 'green');
ctx.fillStyle = linear;
ctx.fillRect(...topLeft, canvas.width, canvas.height)
console.log(linear);

