const canvas = document.querySelector('.canvas');
console.log(canvas);
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

//  simple triangle
// ctx.beginPath();
// ctx.moveTo(...topLeft);
// ctx.lineTo(...center);
// ctx.lineTo(...midLeft);
// //ctx.lineTo(...topLeft);
// ctx.stroke();
// ctx.closePath();

const triangle = method =>  (context, point1, point2, point3) => {
    context.beginPath();
    context.moveTo(...point1);
    context.lineTo(...point2);
    context.lineTo(...point3);
    context.closePath();
    context[method]();
}

const fillTriangle = triangle('fill');

// const fillTriangle = (context, point1, point2, point3) => {
//     context.beginPath();
//     context.moveTo(...point1);
//     context.lineTo(...point2);
//     context.lineTo(...point3);
//     context.closePath();
//     context.fill();
// }

const strokeTriangle = triangle('stroke');

//fillTriangle(ctx, topLeft, center, midLeft);
//fillTriangle(ctx, topRight, center, midRight);
//strokeTriangle(ctx, bottomRight, center, midRight);

const hexagon = method => (context, center, radius) => {
    const SIDES = 6
    const ANGLE_STEP = Math.PI * 2 / SIDES;
    context.beginPath();
    const [cx, cy] = center;
   // context.moveTo(...center)
    const edgeStart = [cx + radius * Math.cos(0), 
                      cy + radius * Math.sin(0)
                    ] ;
    
    context.moveTo(...edgeStart);
    //context.lineTo(...edgeStart);
    for (let i = 1; i < SIDES;  i+=1) {
        let point =  [cx + radius * Math.cos(ANGLE_STEP * i), 
            cy + radius * Math.sin(ANGLE_STEP * i)
          ] ;
          context.lineTo(...point);
    }
    context.closePath();
    context[method]();
}

const strokeHexagon = hexagon('stroke');
const fillHexagon = hexagon('fill');

strokeHexagon(ctx, center, 30);

//console.log(strokeTriangle);