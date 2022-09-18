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
const cDims = [canvas.width, canvas.height];

const HEIGHTS = {
    SMALL : 100,
    MEDIUM: 200,
    LARGE: 300
}

const small = (w, h) => {
    const ratio = w / h; 
    const newHeight = HEIGHTS.SMALL;
    const newWidth = ratio * newHeight;
    return [newWidth, newHeight];
}

const getRectCenter = (position, width, height) => {
    const [cx, cy] = position;
    return [
        cx-  width / 2,
        cy - height / 2
    ];
}

const clippingCircle = (ctx, position, radius) => {
    // clipping mask
    ctx.beginPath();
    ctx.arc(...position, radius, 0 , Math.PI * 2);
    ctx.clip();
    ctx.closePath();
}

const fillCanvas = (ctx, color) => {
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(...topLeft, ...cDims);
    ctx.restore();
}

//clipping
const framerate = 60;
const timing = 1000;
let ticks = 0;
let dt = 10;

const logo =  new Image();
logo.src = 'images/itprotv.png';
logo.addEventListener('load', function onload(){
    const dimensions = small(logo.width, logo.height)
    const position = getRectCenter(center, ...dimensions);
    const [x, y] = midLeft;
    const clippingPosition = [
        x + ticks,
        y 
    ]
    
    //ctx.fillRect(...topLeft, ...cDims);
    
    ctx.save();
    fillCanvas(ctx, 'black');

    //clipping mask
    //ctx.beginPath();
    //ctx.arc(...center, 100, 0 , Math.PI * 2);
    //ctx.clip();
    
    //clippingCircle(ctx, center, 100)
    clippingCircle(ctx, clippingPosition, 100 +ticks);
    
    
   
    //ctx.fillStyle = 'white';
    //ctx.fillRect(...topLeft, ...cDims);
    fillCanvas(ctx, 'white')

    ctx.drawImage(logo, ...position, ...dimensions);
    ticks += dt;
    if (x + ticks >= canvas.width || x + ticks <= 0) {
        dt = -1 * dt;
    }
    ctx.restore();
    setTimeout(onload, timing / framerate);
    
});








