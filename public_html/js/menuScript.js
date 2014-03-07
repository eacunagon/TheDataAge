/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {

    // aplicamos a todos los elementos el filtro o color gris
    $('.animar').addClass('gris');

    // cuando el mouse se pose sobre un enlace
    $('a.btnAnimacion').mouseenter(function() {

        // para poder trabajar sin tener que estar navegando por el DOM, 
        // creamos las variables que hacen referencia al enlace 
        // y los elementos dentro de él
        var $enlace = $(this);
        var $h2 = $enlace.find('h2');
        var $h3 = $enlace.find('h3');
        var $imagen = $enlace.find('img');

        // indicamos que los elementos deben irse para arriba en 300 milisegundos
        // para luego retornar al punto en que estaban en otros 300 milisegundos
        // al indicar la función stop, evitamos que se encolen muchas llamadas              
        $h2.stop(true).animate({top: '-300px'}, 300).animate({top: '0'}, 300);
        $h3.stop(true).animate({top: '-300px'}, 300).animate({top: '0'}, 300);
        $imagen.stop(true).animate({top: '-300px'}, 300).animate({top: '0'}, 300);

        // pasados 300 milisegundos 
        // llamamos a la función que quitará el filtro gris
        // o sea, se quitará en cuanto los elementos no se vean más
        setTimeout(function() {
            sacarFiltroGris($h2);
            sacarFiltroGris($h3);
            sacarFiltroGris($imagen);
        }, 300);
    });

    // cuando el mouse deja de estar encima del elemento
    $('a.btnAnimacion').mouseleave(function() {

        // volvemos a crear las variables
        var $enlace = $(this);
        var $h2 = $enlace.find('h2');
        var $h3 = $enlace.find('h3');
        var $imagen = $enlace.find('img');

        // a diferencia de antes, ahora queremos que los elementos se vayan
        // para abajo y después retornen
        $h2.stop(true).animate({top: '300px'}, 300).animate({top: '0'}, 300);
        $h3.stop(true).animate({top: '300px'}, 300).animate({top: '0'}, 300);
        $imagen.stop(true).animate({top: '300px'}, 300).animate({top: '0'}, 300);

        // en cuanto los elementos desaparecen, les aplicamos el filtro gris
        setTimeout(function() {
            ponerFiltroGris($h2);
            ponerFiltroGris($h3);
            ponerFiltroGris($imagen);
        }, 300);
    });


});

function sacarFiltroGris($elemento) {

    // quitamos la clase al elemento
    $elemento.removeClass('gris');
}

function ponerFiltroGris($elemento) {

    // le agregamos la clase al elemento
    // como la indicamos al final de la hoja de estilos
    // sobrescribirá a la del color que ya tiene
    $elemento.addClass('gris');
}
