function addTask() {
    // Input Value
    var input = document.getElementById('myInput').value;

    if(input == '') {
        alert("You Must Enter a Task");
    }
    else if (document.getElementById('might').checked){
        addMight(input);
    } else if(document.getElementById('todo').checked){
        addDo(input);
    } else if(document.getElementById('done').checked){
        addDone(input);
    }
    else{
        alert("You Must Select A Type");
    }

    //Reset Form
    document.getElementById('myInput').value = '';
    document.getElementById('might').checked = false;
    document.getElementById('todo').checked = false;
    document.getElementById('done').checked = false;
    var del = document.getElementsByClassName("delete");

    for (var i = 0; i < del.length; i++) {
        del[i].onClick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    
}

function closeBtn(li) {
    var span = document.createElement("Span")
    var txt = document.createTextNode("\u00D7");
    span.className = "delete";
    span.appendChild(txt);
    li.appendChild(span);
    
    
    
}


function addMight(input) {
    var li = document.createElement("li");
    var txt = document.createTextNode(input);
    li.appendChild(txt);
    var ul = document.getElementById("listMight").appendChild(li);
    closeBtn(li);
}

function addDo(input) {
    var li = document.createElement("li");
    var txt = document.createTextNode(input);
    li.appendChild(txt);
    var ul = document.getElementById('listToDo').appendChild(li);
    closeBtn(li);
}

function addDone(input) {
    var li = document.createElement("li");
    var txt = document.createTextNode(input);
    li.appendChild(txt);
    var ul = document.getElementById('listDone').appendChild(li);
    // closeBtn(li);
}