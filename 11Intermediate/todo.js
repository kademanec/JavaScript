const todos=[];

todos.push('Get up')
todos.push('Do workout')
todos.push('Code')
todos.push('Eat')
todos.push('Sleep')
todos.push('Repeat')

console.log(todos);


for (let index = 0; index < todos.length; index++) {
    const element = todos[index];
    console.log(`The ${index+1} thing I have to do is ${element}`);
    
    
}