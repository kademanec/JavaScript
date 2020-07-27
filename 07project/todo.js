var ul = document.getElementById('list');
var li;
var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);
var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);
var removeall = document.getElementById('remove_all');
removeall.addEventListener('click',removeAll);

function addItem(){

    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);

    if(item===''){
        return false;
    }
    else{
        //create li
        var li = document.createElement('li');
        
        //create checkbox            
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');

        //create label
        var label = document.createElement('label');
        label.setAttribute('for','item');

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        ul.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
        li.className='visual';

        setTimeout(()=>{
            li.className='visual';
        },1)

        input.value ='';





    }
    
}


function removeItem(){
    li = ul.children
    
    console.log(li);
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index]);
        
        }
        
        
    }

}
function removeAll(){
    li = ul.children;
    console.log(li);
    for (let index = 0; index < li.length; index++) {

            ul.removeChild(li[index]);
            index--;
        
    }
}

