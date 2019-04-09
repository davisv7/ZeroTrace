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


//    document.getElementById('live-chat').removeAttribute('hidden');
    const namebox = document.getElementById('namebox');
    const textbox = document.getElementById('textbox');
    const submit_button = document.getElementById('room_submit');
    const conversation = document.getElementById('conversation');

    submit_button.onclick = submit;
    textbox.onkeydown = function (e) {
        if (e.keyCode == 13) { //if enter key 
            // Cancel the default action, if needed
            submit_button.click();
        }
    };

//    function scrollToBottom() {
//        conversation.scrollTop = conversation.scrollHeight - conversation.clientHeight;
//    }

    function submit() {
        msg = textbox.value;
        console.log(msg);
        room.broadcast(msg);
        textbox.value = '';

    }

    function addmsg(message) {
        console.log('got message from ' + message.from + ': ' + message.data.toString())
        var newmsg = document.createElement("div");
        var name = document.createElement("h5");
        var msgcontent = document.createElement("p");
        name.appendChild(document.createTextNode(message.from.toString().substring(30)));
        newmsg.classList.add("chat-message");
        msgcontent.appendChild(document.createTextNode(message.data.toString()));
        newmsg.appendChild(name);
        newmsg.appendChild(msgcontent);
        conversation.appendChild(newmsg);
//        scrollToBottom();
    }





    console.log('IPFS node ready with address ' + info.id)

    const room = Room(ipfs, 'ipfs-pubsub-demo')

    room.on('peer joined', (peer) => console.log('peer ' + peer.substring(30) + ' joined'));
    room.on('peer left', (peer) => console.log('peer ' + peer.substring(30) + ' left'));

    // send and receive messages

    room.on('peer joined', (peer) => room.sendTo(peer, 'Hello ' + peer.substring(30) + '!'));
    room.on('peer left', (peer) => room.sendTo('peer ' + peer.substring(30) + ' left'));

    room.on('message', (message) => addmsg(message));

}))

function repo() {
    return 'ipfs/pubsub-demo/' + Math.random()
}
