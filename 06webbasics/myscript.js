const myscr = document.querySelectorAll("p");


console.log(myscr[0]);

myscr.forEach(function(p){
    p.textContent = "Hellooo";
})

myscr.forEach((p)=>p.textContent = "Hellooo world")


const myNewPara = document.createElement('p');

myNewPara.textContent = 'Hello I am from JS';

document.querySelector('Body').appendChild(myNewPara);


document.querySelector("Button").addEventListener('click',(event)=>{
    event.target.textContent='I was Clicked';
})