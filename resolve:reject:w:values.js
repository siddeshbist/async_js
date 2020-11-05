const fakeRequest = (url) => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			const rand = Math.random();
			if(rand<0.3){
				reject({status:404});
			}
			else{
				const pages = {
					'/users':[
					{id:1,username:'Bilbo'},{id:5,username:'Esmeralda'}],
					'/about':'This is the about page!'
				};
				const data = pages[url];
				resolve({status:200,data});
			}
		},3000);
	});
};

// /about is an endpoint. Our app has 2 endpoints /about and /users
fakeRequest('/about')
.then((res)=>{
	console.log("Status Code", res.status)
	console.log("Data",res.data)
	console.log("Request Worked");
})
.catch((res)=>{
	console.log(res.status);
	console.log("Request failed");
});


