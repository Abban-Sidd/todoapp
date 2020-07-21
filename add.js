var list = document.getElementById("lists");

function additem(){
    var todoitem = document.getElementById("todo-items");
    var li = document.createElement("li")
    var liText = document.createTextNode(todoitem.value)
    li.appendChild(liText)
    list.appendChild(li)
    todoitem.value = ""

// delbtn
var delBtn = document.createElement("button")
var delText = document.createTextNode("DELETE")
delBtn.setAttribute("onclick","deleteli(this)")
delBtn.setAttribute("class","delbtn")

delBtn.appendChild(delText)
li.appendChild(delBtn)

// editbtn
var editBtn = document.createElement("button")
var editText = document.createTextNode("EDIT")
editBtn.setAttribute("onclick","editli(this)")
editBtn.setAttribute("class","editbtn")

editBtn.appendChild(editText)
li.appendChild(editBtn)

console.log(li)

}

function deleteli(e){
    e.parentNode.remove()
}

function deleteall(){
    list.innerHTML = ""
}

function editli(d){
  var val =  d.parentNode.firstChild.nodeValue
  var editValue = prompt("Enter Edit Value",val)
  d.parentNode.firstChild.nodeValue = editValue
}