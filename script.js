let inputTask = document.getElementById('task')
let buttonTask = document.querySelector('.btn-add')
let container = document.querySelector('.container1')
buttonTask.addEventListener('click', () => {
    const taskText = inputTask.value.trim();
    if (taskText) {
        const newDiv = document.createElement('div')
        newDiv.classList.add('task-item')
        const spanText = document.createElement('span')
        spanText.classList.add('task')
        spanText.textContent = inputTask.value
        const btnCom = document.createElement('button')
        btnCom.textContent = 'Complete'
        btnCom.addEventListener('click', () => {
            newDiv.classList.toggle('completed');
        });
        const btnDel = document.createElement('button')
        btnDel.textContent = 'Delete'
        btnDel.addEventListener('click', () => {
            newDiv.remove();
        });
        newDiv.appendChild(spanText)
        newDiv.appendChild(btnCom)
        newDiv.appendChild(btnDel)
        container.appendChild(newDiv)
        inputTask.value = '';
    }
})