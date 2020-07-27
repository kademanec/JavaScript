class User{

    constructor(firstname,middlename,lastname,age){
        this.firstname= firstname;
        this.middlename= middlename;
        this.lastname= lastname;
        this.age = age;

    }
  
    fullName(){return `${this.firstname} ${this.middlename} ${this.lastname} is my full name `; }

    editName(newname){
        const myname = newname.split(' ');
        this.firstname= myname[0];
        this.middlename = myname[1];
        this.lastname = myname[2];
    }


}

class Teacher extends User{

    constructor(firstname,middlename,lastname,age,subject){
        super(firstname,middlename,lastname,age);
        this.subject= subject;

    }
    fullName(){
        return `${this.firstname} ${this.middlename} ${this.lastname} is my full name  and The subject is ${this.subject}`;
    }

}



// here if we don't have full name method in teacher class then it is over riding the parent class that is User.


const mydetail = new Teacher('chinmaya','Basavaraj','Kademane','25','python');


console.log(mydetail.fullName());



