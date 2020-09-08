var socket = io();

var searchParams = new URLSearchParams(window.location.search);

console.log(searchParams.has('escritorio'));
if (!searchParams.has('escritorio')) {
    window.location = ('index.html');
    throw new Error('El escritorio no es necesario');
}

var escritorio = searchParams.get('escritorio');

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        if (resp.numero === undefined)
            $('h4 small').text('No hay tickets por atender');
        else
            $('h4 small').text('Ticket: ' + resp.numero);
    });
});