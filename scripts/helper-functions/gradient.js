

function createGradient(canvas, options) {
    if (typeof options != 'object') options = {};

    var context  = getContext(canvas);
    var x           = options.x || 0;
    var y           = options.y || 0;
    var width       = options.width || canvas.width;
    var height      = options.height || canvas.height;
    var colors      = options.colors || ['black', 'white'];
    var direction   = options.direction || 'horizontal';
    var horizontal  = direction === 'horizontal' || direction === 'hor' ? true : false;
    var gradient    = context.createLinearGradient(x,y, horizontal ? x+width : 0, horizontal ? 0 : y+height);

    if (!Array.isArray(colors)) throw "colors need to be an array";


    var ratio = 1/colors.length
    for (var i = 0; i < colors.length; i++) {
        gradient.addColorStop(i*ratio, colors[i]);
    }

    return gradient;
}

function isGradient(obj) {
    return obj.constructor.name == 'CanvasGradient' ? true : false;
};


