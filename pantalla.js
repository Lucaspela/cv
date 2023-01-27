function setUpEventos(){


  //aparecion de los parrafos Objetivos al scroll a los 600px aparecen
    let animado = document.getElementsByClassName('objetivo');
    function mostrarScroll(){
        let scrollTop = document.documentElement.scrollTop;
        for (i=0; i<animado.length;i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 600 < scrollTop){
            animado[i].style.opacity = 1;
        }
        }
    }
    window.addEventListener('scroll',mostrarScroll);

    
    




    
        // Variables
        const IMAGENES = [
            'img/certiUno.jfif',
            'img/certiDos.jfif',
            'img/certiTres.jfif'
        ];
        const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
        let posicionActual = 0;
        let botonRetroceder = document.querySelector('#retroceder');
        let botonAvanzar = document.querySelector('#avanzar');
        let imagen = document.querySelector('#imagen');
        let botonPlay = document.querySelector('#play');
        let botonStop = document.querySelector('#stop');
        let intervalo;
    
        // Funciones
    
        /**
         * Funcion que cambia la foto en la siguiente posicion
         */
        function pasarFoto() {
            if(posicionActual >= IMAGENES.length - 1) {
                posicionActual = 0;
            } else {
                posicionActual++;
            }
            renderizarImagen();
        }
    
        /**Carrucel 
         * Funcion que cambia la foto en la anterior posicion
         */
        function retrocederFoto() {
            if(posicionActual <= 0) {
                posicionActual = IMAGENES.length - 1;
            } else {
                posicionActual--;
            }
            renderizarImagen();
        }
    
        /*
        Funcion que actualiza la imagen de imagen dependiendo de posicionActual
         */
        function renderizarImagen () {
            imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        }
    
        /*
            Activa el autoplay de la imagen
         */
        function playIntervalo() {
            intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
            // Desactivamos los botones de control
            botonAvanzar.setAttribute('disabled', true);
            botonRetroceder.setAttribute('disabled', true);
            botonPlay.setAttribute('disabled', true);
            botonStop.removeAttribute('disabled');
    
        }
    
        /*
            Para el autoplay de la imagen
         */
        function stopIntervalo() {
            clearInterval(intervalo);
            // Activamos los botones de control
            botonAvanzar.removeAttribute('disabled');
            botonRetroceder.removeAttribute('disabled');
            botonPlay.removeAttribute('disabled');
            botonStop.setAttribute('disabled', true);
        }
    
        // Eventos
        botonAvanzar.addEventListener('click', pasarFoto);
        botonRetroceder.addEventListener('click', retrocederFoto);
        botonPlay.addEventListener('click', playIntervalo);
        botonStop.addEventListener('click', stopIntervalo);
        // Iniciar
        renderizarImagen();
    
    
    


}


window.onload = function(){
    setUpEventos();
    
};
 //foto cv cambio de imagen del cv 
    function cambioImagen(){
    let displayImage = document.getElementById('imago');
    if(displayImage.src.match('./img/cv.jpeg')){
    displayImage.src = './img/cumbre.jpeg';
    }else {
        displayImage.src = './img/cv.jpeg';
    }
    
}
    /*Scroll pantalla al click en barra navegadora*/
    function ubi(){
        window.scroll({
            top: 900,
            behavior: 'smooth'
        });
    }
    function ubiDos(){
        window.scroll({
            top: 650,
            behavior: 'smooth'
        });
    }
    function ubiTres(){
        window.scroll({
            top: 1260,
            behavior: 'smooth'
        });
    }

/*Efecto maquina de escribir*/
function iniciaHtml(){
    let text = document.getElementById('sab');
    let str = text.innerHTML;
    text.innerHTML= "";
    let speed = 300;
    let i=0;

    function tipeoEscribir(){
        if(i<str.length){
            text.innerHTML += str.charAt(i);
            i++;
            setTimeout(tipeoEscribir,speed);
        }
    }
    setTimeout(tipeoEscribir,speed);
}


/*Captura dato nombre del input y muestra en html por medio del span*/
function capturaDatos(){
    let name = document.getElementById('nombre').value;
    let apelli = document.getElementById('apellido').value;
    let mensaj = document.getElementById('mensaje').value;

    document.getElementById('span').innerHTML = ("Gracias por escrbirme " + name);

    
}

/*funcion que avisa que se cargo mi html luego ejecuta */
window.addEventListener('load',iniciaHtml);