//Subir con boton

document.getElementById("button-up").addEventListener("click", scrollUp);

 function scrollUp(){
 	var currentScroll = document.documentElement.scrollTop;
 	if(currentScroll > 0){
 		window.requestAnimationFrame(scrollUp);
 		window.scrollTo(0, currentScroll -(currentScroll / 10));
 	}
 }


//Bajar con boton
 function scrollDown(){
        window.scrollTo(0, document.body.scrollHeight);
 }



