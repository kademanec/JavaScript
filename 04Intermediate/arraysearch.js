let new_array = [
{   title:"Get Up",
    status:true
},
{   title:"Code All day",
    status:true
},
{
    title:"Have Food",
    status:false
},
{
    title:"Take a Nap",
    status:false
}]

//method 1 will find index
let get_id = new_array.findIndex(function(todo,index){

    
    console.log(todo.title);
    return todo.title ===  'Have Food'
    
})

console.log(get_id);
//method 2 will find the value

let get_id1 = new_array.find(function(todo,index){

    
    console.log(todo.title);
    return todo.title ===  'Have Food'
    
})
console.log(get_id1);
