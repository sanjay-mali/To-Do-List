const inputBox = document.querySelector('.search-input')
const lists = document.querySelector('.lists')

function checked() {
    if (inputBox.value == '') {
        alert("Add a item")
    }
    else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        lists.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = ""
    saveTask()
}

lists.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveTask()
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveTask()
    }
},false)

function saveTask(){
    localStorage.setItem("data" , lists.innerHTML);
}
function showTask(){
    lists.innerHTML = localStorage.getItem("data")
}
showTask()