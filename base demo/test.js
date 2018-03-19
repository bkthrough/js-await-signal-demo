const Signal = require('await-signal');
const signal = new Signal('wait');

(async function(){
function sleepms(ms){
    return new Promise(function(){
        setTimeout(function(){
            console.log('set continue signal!');
            //发送信号
            signal.state = 'continue';
        }, ms);
    })
}
sleepms(2000);
//等待信号
await signal.while('wait');
console.log('get continue signal!');
})()