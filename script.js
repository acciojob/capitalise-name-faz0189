const inputfiled = documentgetElementByid('fname')

inputfiled.addEventListener('blur',function(){
	inputfiled.value = inputfiled.value.toUpperCase();
})



