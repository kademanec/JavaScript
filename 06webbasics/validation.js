

function Validation(){
    let value1 = document.querySelector("#myForm").value;
    
    if(isNaN(value1)|| 1<value1|| value1>30){
        console.log("Not a Valid User")
    }
    else{
        console.log("Valid User")
    }
}



    document.querySelector(".myForm").addEventListener('submit',(event)=>{
        event.preventDefault();
        console.log(event.target.FirstName.value);
        console.log(event.target.LastName.value);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        console.log(event.target.repassword.value);

        if (event.target.FirstName.value==''||event.target.LastName.value==''||event.target.email.value==''||event.target.password.value=='' || event.target.repassword.value=='') {
           alert("enter all the values correctly")
            return false
        }

        if (event.target.password.value==event.target.repassword.value) {
            console.log("Welcome to the Javascript")
        } else {
            console.log("User Not Found")
        }
        event.target.FirstName.value='';
        event.target.LastName.value='';
        event.target.email.value='';
        event.target.password.value='';
        event.target.repassword.value='';
        

    })



