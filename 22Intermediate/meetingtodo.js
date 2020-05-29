let myTodos = {
    day:'monday',
    meetings:0,
    meetDone:0,
}

let addMeeting = function(todo,meet = 0){

        todo.meetings = todo.meetings + meet

}

let meetDone = function(todo,meet=0){

        todo.meetDone = todo.meetDone + meet

}

let totalSummary = function(todo){

        return `The total meetings done are : ${todo.meetings} 
        & remaining meetings are :${todo.meetings-todo.meetDone} `
}
console.log(myTodos);

addMeeting(myTodos,10)
meetDone(myTodos,5)
console.log(totalSummary(myTodos,5))

console.log(myTodos);

