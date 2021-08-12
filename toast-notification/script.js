const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
    createNotification();
})

function createNotification() {
    const noticeEl = document.createElement('div');
    noticeEl.classList.add('toast');

    noticeEl.innerHTML = `
        <h4>Hello!! My Name is Happy</h4>
    `;

    container.appendChild(noticeEl)
    
    setTimeout(() => {
        noticeEl.remove()
    }, 3000)
}
