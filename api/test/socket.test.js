
const { createServer } = require("http");
const { Server } = require("socket.io");
const {decode, encode }= require('./../utils/jwtAuth')
const Client = require("socket.io-client");
const Socket = require("./../libs/socket")

describe("Testing Socket.io", () => {

    let io, serverSocket, clientSocket;
    let secret= "demon"
  
    beforeAll(done => {

        const httpServer = createServer();
        io = new Server(httpServer);

        httpServer.listen(() => {
            const port = httpServer.address().port;
            clientSocket = new Client(`http://localhost:${port}`);

        
        });

    });




    afterAll(() => {
        io.close();
        clientSocket.close();
    });

    test("Test event", done => {

        clientSocket.on("greeting", greet => {
            try {

                expect(greet).toBe("Holi");
                done();
            } catch (error) {
                done(error);
            }
        });

        serverSocket.emit("greeting", "Holi");

    });

    test("verify token",done => {
        const token =  decode(secret, {userId:'1234estoToken',role:"paciente"})
        console.log(token)      
        clientSocket.emit("verifyToken",token )
        serverSocket.on("verifyToken",(data) => {
            const user =  encode(data,secret)
            
            
            
            
            console.log(user)
        })


    })


});