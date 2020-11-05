// const willGetYouADog = new Promise((resolve,reject)=>{
// 	const rand = Math.random();
// 	if(rand<0.5){
// 		resolve();
// 	}
// 	else{
// 		reject();
// 	}
// });

// //every promise has a .then method while will run if a promise is resolved. promises also have a .catch method which will run if rejected

// willGetYouADog.then(()=> {
// 	console.log("YAY WE GOT A DOG");
// });

// willGetYouADog.catch(()=>{
// 	console.log("No dog");
// });

//after 5000 seconds return resolve or reject
const makeDogPromise = () => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=> {
			const rand = Math.random();
			if(rand<0.5){
				resolve();
			}
			else{
				reject();
			}
		},5000);
	});
};

//then we just call function and attach .then which will execute if resolve returned 
makeDogPromise()
.then(()=>{
	console.log('YAY WE GOT A DOG');
})
.catch(()=>{
	console.log('no dog');
});