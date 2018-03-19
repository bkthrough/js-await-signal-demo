const Signal = require('await-signal');
const server = require('express')();
const httpServer = require('http').Server(server);
const io = require('socket.io')(httpServer);
httpServer.listen(5858);
var sock;
var response;

const signal = new Signal('default');
//socket连接成功
io.on('connection', (socket)=>{
    sock = socket;
    socket.emit('opend', 'This client opened successfully!')
    socket.on('response', (data)=>{
        response = data;
        signal.state = 'continue';
    });
});
(async function(){
    //加上while，客户端可以连接多次
    while(true){
        await signal.while('default');
        //2s后进入这里
        signal.state = 'default';
        console.log(response);
    }
})()