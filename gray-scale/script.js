const btn = document.getElementById('btn');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const upload = document.getElementById('upload');
const container = document.querySelector('.container');

var FILE = undefined;

btn.addEventListener('click', () => {
    // const url = "https://images.unsplash.com/photo-1628632371878-0f1b68787f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=847&q=80";

    // const url = './img.jpg'

    const url = FILE;
    const img = new Image();
    img.src = url;
    img.onload = () => {
        const w = img.width * 0.4;
        const h = img.height * 0.4;

        canvas.height = h;
        canvas.width = w;
        ctx.drawImage(img, 0, 0, w, h);

        const pixel = ctx.getImageData(0,0,w,h);
        const dst = ctx.createImageData(w,h);


        for (let i = 0; i < pixel.data.length; i += 4) {

            /* grayScale : new R,G,B =0.2126* R + 0.7152*G + 0.0722*B;
            new A = A
            https://stackoverflow.com/questions/17615963/standard-rgb-to-grayscale-conversion
            */
            let y = 0.2126 * pixel.data[i] + 0.7152 * pixel.data[i + 1] + 0.0722 * pixel.data[i + 2]
            y = parseInt(y, 10)
            dst.data[i] = y
            dst.data[i + 1] = y
            dst.data[i + 2] = y
            dst.data[i + 3] = pixel.data[i + 3]
          }
          ctx.putImageData(dst, 0, 0)

    }
})

upload.addEventListener('change', (e) => {
    // console.log(e.target.files[0])
    const file = e.target.files[0];
    
    const reader = new FileReader();
    reader.onload = function() {
        FILE = reader.result;
        var insert = '<img id="thumb" src="' + reader.result + '" width="300", height="300"><br>';
        document.querySelector('.container').innerHTML = insert; 
    }
    reader.readAsDataURL(file);
})