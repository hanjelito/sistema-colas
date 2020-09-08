var socket = io();

socket.on('connect', function() {
    console.log('Se conecto al Servidor');
});
socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});
// socket.on('estadoActual', (resp) => {
//     $('#lblNuevoTicket').text(resp.actual);
// });

$('button').on('click', function() {
    console.log('funciona');
    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        $('#lblNuevoTicket').text(siguienteTicket);
    });
});