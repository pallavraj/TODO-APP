
var uList = document.getElementById('list');
var li;



var addButton = document.getElementById('add')

addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove')

removeButton.addEventListener('click',removeItem)

var removeAll = document.getElementById('removeAll');

removeAll.addEventListener('click',removeAllItem);

function addItem() {



}

function removeItem() {
li = uList.children
    
    for (let index = 0;index< li.length;index++){

    while(li[index] && li[index].children[0].checked){
        uList.removeChild(li[index])
    }
    }
}

function removeAllItem() {
    li = uList.children

    for (let index = 0;index< li.length;index++){

        while(li[index] && li[index].children){
            uList.removeChild(li[index])
        }

    }
}


