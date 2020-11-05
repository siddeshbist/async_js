const willGetYouADog = new Promise((resolve,reject)=>{
	const rand = Math.random();
	if(rand<0.5){
		resolve();
	}
	else{
		reject();
	}
});

//every promise has a .then method while will run if a promise is resolved. promises also have a .catch method which will run if rejected

willGetYouADog.then(()=> {
	console.log("YAY WE GOT A DOG");
});

willGetYouADog.catch(()=>{
	console.log("No dog");
});

