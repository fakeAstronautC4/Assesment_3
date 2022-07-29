console.log("hello world");

let catty = document.querySelector('img')

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully!');
}

function hoverOver(event){
	alert('Feed me pleb');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
catty.addEventListener('mouseover', hoverOver);