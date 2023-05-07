const inputbox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");
function addTask(){
    if(inputbox.value === ''){
        alert("Please write something!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
}

ListContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);