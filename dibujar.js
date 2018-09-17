var cuadro = document.getElementById("area_dibujo");
var papel = cuadro.getContext("2d");
var color = "#000000";
var click = 0;
var x;
var y;

//cuando presiono boton
document.addEventListener("mousedown", presionarMouse);

//cuando suelto boton
document.addEventListener("mouseup", soltarMouse);

//cuando muevo el boton
document.addEventListener("mousemove", moverMouse);

dibujarLinea("#000000", 0, 0, 300, 0, papel);
dibujarLinea("#000000", 300, 0, 300, 300, papel);
dibujarLinea("#000000", 300, 300, 0, 300, papel);
dibujarLinea("#000000", 0, 300, 0, 0, papel);

function moverMouse(evento) {
    if(click == 1){
        dibujarLinea(color, x, y, evento.layerX, evento.layerY,papel);
    }
    x = evento.layerX;
    y = evento.layerY;
}

function presionarMouse(evento) {
    click = 1;
    x = evento.layerX;
    y = evento.layerY;
}

function soltarMouse (evento) {
    click = 0;
    x = evento.layerX;
    y = evento.layerY;
}

function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal,lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}




