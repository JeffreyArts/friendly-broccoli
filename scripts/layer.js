FriendlyBroccoli.prototype.layer = function layer(name) {

    this.cvs        = createCanvas();
    this.context    = getContext(this.cvs);
    this.name       = name || 'Layer 0';
    this.image      = null;
    this.x          = 0;
    this.y          = 0;
    this.width      = 100;
    this.height     = 100;


    /**
     * Resize layer
     */
    this.resizeLayer = function (options) {
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
    }; // Resize layer



    /**
     * Add image
     */
    this.addImage = function(image, options){
        var src, self;

        // Set defaults
        if (typeof options != 'object') options = {};
        self = this;


        // Set image source & image <img> object
        if (typeof image == 'object') {
            src     = image.src;
        } else {
            src     = image;
            image   = new Image();
            image.src = src;
        }

        if (options.crossOrigin) {
            image.crossOrigin = "Anonymous";
        }

        return new Promise(function(resolve, reject){
            image.onload = function(){
                self.context.drawImage(image, 0, 0);
                self.image = image;
                resolve(image);
            };
        });
    }; // Add Image
};





