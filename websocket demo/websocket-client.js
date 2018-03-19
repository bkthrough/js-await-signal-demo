var io = require('socket.io-client');
const socket = io('http://127.0.0.1:5858');
  
socket.on('opend', async function(data){
    const response = 'hello,world';
    await new Promise(function(){
        setTimeout(function(){
            socket.emit('response', response);
        }, 2000);
    });
});