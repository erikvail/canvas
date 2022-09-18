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

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    dx: 5,
    dy: 0,
    color: 'blue',
    size : 30,
    update(){
        this.x += this.dx;
        this.y += this.dy;
    },
    render(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI *2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
        //this.size = this.size + 0.3;
    }
}

const logo = document.querySelector("#logo");
const originalWidth = logo.width;
const originalHeight = logo.height;
let x = canvas.width / 2;
let y =  canvas.height / 2;
let width = originalWidth / 10;
let height = originalHeight / 10;
let r = width / height;
let dw = 3;
let dh = 3;

const main = () => {
    if  ( width < originalWidth && height < originalHeight) {
        runner = requestAnimationFrame(main);
    }

    ctx.clearRect(...topLeft, canvas.width, canvas.height);
   // x += 5;
    height += dw / r;
    width += dw;
    ctx.drawImage(logo, x, y, width, height);
    // if ( x >= canvas.width /2) {
    //     cancelAnimationFrame(runner);
    // }
}

//ball.update();
//ball.render();

requestAnimationFrame(main);










