
  let userName = "Chinmaya"
    
  let password = "Asdf123"

let authenticate = function(myString){
    if((myString.length<12)){

        return true
    
    
    }
    return false
}
let authenticate1 = function(myString){
    if(myString.includes("@")){

        return true
    
    
    }
    return false
}



console.log(authenticate(userName));
console.log(authenticate1(password));
