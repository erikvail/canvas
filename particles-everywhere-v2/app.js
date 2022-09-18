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

const particleOptions = {
    radius: 10
};
//helpers
const radians = (degrees) => Math.PI * degrees / 180.0;
const random = (start, end) => { 
        return Math.floor(start  + (end - start)  * Math.random());   
}
const choice = (listOfChoices) => {
    const index = random(0, listOfChoices.length)
    return listOfChoices[index];
}
const colors = ['red', 'blue', 'lime', 'yellow', 'green', 'salmon']

const Particle = (x, y, options) => {
    
    const dx = random(-5, 5);
    const dy = random(-5, 5);

    return {
    x: x,
    y: y,
    dx:  dx === 0 ? random(1, 5) : dx,
    dy: dy === 0 ?  random(-5, -1) : dy,
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
}};



const createParticles = (n) => {
    const particles = [];
    for (let i = 0; i < n; i += 1) {
        const options = {
            radius: random(5, 20),
            color : choice(colors)
        }
        const particle = Particle( random(options.radius, canvas.width - options.radius),
                                   random(options.radius, canvas.height - options.radius), options );
        particles.push(particle);
    }
    return particles
}

//const particle = Particle(canvas.width / 2, 
//                         canvas.height / 2 );

const particles = createParticles(1000)

console.log(particles);                         

const main = () => {
    requestAnimationFrame(main);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // for (const particle of particles) {
    //     particle.update();
    //     particle.render(ctx);
    // }

    particles.forEach(particle => {
        particle.update();
        particle.render(ctx);
    });
}

requestAnimationFrame(main);










