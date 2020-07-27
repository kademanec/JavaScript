class User{

    constructor(firstname,middlename,lastname,age){
        this.firstname= firstname;
        this.middlename= middlename;
        this.lastname= lastname;
        this.age = age;

    }
    // fullName(){

    //     let full_name = `${this.firstname} ${this.middlename} ${this.lastname} is my full name `;

    //     return full_name;
    // }
    fullName(){return `${this.firstname} ${this.middlename} ${this.lastname} is my full name `; }

    editName(newname){

        const myname = newname.split(' ');
        this.firstname= myname[0];
        this.middlename = myname[1];
        this.lastname = myname[2];

        

    }


}

const mydetail = new User('chinmaya','Basavaraj','Kademane','25');
// mydetail.editName('puneeth Basavaraj Kademane');

console.log(mydetail);



