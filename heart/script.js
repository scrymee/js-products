const container = document.querySelector('.container');

container.addEventListener('click', (e) => {

    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤︎';
    heart.style.top = `${e.offsetY - 10}px` ;
    heart.style.left = `${e.offsetX - 10}px`
    container.append(heart);
    setTimeout(() => {
        heart.remove();
    }, 400)
})

