let myVideoObjectOne={

    title:'Variables in JS',
    video_length:15,
    video_creator:'Hitesh Chowdhary',
    subscription:'subscribed',

}
let myVideoObjectTwo={

    title:'Functions in JS',
    video_length:20,
    video_creator:'Hitesh Chowdhary',
    subscription:'subscribed',

}


// console.log(`I have taken a course called ${myVideoObject.title} which as a video length of ${myVideoObject.video_length}m and the author is ${myVideoObject.video_creator} where my Subscription is being ${myVideoObject.subscription}`);

let changeLength = function(myObject){

    return {
        formatOne:`Length of the new video is ${myObject.video_length + 5 }`,
        formatTwo:`Length of the new video is ${myObject.video_length + 7}`,
    }
    
}

adOne = changeLength(myVideoObjectTwo)
console.log(adOne.formatOne)
// changeLength(myVideoObjectTwo)

















// let UserOne={

//     user_name:'Chinmaya',
//     course:'JavaScript',
//     validity:'3 Years',

// }


// console.log(`The user who as taken ${User.course} is ${User.user_name} which as validity of ${User.validity}`);
