var inputTask = document.querySelector("#input-task")
var btnAddTask = document.querySelector("#add-task")
var errArea = document.querySelector("#error")
var ulList = document.querySelector("#box")

btnAddTask.addEventListener("click" , () =>{
    var task = inputTask.value
    if(task === "")
        errArea.innerText = "Please Enter a task"
    else{
        errArea.innerText = ""
        let li = document.createElement("li")
        li.textContent = task
        let a = document.createElement("a")
        a.textContent = "🗑"
        a.href = "javascript:void(0)"
        a.className = "fas"
        a.className = "fa-trash"
        a.areaHidden ="true"
        ulList.appendChild(li)
        li.appendChild(a)
    }
    inputTask.value = ""
    
})

let btnRemove = document.querySelector('ul')
btnRemove.addEventListener("click" , (e)=>{
    let li = e.target.parentNode;
    
    ulList.removeChild(li)
})
let taskCompletedHAndler = document.querySelector('ul')
taskCompletedHAndler.addEventListener("click" , (e)=>{
    // let li = e.target.parentNode;
    // li.style.textDecoration = "line-through"
    
    
})
