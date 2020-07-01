const get_it = (name)=>`Hello ${name}!!! how's it going?`


console.log(get_it('chinmaya'));

const things = [{title:'Hey Chinmaya',
                isDone: true,},
                {title: 'Get Up',
                    isDone: true,},
                    {title: 'fresh Up',
                        isDone: true,},
                        {title: 'Start Code',
                            isDone: true,},
                            {title: 'Read',
                                isDone: true,},
                                {title: 'sleep',
                                    isDone: false,}]

const now_filter = things.filter((ifdone)=> ifdone.isDone === true).map(ifdone =>ifdone.title).join(' , ')

console.log(now_filter);

//arrow function should not me be used in methods and constructor
const things1 = {

        title:'Hello world',
        desc:'Hello People',
        func: ()=>{
         return `Hellooooooo ${this.title}`
        }

}

console.log(things1.func());
