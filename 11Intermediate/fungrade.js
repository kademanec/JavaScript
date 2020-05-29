let access_percentage = function(current_marks,total_marks){

        let grade = ''

        if (current_marks>=90) {

            grade = 'A'
            
        } else if(current_marks>=75) 
        {
            grade = 'B'
        }
        else if(current_marks>=60)
        {
            grade = 'C'
        }
        else{
            grade = 'D'
        }

        return `The grade of the candidate is ${grade}`
}

let result = access_percentage(80,100)

console.log(result);
