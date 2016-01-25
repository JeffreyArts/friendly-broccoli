/**
 * Get base64 image
 *
 * Encodes the canvas parameter into a base64 encoded image
 */
var getBase64Image = function (canvas) {
    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to
    // guess the original format, but be aware the using "image/jpg"
    // will re-encode the image.
    return canvas.toDataURL("image/png");
}