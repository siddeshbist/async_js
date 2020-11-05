const btn = document.querySelector('button');

//translate wrapped by a callback function that executes every second
setTimeout(() => {
	btn.style.transform = 'translateX(100px)';
},1000);
