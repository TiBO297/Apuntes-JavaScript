/* 3.141592 TiBO */

/* ----------------------- Boton subir al top de la pagina ------------------------------ */
document.getElementById("button-up").addEventListener("click", scrollUp);

 function scrollUp(){
 	var currentScroll = document.documentElement.scrollTop;
 	if(currentScroll > 0){
 		window.requestAnimationFrame(scrollUp);
 		window.scrollTo(0, currentScroll -(currentScroll / 10));
 	}
 }
/* ----------------------- Fin oton subir al top de la pagina ------------------------------ */







/* -----------------------Bajar al final de la pagina con boton ---------------------------- */
 function scrollDown(){
        window.scrollTo(0, document.body.scrollHeight);
 }
/* -----------------------Bajar al final de la pagina con boton ---------------------------- */





window.onload=function()
{



/* ------------------- Cambio de texto de boton de Mostrar/Esconder los temas en el menu --------------------- */
       //la primer clase que tiene es la de toggle
       const boton = document.querySelector(".toggle"); 

        //luego cambia la clase cuando se da clic, y se cambia a la otra dependiendo de cual tenga
       boton.addEventListener("click", function(evento){
       boton.classList.toggle("toggleClic");
       //y se le cambia el texto sabiendo que empieza con xontraer temas
              if(boton.innerHTML == ("Contraer temas")){
                     boton.innerHTML = ("Expandir temas");
              }else{
                     boton.innerHTML = ("Contraer temas");
              }
       }
       )
/* ----------------- Fin  Cambio de texto de boton de Mostrar/Esconder los temas en el menu ------------------------- */
       



/* --------------------------------- Mostrar/Esconder los DIVS de explicación ----------------------------- */

/**
 ~ ~ ~ Al dar clic en el boton de la izquierda del tema se despliega su explicacion correspondiente 
 Se podria hacer una clase y pasarle los parametros dependiendo de que boton se preciona para que no se repita mucho codigo
 Pero se tendria que identificar que boton se preciono asignarle a cada boton su bloque de explicacion
**/

//Generalidades
       //Tomamos al boton
       const esconderMostrar = document.querySelector(".btnGeneralidades");
       
       //Le damos clic al boton
       esconderMostrar.addEventListener("click", function(evento){
              //Tomamos el div de Generalidades
              const tema = document.querySelector(".escondidoGeneralidades") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              tema.classList.toggle("mostrar")
        }
        )

//Definir variables
       const btnVariables = document.querySelector(".btnVariables");
              
       //Le damos clic al boton
       btnVariables.addEventListener("click", function(evento){
              //Tomamos el div de Definir variables
              const temaVariables = document.querySelector(".escondidoVariables") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaVariables.classList.toggle("mostrar")
       }
       )
        
//Concatenar
       const btnConcatenar = document.querySelector(".btnConcatenar");
                     
       //Le damos clic al boton
       btnConcatenar.addEventListener("click", function(evento){
              //Tomamos el div de Definir variables
              const temaConcatenar = document.querySelector(".escondidoConcatenar") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaConcatenar.classList.toggle("mostrar")
       }
       )


//Arrays
       const btnArrays = document.querySelector(".btnArrays");
                     
       //Le damos clic al boton
       btnArrays.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaArrays = document.querySelector(".escondidoArrays") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaArrays.classList.toggle("mostrar")
       }
       )
        

//Estructura IF
       const btnIF = document.querySelector(".btnIF");
                            
       //Le damos clic al boton
       btnIF.addEventListener("click", function(evento){
              //Tomamos 
              const temaIF = document.querySelector(".escondidoIF") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaIF.classList.toggle("mostrar")
       }
       )       

//Estructura While
       const btnWhile = document.querySelector(".btnWhile");
                            
       //Le damos clic al boton
       btnWhile.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaWhile = document.querySelector(".escondidoWhile") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaWhile.classList.toggle("mostrar")
       }
       )

//Break
       const btnBreak = document.querySelector(".btnBreak");
                            
       //Le damos clic al boton
       btnBreak.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaBreak = document.querySelector(".escondidoBreak") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaBreak.classList.toggle("mostrar")
       }
       )

//DoWhile
       const btnDoWhile = document.querySelector(".btnDoWhile");
                                   
       //Le damos clic al boton
       btnDoWhile.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaDoWhile = document.querySelector(".escondidoDoWhile") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaDoWhile.classList.toggle("mostrar")
       }
       )

//For
       const btnFor = document.querySelector(".btnFor");
                                   
       //Le damos clic al boton
       btnFor.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaFor = document.querySelector(".escondidoFor") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaFor.classList.toggle("mostrar")
       }
       )

//ForIn
       const btnForIn = document.querySelector(".btnForIn");
                                   
       //Le damos clic al boton
       btnForIn.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaForIn = document.querySelector(".escondidoForIn") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaForIn.classList.toggle("mostrar")
       }
       )

//ForIn
       const btnForOf = document.querySelector(".btnForOf");
                                   
       //Le damos clic al boton
       btnForOf.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaForOf = document.querySelector(".escondidoForOf") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaForOf.classList.toggle("mostrar")
       }
       )

//Funciones
       const btnFunciones = document.querySelector(".btnFunciones");
                                   
       //Le damos clic al boton
       btnFunciones.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaFunciones = document.querySelector(".escondidoFunciones") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaFunciones.classList.toggle("mostrar")
       }
       )

//Clases
       const btnClases = document.querySelector(".btnClases");
                                   
       //Le damos clic al boton
       btnClases.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaClases = document.querySelector(".escondidoClases") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaClases.classList.toggle("mostrar")
       }
       )

//POO
       const btnPoo = document.querySelector(".btnPoo");
                                   
       //Le damos clic al boton
       btnPoo.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaPoo = document.querySelector(".escondidoPoo") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaPoo.classList.toggle("mostrar")
       }
       )

//Cadena
       const btnCadena = document.querySelector(".btnCadena");
                                   
       //Le damos clic al boton
       btnCadena.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaCadena = document.querySelector(".escondidoCadena") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaCadena.classList.toggle("mostrar")
       }
       )

//MetodoArrat
       const btnMetodoArray = document.querySelector(".btnMetodoArray");
                                   
       //Le damos clic al boton
       btnMetodoArray.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaMetodoArray = document.querySelector(".escondidoMetodoArray") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaMetodoArray.classList.toggle("mostrar")
       }
       )

//Math
       const btnMath = document.querySelector(".btnMath");
                                   
       //Le damos clic al boton
       btnMath.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaMath = document.querySelector(".escondidoMath") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaMath.classList.toggle("mostrar")
       }
       )

//Consola
       const btnConsola = document.querySelector(".btnConsola");
                                   
       //Le damos clic al boton
       btnConsola.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaConsola = document.querySelector(".escondidoConsola") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaConsola.classList.toggle("mostrar")
       }
       )

//DOM
       const btnDOM = document.querySelector(".btnDOM");
                                   
       //Le damos clic al boton
       btnDOM.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaDOM = document.querySelector(".escondidoDOM") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaDOM.classList.toggle("mostrar")
       }
       )

//SeleccionElementos
       const btnSeleccionElementos = document.querySelector(".btnSeleccionElementos");
                                   
       //Le damos clic al boton
       btnSeleccionElementos.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaSeleccionElementos = document.querySelector(".escondidoSeleccionElementos") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaSeleccionElementos.classList.toggle("mostrar")
       }
       )

//MetAtributos
       const btnMetAtributos = document.querySelector(".btnMetAtributos");
                                   
       //Le damos clic al boton
       btnMetAtributos.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaMetAtributos = document.querySelector(".escondidoMetAtributos") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaMetAtributos.classList.toggle("mostrar")
       }
       )

//AtributosGlob
       const btnAtributosGlob = document.querySelector(".btnAtributosGlob");
                                   
       //Le damos clic al boton
       btnAtributosGlob.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaAtributosGlob = document.querySelector(".escondidoAtributosGlob") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaAtributosGlob.classList.toggle("mostrar")
       }
       )

//AtributosInputs
       const btnAtributosInputs = document.querySelector(".btnAtributosInputs");
                                   
       //Le damos clic al boton
       btnAtributosInputs.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaAtributosInputs = document.querySelector(".escondidoAtributosInputs") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaAtributosInputs.classList.toggle("mostrar")
       }
       )

//AtributosStyle
       const btnAtributosStyle = document.querySelector(".btnAtributosStyle");
                                   
       //Le damos clic al boton
       btnAtributosStyle.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaAtributosStyle = document.querySelector(".escondidoAtributosStyle") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaAtributosStyle.classList.toggle("mostrar")
       }
       )

//ClassList
       const btnClassList = document.querySelector(".btnClassList");
                                   
       //Le damos clic al boton
       btnClassList.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaClassList = document.querySelector(".escondidoClassList") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaClassList.classList.toggle("mostrar")
       }
       )

//ObModElementos
       const btnObModElementos = document.querySelector(".btnObModElementos");
                                   
       //Le damos clic al boton
       btnObModElementos.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaObModElementos = document.querySelector(".escondidoObModElementos") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaObModElementos.classList.toggle("mostrar")
       }
       )

       
//CreaElementos
       const btnCreaElementos = document.querySelector(".btnCreaElementos");
                                   
       //Le damos clic al boton
       btnCreaElementos.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaCreaElementos = document.querySelector(".escondidoCreaElementos") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaCreaElementos.classList.toggle("mostrar")
       }
       )

//ObModChilds
       const btnObModChilds = document.querySelector(".btnObModChilds");
                                   
       //Le damos clic al boton
       btnObModChilds.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaObModChilds = document.querySelector(".escondidoObModChilds") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaObModChilds.classList.toggle("mostrar")
       }
       )

//MetChild
       const btnMetChild = document.querySelector(".btnMetChild");
                                   
       //Le damos clic al boton
       btnMetChild.addEventListener("click", function(evento){
              //Tomamos el div 
              const temaMetChild = document.querySelector(".escondidoMetChild") ;
              //Le cambiamos la clase a mostrarla dentro del clic
              temaMetChild.classList.toggle("mostrar")
       }
       )


/* --------------------------------- Fin mostrar/Esconder los DIVS de explicación ----------------------------- */
};


