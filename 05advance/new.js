
Bot.send("Welcome to CoronaVirus Statistics of India");
Bot.send("Please enter the state to know the result:");
async function respond(inputText){
	let data = await CampK12.fetch("GET","https://covid-india-cases.herokuapp.com/states",true);
	
	for(let i = 0;i<data.length;i++){
		console.log(data)
	}

 }