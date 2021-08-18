const lists = document.getElementById('lists');
const todoText = document.getElementById('todoText');
const todoBtn = document.getElementById('todoBtn');

let todoEl = [];
let liEl = [];




let todo = "";


getLS();
// get ToDoEl
updatetoDoEl();
updateLiEl();


todoBtn.addEventListener('click', () => {
    todo = todoText.value;
    if(todo != "") {
        addToDoList(todo);
    }
})


// liEl.forEach(ele => {
//     ele.onclick = (e) => {
//         console.log('A');
//         e.target.classList.toggle('finished');
//         updatetoDoEl();
//         setLS();
//     }
// })





function addToDoList(text) {
    const todoCount = todoEl.length;
    const li = document.createElement('li');
    li.classList.add('todo');
    li.innerHTML = `
        <label for="list${todoCount + 1}" class="todo-label">
            <input type="checkbox" name="" id="list${todoCount + 1}" value="${text}">
            <span class="todo-text">${text}</span>
        </label>
    `;
    lists.appendChild(li);

    li.addEventListener('click', (e) => {
        e.target.classList.toggle('finished');
        setLS();

    })
    updatetoDoEl();
    setLS();
    resetText();
}

function updatetoDoEl() {
    todoEl = document.querySelectorAll('.todo-text');
}
function updateLiEl() {
    liEl = document.querySelectorAll('.todo');
}

function resetText() {
    todoText.value = "";
}

function setLS() {
    let lists = [];
    //not で含むものを除外
    const el = document.querySelectorAll('.todo-text:not(.finished)');

    for (let i = 0; i < el.length; i++) {
        lists.push(el[i].innerText);
    }
    localStorage.setItem('todo', JSON.stringify(lists));
}

function getLS() {
    let lists = JSON.parse(localStorage.getItem('todo'));
    if(lists) {
        lists.forEach(text => {
            addToDoList(text);
        });
    }
}