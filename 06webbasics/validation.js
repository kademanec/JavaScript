

function Validation(){
    let value1 = document.querySelector("#myForm").value;
    
    if(isNaN(value1)|| 1<value1|| value1>30){
        console.log("Not a Valid User")
    }
    else{
        console.log("Valid User")
    }
}