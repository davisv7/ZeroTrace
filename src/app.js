const IPFS = require('ipfs');
const Room = require('ipfs-pubsub-room');

const ipfs = new IPFS({
    repo: repo(),
    EXPERIMENTAL: {
        pubsub: true
    },
    config: {
        Addresses: {
            Swarm: [
        '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star'
      ]
        }
    }
})

ipfs.once('ready', () => ipfs.id((err, info) => {
    if (err) {
        throw err
    }



    const submit_button = document.getElementById('room_submit');
    const textbox = document.getElementById('textbox');
    const thanks = document.getElementById('thanks');

    submit_button.onclick = submit;

    function submit() {
        msg = textbox.value;
        console.log(msg);
        room.broadcast(msg);
        thanks.removeAttribute('hidden');
        textbox.value = '';

    }



    console.log('IPFS node ready with address ' + info.id)

    const room = Room(ipfs, 'ipfs-pubsub-demo')

    room.on('peer joined', (peer) => console.log('peer ' + peer + ' joined'))
    room.on('peer left', (peer) => console.log('peer ' + peer + ' left'))

    // send and receive messages

    room.on('peer joined', (peer) => room.sendTo(peer, 'Hello ' + peer + '!'))
    room.on('message', (message) => console.log('got message from ' + message.from + ': ' + message.data.toString()))

    // broadcast message every 2 seconds

    //    setInterval(() => room.broadcast('hey everyone!'), 2000)
}))

function repo() {
    return 'ipfs/pubsub-demo/' + Math.random()
}
