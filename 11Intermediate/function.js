let value = function(first_name){

   console.log(`Hello this is ${first_name}`);
   

}

value('Puneeth')

let sumation = function(first_value,second_value){

    total_value =first_value+second_value
    console.log("Total Sum: ",total_value);
    


}

let multiplier = function(first_value=25,second_value=11){

    total_value =first_value*second_value
    console.log("Total Value: ",total_value);
    


}

sumation(100,200)
multiplier()


let getUser = function(name="User",course="Yet to take!"){

    return 'Hey! '+ name +' your course is '+course

}

console.log(getUser('Chinmaya','JavaScript'));
