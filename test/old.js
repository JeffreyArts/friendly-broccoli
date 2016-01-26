function getBlurredImage(imgSrc,options){
    var canvas = document.createElement('canvas');
    var inputImage = null;
    options = options || {};

    var color = options.color || 'rgba(0,0,0,.333)';

    // Escape if image is an svg
    if (imgSrc.search('.svg') > 0) {
        return Promise.reject();
    }

    return loadImage(canvas, {src:imgSrc}).then( function(image) {
        return resizeLayer(canvas, {
            aspectRatio: 1,
            image: image,
            x: 0
        });
    }).then(function(image){

         inputImage = image;
         return addBlur(canvas,{
             x:0,
             radius:25
         });
    }).then(function(gradient){
        return addMask(canvas,{
            width: '100%',
            originalImage: inputImage,
            mask: {
                gradient : {
                    start: '20%',
                    end: '100%',
                    direction: 'hor',
                    colors: ['black', 'transparent']
                }
            },
        });
    }).then(function(){
        return addGradient(canvas,{
            x:0,
            colors: [color, 'transparent']
        });
    }).then (function(){
        return getBase64Image(canvas);
    });
}