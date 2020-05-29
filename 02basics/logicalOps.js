var isVerified = false
var ticket_issued = true
var payment_done = true
var nothing_done= true

if (payment_done && ticket_issued && isVerified) {

    console.log("Yes he can watch the show");
    
    
}else if(isVerified ||nothing_done){
    console.log("No he can only watch trailer ");
    
}
else{
    console.log("Can leave for the day!!!");
    
}