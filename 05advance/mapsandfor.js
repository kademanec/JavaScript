var chinmaya = {
    quality:"chinmaya is good man",
    isActive:1,
    age:24
}
var ash = {
    quality:"ash is good man",
    isActive:1,
    age:24
}
var sharath = {
    quality:"sharath is good man",
    isActive:0,
    age:24
}


var users = new Map();

users.set('chinmaya',chinmaya);
users.set('ash',ash);
users.set('sharath',sharath);

// console.log(users);

// for (const key of users.keys()) {
//     console.log(key);
    
// }


// for (const [key,value] of users.entries()) {
//     console.log(key+ "=" +value.quality);
    
// }
users.forEach((value,key)=>console.log(key+"="+value.quality));
