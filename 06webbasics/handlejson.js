const obj = {
    'name':'chinmaya',
    'age':24,
    'isactive':true,

}

const objtoString= JSON.stringify(obj);

console.log(typeof objtoString);

localStorage.setItem('student_details',obj);

var getObj = localStorage.getItem('student_details');


const stringtoOBJ = JSON.parse(objtoString);

console.log(stringtoOBJ);

console.log(stringtoOBJ.age=26);

console.log(stringtoOBJ);
