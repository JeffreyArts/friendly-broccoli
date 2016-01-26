/**
 * Create Canvas
 */
function createCanvas() {
    return document.createElement('canvas');
}

/**
 * Add layer to Canvas
 */
FriendlyBroccoli.prototype.addLayerToCanvas = function (layer) {
    layer.context.drawImage(layer.image, 0, 0);
    return this.context.drawImage(layer.cvs, 0, 0);
};

/**
 * Clear Canvas
 */
function clearCanvas(canvas) {
    return getContext(canvas).clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Get context
 */
function getContext(canvas) {
    var ctx = canvas.getContext('2d');

    // The translate is for preventing blurry lines
    ctx.translate(0.5, 0.5);
    return ctx;
}