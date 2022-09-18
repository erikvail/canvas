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

const imageDims = [200, 300];
const HEIGHTS = {
    SMALL : 100,
    MEDIUM: 200,
    LARGE: 300
}
const image = new Image();
const small = (w, h) => {
    const ratio = w / h; 
    const newHeight = HEIGHTS.SMALL;
    const newWidth = ratio * newHeight;
    return [newWidth, newHeight];
}
const medium = (w, h) => {
    const ratio = w / h; 
    const newHeight = HEIGHTS.MEDIUM;
    const newWidth = ratio * newHeight;
    return [newWidth, newHeight];
}
const large = (w, h) => {
    const ratio = w / h; 
    const newHeight = HEIGHTS.LARGE;
    const newWidth = ratio * newHeight;
    return [newWidth, newHeight];
}

const getRectCenter = (center, dimensions) => {
    const [cx, cy] = center;
    const [width, height] = dimensions;
    return [cx - width / 2, cy - height / 2];
}
// image.onload = () => {
//     ctx.drawImage(image, 0, 0);
// }
// image.addEventListener('load', () => {
//     const dims = large(image.width, image.height);
//     console.log(image.width, image.height);
//     console.log(dims);
//     ctx.drawImage(image, ...getRectCenter(center, dims), ...dims);
// })
// image.src = 'images/stick.svg';
// console.dir(image);

window.addEventListener('load', () => {


    const imageUrls = [
        'images/stick.svg',
        'images/stick2.svg',
        'images/stick3.svg',
        'images/stick4.svg',
        'images/stick.png',
    ];
    
    const images = imageUrls.map( url => {
        return document.querySelector(`img[src="${url}"]`);
    });
    
    // images.forEach( image => {
    //     const dims = large(image.width, image.height);
    //     const pos = getRectCenter(center, dims);
    //     ctx.drawImage(image, ...pos, ...dims);
    // });

    let index = 0;
    const render = () => {
        ctx.clearRect(...topLeft, ...cDims);
        console.log(index);
        const img = images[index];
        const dims = large(img.width, img.height);
        const pos = getRectCenter(center, dims);
        ctx.drawImage(img, ...pos, ...dims);
        index = index >= images.length -1 ? 0 : index + 1;
        
    }

    const framerate = 5;
    const timing = 1000; //ms
    setInterval( render, timing / framerate);
    
    console.log(images);

});



