function addGradient(canvas, options) {
    if (dev) console.log('add Gradient');
    if (typeof options != 'object') options = {};

    var context     = getContext(canvas);
    var x           = options.x || 0;
    var y           = options.y || 0;
    var width       = options.width || canvas.width;
    var height      = options.height || canvas.height;
    var gradient    = createGradient(canvas, options);


    return new Promise(function(resolve, reject){
        context.fillStyle = gradient;
        context.fillRect(x, y, x+width, y+height);
        resolve(gradient);
    });
}