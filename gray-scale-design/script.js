const uploadedCanvas = document.getElementById('uploaded');
const uploadedctx = uploadedCanvas.getContext('2d');
const grayCanvas = document.getElementById('gray');
const grayctx = grayCanvas.getContext('2d');

const upload = document.getElementById('upload');
const grayBtn = document.getElementById('graybtn');

var uploadedImg = undefined;

var w = 0;
var h = 0;

upload.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.onload = () => {
        uploadedImg = reader.result;
        drawUploadedThumb();
    }
    reader.readAsDataURL(file);
})

grayBtn.addEventListener('click', () => {
    changeGray();
})

function drawUploadedThumb() {
    const img = new Image();
    img.src = uploadedImg;

    img.onload = () => {
        w = img.width;
        h = img.height;
        uploadedCanvas.width = w;
        uploadedCanvas.height = h;
        uploadedctx.drawImage(img, 0, 0);
    }
}

function changeGray() {
    const pixel = uploadedctx.getImageData(0, 0, w, h);
    const dst = grayctx.createImageData(w, h);
    for(i = 0; i < pixel.data.length; i+=4) {
        var r = pixel.data[i];
        var g = pixel.data[i + 1];
        var b = pixel.data[i + 2];
        var a = pixel.data[i + 3];
        var y = 0.3 * r + 0.59 * g + 0.11 * b;
        dst.data[i] = y;
        dst.data[i + 1] = y;
        dst.data[i + 2] = y;
        dst.data[i + 3] = a;
    }
    grayCanvas.width = w;
    grayCanvas.height = h;
    grayctx.putImageData(dst, 0, 0);

    

}