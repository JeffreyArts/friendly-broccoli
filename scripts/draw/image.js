function loadImage(canvas,options) {
    if (dev) console.log('load image');
    if (typeof options != 'object') options = {};

    var image   = options.image || new Image();
    var src     = options.src || '';
    var context = getContext(canvas);

    clearCanvas(canvas);

    image.crossOrigin = "Anonymous";
    image.src = src;

    return new Promise(function(resolve, reject){
        image.onload = function(){
            context.drawImage(image, 0, 0);
            resolve(image);
        }
    });
}
