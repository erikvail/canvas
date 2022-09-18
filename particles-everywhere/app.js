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

//helpers
const radians = (degrees) => Math.PI * degrees / 180.0;

const Particle = (x, y, options) => ({
    x: x,
    y: y,
    dx:  5,
    dy: 5,
    color : options && options.color ? options.color : 'black',
    radius : options && options.radius ? options.radius : 10,
    boundsX: [0, canvas.width],
    boundsY: [0, canvas.height],
    
    update(){
        if (this.outOfBoundX()) {
            this.dx = -1 * this.dx;
        }

        if (this.outOfBoundY()) {
            this.dy = -1 * this.dy;
        }
        

        this.x += this.dx;
        this.y += this.dy;
    },
    render(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, radians(0), radians(360));
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    },
    outOfBound(point, bounds){
        const [left, right] = bounds
        return point <= left + this.radius || point >= right - this.radius 
    },
    outOfBoundX(){
        return this.outOfBound(this.x, this.boundsX);
    },
    outOfBoundY(){
        return this.outOfBound(this.y, this.boundsY);
    }
});



const particle = Particle(canvas.width / 2, 
                         canvas.height / 2 );
console.log(particle);                         

const main = () => {
    requestAnimationFrame(main);
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    particle.update();
    particle.render(ctx);
}

requestAnimationFrame(main);










