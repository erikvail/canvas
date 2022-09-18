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

const compositeTypes = ['source-over', 'source-in', 'source-out', 'source-at',
    'sourcw-atop',
     'destination-over', 'destination-in', 'destination-out',
     'destination-atop', 'lighter', 'copy', 'xor', 'multiply',
     'screen', 'overlay', 'darken', 'lighten',
     'color-dodge', 'color-burn', 'hard-light', 'soft-light',
     'difference', 'exclusion','hue', 'saturation', 'color',
     'luminosity'];

 const figure = (ctx, color, ...points) => {
    const [first, ...rest] = points;
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(...first);
    rest.forEach(point => ctx.lineTo(...point));
    ctx.lineTo(...first);
    ctx.fill();
    ctx.closePath();
    ctx.restore();

 }  
 let index = 0;
 const render = () => {
     ctx.clearRect(...topLeft, canvas.width, canvas.height);
     const compositeType =  compositeTypes[index];
     ctx.save();
     figure(ctx, 'rgba(255, 0, 0, 0.5)', topLeft, topRight, midBottom);
     ctx.globalCompositeOperation = compositeType;   
     figure(ctx, 'rgba(0, 255, 0, 1)', bottomLeft, midTop, bottomRight);
     ctx.restore();
     ctx.save();
    
     ctx.font = '48px Comic Sans MS';
     ctx.fillText(compositeType, 0, 40);
     ctx.restore();
     index = index >= compositeTypes.length - 1 ? 0 : index + 1
 }  

 setInterval(render, 2000);









