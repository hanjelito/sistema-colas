const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {
    client.on('siguienteTicket', (data, callback) => {
        let siguiente = ticketControl.siguiente();
        console.log('Siguiente ticket:', siguiente);
        callback(siguiente);
    });
    // Estado actual
    // client.emit('estadoActual', {
    //     actual: ticketControl.getUltimoTicket(),
    //     ultimos4: ticketControl.getUltimo4()
    // });
    client.emit('ultimos4', {
        ultimos4: ticketControl.getUltimo4()
    });
    client.on('atenderTicket', (data, callback) => {
        if (!data.escritorio) {
            return callback({
                err: true,
                mesaje: 'Escritorio es necesario'
            });
        }
        let atenderTicket = ticketControl.atenderTicket(data.escritorio);
        callback(atenderTicket);
        client.broadcast.emit('ultimos4', {
            ultimos4: ticketControl.getUltimo4()
        });
    });
});