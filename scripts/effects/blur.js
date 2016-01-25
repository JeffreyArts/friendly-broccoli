
function addBlur(canvas, options) {
    if (dev) console.log('add Blur');
    if (typeof options != 'object') options = {};


    var x           = options.x || 0;
    var y           = options.y || 0;
    var width       = options.width || canvas.width;
    var height      = options.height || canvas.height;
    var radius      = options.radius || 40;

    radius = radius > 180 ? 180 : radius;
    radius = radius < 0 ? 0 : radius;
    return new Promise(function(resolve, reject){
        stackBlurCanvasRGBA(canvas, x, y, x+width, y+height, radius);
        resolve();
    });
}