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

const createCanvas = ({width, height}) => {
    const canvas = document.createElement('canvas');
    canvas.height = height;
    canvas.width = width;
    return canvas;
}

const createCanvasFromImage = img => {
    const canvas = createCanvas(img);
    console.log(canvas);
    const contenxt = canvas.getContext('2d');
    contenxt.drawImage(img, 0, 0);
    return canvas;
}

window.addEventListener('load', () => {
    const logo = document.querySelector('img[src="images/itprotv.png"]');
    const {width, height} = logo;
    const dimensions = medium(width, height);
    const original = createCanvasFromImage(logo);
    const grayscale = createCanvasFromImage(logo);
    ctx.drawImage(original, ...topLeft, ...dimensions);
    ctx.drawImage(grayscale, ...midTop, ...dimensions);
    const gctx = grayscale.getContext('2d');
    const pixels = gctx.getImageData(0, 0, grayscale.width, grayscale.height);
    console.log(pixels);
    const {data} = pixels;
    for (let i = 0; i < data.length ; i += 4) {
        const red = data[i];
        const green = data[i + 1];
        const blue = data[ i + 2];
        const gray = 0.2 * red +  0.7 * green + 0.07 * blue ; 
        data[i] = gray;
        data[i + 1] = gray;
        data[i + 2] = gray;
    }

    gctx.putImageData(pixels, 0, 0);
    ctx.drawImage(grayscale, ...midTop, ...dimensions);
    
});



