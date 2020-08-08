let addTask = document.getElementById("add-task");
let ul = document.querySelector("ul");
let error = document.getElementById("error");
let checkBox;




function init() {
    error.style.visibility = "hidden";

}

init();

addTask.addEventListener("click", function () {

    let taskInput = document.getElementById("enter-task").value;
    let taskInput1 = document.getElementById("enter-task");
     checkBox = document.createElement("INPUT");
    checkBox.setAttribute("type", "checkbox");
    let taskBtn = document.createElement("button");
    let taskTrash = document.createElement("i");
    taskTrash.setAttribute("class", "fa fa-trash");
    taskBtn.appendChild(taskTrash);
    checkBox.style.float = "left";
    checkBox.style.width = "15px";
    checkBox.style.height = "15px";
    checkBox.style.marginTop = "10px";


    taskBtn.style.float = "right";
    taskBtn.style.marginTop = "6px";
    taskBtn.style.width = "20px";
    taskBtn.style.height = "20px";
    taskBtn.style.marginRight = "10px";
    taskBtn.style.border = "none";




    if (taskInput.length != 0) {
        let li = document.createElement("li");


        li.appendChild(document.createTextNode(taskInput));


        li.style.backgroundColor = "white";
        li.style.border = "black solid";
        li.style.borderRadius = "15px 15px";
        li.style.marginTop = "10px";
        li.appendChild(checkBox);
        li.onmouseover = function () {
            li.appendChild(taskBtn);


        }

        li.onmouseleave = function () {
            li.removeChild(taskBtn);
        }

        ul.appendChild(li);
        document.getElementById("enter-task").value='';

        checkBox.addEventListener("click",function () {

            li.style.textDecoration=" line-through";
            li.style.color="#B8B8B8";



        })

        taskBtn.addEventListener("click",function () {

            ul.removeChild(li);

        })






    } else {


        error.style.visibility = "visible";

    }


})











