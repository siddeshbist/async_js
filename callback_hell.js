const btn = document.querySelector('button');

//translate wrapped by a callback function that executes every second. added another setTimout so every second the button moves 100 pixels
setTimeout(() => {
	btn.style.transform = 'translateX(100px)';
	setTimeout(()=> {
		btn.style.transform = 'translateX(200px)';
	},2000);
},1000);


const moveX = (element,amount,delay,callback) => {
	setTimeout(()=>{
		element.style.transform = 'translateX(${amount}px)';
		if (callback) callback();
	},delay);
};

moveX(btn,100,1000,()=>{moveX(btn,200,1000);
});