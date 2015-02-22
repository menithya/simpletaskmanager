var taskManager = function(e){
    var e = e;
    var dragTarget;

    this.addListTempate = function(){
        var currentTaskTemplate = document.getElementsByClassName("taskTemp")[0];
        currentTaskTemplate = currentTaskTemplate.cloneNode(true);
        var taskArea = e.target.parentNode;
        currentTaskTemplate.style.display = "block";
        currentTaskTemplate.children[0].value = "";
        taskArea.appendChild(currentTaskTemplate);
    },

    this.add = function(){
        var parent = e.target.parentNode;
        var superParent  = e.target.parentNode.parentNode;
        var textareaval = e.target.parentNode.children[0].value;

        var task = document.getElementsByClassName("task")[0];
        task = task.cloneNode(true);
        var content = task.children;
        content = content[0];
        content.textContent = textareaval;

        task.style.display = "block";

        parent.remove();
        superParent.appendChild(task);
    },

    this.deletet = function(){
        var parent = e.target.parentNode;
        parent.remove();
    }
}


var makeTaskTemp = function(e){
    var writetaskObj = new taskManager(e);
    writetaskObj.addListTempate();
}

var addTask = function(e){
    var addTaskobj = new taskManager(e);
    addTaskobj.add();
}


var deletTask = function(e){
    var deletTaskObj = new taskManager(e);
    deletTaskObj.deletet();
}


var listOperationManager = function(event){
    var e =event;

    this.createList = function(){
        var listName = document.getElementById("listName").value;
        var listTemp = document.getElementsByClassName("taskArea")[0];
        listTemp = listTemp.cloneNode(true);
        listTemp.setAttribute("class","startLeft taskBlockNew");
        listTemp.style.display = "block";
        var parent = document.getElementById("taskListArea");
        parent.appendChild(listTemp);
        e.target.parentNode.children[0].value = "";
    }
}


var createList = function(e){
    var newListObj = new listOperationManager(e);
    newListObj.createList();
}
//

var dragAndDropOperation = function(e){

    var ev = e;

    this.drag = function(){
        ev.dataTransfer.effectAllowed='move';
        dragTarget = ev;
        ev.dataTransfer.setData("text/html", ev.target.innerHTML);
        ev.dataTransfer.setDragImage(ev.target,120,0);
        return true;
    },

    this.dragEnter = function(){
        event.preventDefault();
        return true;
    },

    this.dragOver = function(){
        event.preventDefault();
        return true;
    },

    this.dragDrop = function(){
        var data = ev.dataTransfer.getData("text/html");
        var div = document.createElement("div");
        div.innerHTML = data;
        div.setAttribute("draggable","true");
        div.setAttribute("ondragstart","return dragStart(event);")
        ev.target.appendChild(div);
        dragTarget.target.style.display = "none";
        ev.stopPropagation();
        return true;
    }
}

var dragStart = function(e){
    var dragObj = new dragAndDropOperation(e)
    dragObj.drag();
}

var dragEnter = function(e){
    var dragEnterObj = new dragAndDropOperation(e);
    dragEnterObj.dragEnter();
}

var dragOver = function(e){
    var dragOverObj = new dragAndDropOperation(e);
    dragOverObj.dragOver();
}

var dragDrop = function(e){
    var dragDropObj = new dragAndDropOperation(e);
    dragDropObj.dragDrop();
}