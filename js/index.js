/*implementacion de la clase, la clase tiene una propiedad que se llama ruta. que es la ruta de la imagen. 
 agrega un constructor que recibe un parametro que se llama ruta, con ese parametro se actualiza el valor de la propiedad
 ruta de la clase
 Agregar otro metodo que se llame cargar imagen, creara un elemento imagen usando la funcion document.createElement
  pasar la ruta a la propiedad src del objeto img
  adjuntar la imagen al body de la pagina
  crear una instancia de la clase
  llamar el metodo de cargar imagen */

 const rutaImagen = '../imagen.PNG'

 class Imagen{
    _ruta;

    constructor(ruta){
        this._ruta = ruta;
    }

    cargarImagen(){
        const img = document.createElement('img');
        img.src = this._ruta
        document.body.appendChild(img)

    }
 }

 const imagen = new Imagen(rutaImagen);
 imagen.cargarImagen()