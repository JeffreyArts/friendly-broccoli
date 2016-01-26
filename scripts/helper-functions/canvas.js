/**
 * Create Canvas
 */
function createCanvas() {
    return document.createElement('canvas');
}

/**
 * Add layer to Canvas
 */
function addLayerToCanvas(canvas,layer) {
    return getContext(canvas).drawImage(layer, 0, 0);
}

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