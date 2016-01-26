var FriendlyBroccoli = function(){

    // Set defaults
    this.canvas = createCanvas();
    this.context = getContext(this.canvas);
    this.layers = {
        'layer0': new this.layer('Layer0')
    };


    /**
     * Get layer
     */
    this.getLayer = function(name) {
        return this.layers[name];
    };

    /**
     * Get image
     */
    this.getImage = function() {

        for (var layer in this.layers) {
            this.addLayerToCanvas(this.layers[layer]);
        }

        return this.canvas.toDataURL("image/png");
    };


};

