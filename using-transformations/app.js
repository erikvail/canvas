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

const getRectCenter = (position, width, height) => {
    const [cx, cy] = position;
    return [
        cx-  width / 2,
        cy - height / 2
    ];
}

const square = method => (ctx, position, size, options) => {
    ctx.save();

    if (options && options.color) {
        ctx.strokeStyle = options.color;
        ctx.fillStyle = options.color;
    }

    const center = getRectCenter(position, size, size);

    switch (method) {
        case 'stroke':
            ctx.strokeRect(...center, size, size);
            break;
        case 'fill':
            ctx.fillRect(...center, size, size)
            break;
        default:
            console.warn('You have picked a method that is not supported. Fallback: stokr');
            ctx.strokeRect(...center, szie, size);
            break;        
    }

    ctx.restore();

   
}

const strokeSquare = square('stroke');
const fillSquare = square('fill');
const radians = degrees => Math.PI * degrees / 180.0;

ctx.save();
//ctx.translate(100, 100);
fillSquare(ctx, center, 75, { color : 'red'});
ctx.translate(10, 10);
const rotationAngle = radians(45); 
ctx.translate(...center);
ctx.rotate(rotationAngle);
ctx.translate(...center.map(n => -1 * n));
//ctx.restore();
//ctx.translate(-100, -100);
fillSquare(ctx, center, 75, { color : 'blue'});
ctx.translate(-10, -10);

ctx.restore();


const xscale = 1.5;
const yscale = 1.5;

ctx.save();
strokeSquare(ctx, center, 100, {color : 'red'});



const dx =  (1 - xscale) * center[0];
const dy =  (1 - yscale) * center[1];
console.log(dx);
console.log(dy);
ctx.translate(dx, dy);
//ctx.translate(0, 200);

///
ctx.beginPath();
ctx.moveTo(...topLeft);
ctx.lineTo(...topRight);
ctx.closePath();
ctx.stroke();
///

ctx.scale(xscale, yscale);
strokeSquare(ctx, center, 100, {color : 'black'});

ctx.restore();







