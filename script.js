const inputfiled = document.getElementByid('fname');

inputfiled.addEventListener('blur',function(){
	inputfiled.value = inputfiled.value.toUpperCase();
});



