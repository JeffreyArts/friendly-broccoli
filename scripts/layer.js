var self = this;
var dev = false;
console.log('psLib loaded');




function resizeLayer(canvas,options) {
    if (dev) console.log('resize image');
    if (typeof options != 'object') options = {};

    clearCanvas(canvas);
    var context = getContext(canvas);

    var aspectRatio = options.aspectRatio || 1;
    var x           = options.x || 0;
    var y           = options.y || 0;
    var image       = options.image || '';
    var tempCanvas  = createCanvas();
    var tempContext = getContext(tempCanvas);

    context.canvas.width = image.width * aspectRatio;
    context.canvas.height = image.height * aspectRatio;

    return new Promise(function(resolve, reject){
        context.drawImage(image, x, y, x+context.canvas.width, y+context.canvas.height);
        resolve(image);
    });
}





