function createGradientMask(canvas, options) {
    if (dev) console.log('create Gradient Mask');

    var context     = getContext(canvas)
    var start       = options.start || 0;
    var end         = options.end || 0;
    var colors      = options.colors || ['black','transparent'];
    var direction   = options.direction;
    var width       = context.canvas.width;
    var height      = context.canvas.height;
    var horizontal  = direction === 'horizontal' || direction === 'hor' ? true : false;



    if (start.indexOf('%' >= 0)) {
        start = calculatePercentage(start, horizontal ? width : height);
    }

    if (end.indexOf('%' >= 0)) {
        end = calculatePercentage(end, horizontal ? width : height);
    }


    context.fillStyle = createGradient(canvas,{
        x: horizontal ? start : 0,
        y: horizontal ? 0 : start,
        width: horizontal ? end : 0,
        height: horizontal ? 0 : end,
        colors:colors,
        direction: direction
    });
    context.fillRect(0, 0, width, height);

}

function addMask(canvas, options) {
    if (dev) console.log('add Mask');

    var context     = getContext(canvas);
    var x           = options.x || 0;
    var y           = options.y || 0;
    var width       = options.width || canvas.width;
    var height      = options.height || canvas.height;
    var mask        = options.mask || document.createElement('img');
    var layerMask           = createLayer();
    var layerMaskContext    = getContext(layerMask);

    // Size the layermask to the same size of the canvas
    layerMaskContext.canvas.width = context.canvas.width;
    layerMaskContext.canvas.height = context.canvas.height;


    // Calculate percentages to numbers
    if (typeof width == 'string' && width.indexOf('%' >= 0)) {
        width = calculatePercentage(width, context.canvas.width);
    }

    if (typeof x == 'string' && x.indexOf('%' >= 0)) {
        x = calculatePercentage(x, width);
    }


    // Create gradient, otherwise apple (transparent) image
    if (mask.gradient) {

        createGradientMask(layerMask, mask.gradient);

    } else {
        layerMaskContext.drawImage(mask, 0, 0, width, height);
    }


    layerMaskContext.globalCompositeOperation = "source-out";
    layerMaskContext.drawImage(options.originalImage, 0, 0, width, height); // Original image

    addLayerToCanvas(canvas, layerMask, options);

}
