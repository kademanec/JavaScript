const convertToRS = (dollars)=>{
   if(typeof dollars ==='number'){
        return dollars*75;
   }else{
     throw Error("The dollars should be in numbers.")
   }
   
    
}
try{
const value = convertToRS(5);
console.log(value);
}
catch(error){

    console.log(error);
    

}
