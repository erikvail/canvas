const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

//requestAnimationFrame Shim
window.requestAnimationFrame =  window.requestAnimationFrame || 
                                (function(callback){
                                    window.setTimeout(callback, 1000 /60);
                                })

window.cancelAnimationFrame = window.cancelAnimationFrame || 
                            (function(id) {
                                window.clearTimeout(id);
                            })                                

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

const circle = (ctx, center, radius) => {
    ctx.save();
    ctx.fillSryle = 'black';
    ctx.arc(...center, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.restore()
}

// canvas.addEventListener('mousemove', function placeCircle(e){
//     console.log(e);
//     const {offsetX, offsetY} = e;
//     console.log('x:', offsetX);
//     console.log('y:', offsetY);
//     const clickPosition = [offsetX, offsetY];
//     circle(ctx, clickPosition, 30); 
// })
const KEYS = {
    BLUE : 98,
    GREEN: 103,
    RED:114
}

window.addEventListener('keypress', function changeColor(e) {
    const {keyCode} = e;
    switch(keyCode) {
        case KEYS.RED:
            ctx.save();
            ctx.fillStyle = 'red';
            ctx.fillRect(...topLeft, ...cDims);
            ctx.restore();
            break;
        case KEYS.GREEN:
            ctx.save();
            ctx.fillStyle = 'green';
            ctx.fillRect(...topLeft, ...cDims);
            ctx.restore();
            break;
        case KEYS.BLUE:
            ctx.save();
            ctx.fillStyle = 'blue';
            ctx.fillRect(...topLeft, ...cDims);
            ctx.restore();
            break;
        default:
            ctx.save();
            ctx.fillRect(...topLeft, ...cDims);
            ctx.restore();
            break;       

    }
})










