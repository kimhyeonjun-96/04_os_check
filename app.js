const express = require('express');
const socket = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);

const io = socket(server);


// test restful
const rhelRouter = require('./routes/');
const centRouter = require('./routes')
app.use('/', rhelRouter);

let cpu;

// socket server open
io.sockets.on('connect', (socket) => {
    console.log("socket connect");

    //  각 클라이언트 연결 된 후 클라이언트 서버의 정보 확인 ( hostname , ip )
    socket.on('successToConnection', (flag) => {
        console.log("connection status : " + flag);
    });
    //  각 클라이언트 연결 된 후 정상적으로 클라이언트 정보가 확인이 되면 true 값 전달
    socket.emit('successToConnection', true);

    // test server data 전달
    // socket.emit('test', { 
    //     data01: 'data01',
    //     data02: 'data02',
    //     data03: 'data03'
    // });

    // 주기적으로 각 클라이언트 서버의 점검 결과 수신 
    // DB에 데이터 저장
    // socket.on('data', (data) => {
    //     console.log(data);
    //     socket.emit('data', "received data");
    // });

    socket.on('cpu', (cpu) => {
        console.log(typeof(cpu));
        console.log("cpu data >> " + cpu);
        console.log(cpu);
    })

    socket.on('disconnect', () => {
        console.log("socket disocnnect");
        socket.emit('flag', {flag: false});
    });

    socket.on('error', (err) => {
        console.log('err >> ' + err);
    });
});

server.listen(3000, () => {
    console.log('listne port 3000...');
});