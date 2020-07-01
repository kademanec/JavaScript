let myTodos = {
    day:'monday',
    meetings:0,
    meetDone:0,

    made_meetings: function(){

        this.meetings = this.meetings+5
        console.log("Total meetings: ",this.meetings);
        
    },
    meetings_Done: function(){

        this.meetDone = 3
        this.meetRemained = this.meetings-this.meetDone;
        console.log(`Meet done is: ${this.meetDone} \nMeetings remaining: ${this.meetRemained}`);
        
    }


}

myTodos.made_meetings();
myTodos.meetings_Done();