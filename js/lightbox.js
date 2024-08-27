//Objeto con las propiedades del efecto Lightbox
var propLightbox = {
    imgContainer: document.getElementsByClassName('lightbox'),
    imagen: null,
    imagenSrc: null,
    cuerpoDom: document.getElementsByTagName('body')[0],
    lightbox_container: null

}
//Objeto con los métodos del efecto Lightbox
var metLightbox = {
    inicio: function(){
        for (var i =0; i < propLightbox.imgContainer.length; i++) {
            propLightbox.imgContainer[i].addEventListener('click',metLightbox.capturaImagen);
            
        }
        propLightbox.imgContainer[i]
    },
    capturaImagen: function(){
        propLightbox.imagen = this;
        metLightbox.lightbox(propLightbox.imagen);
    },

    lightbox: function(imagen){
        propLightbox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5,-2);
        propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');
        propLightbox.lightbox_container = document.getElementById('lightbox_container');
        propLightbox.lightbox_container.style.width = '100%';
        propLightbox.lightbox_container.style.height = '100%';
        propLightbox.lightbox_container.style.position = 'fixed';
        propLightbox.lightbox_container.style.zIndex = '1000';
        propLightbox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
        propLightbox.lightbox_container.style.position = '0';
        propLightbox.lightbox_container.style.left = '0';    
    }
}

metLightbox.inicio();