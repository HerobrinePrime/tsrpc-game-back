import { Player } from './players/players';
import * as path from "path";
import { WsServer } from "tsrpc";
import { serviceProto } from './shared/protocols/serviceProto';

// Create the Server
export const server = new WsServer(serviceProto, {
    port: 3000,
    // Remove this to use binary mode (remove from the client too)
    json: true,
    logger:console
});

// Initialize before server start
async function init() {
    await server.autoImplementApi(path.resolve(__dirname, 'api'));

    // TODO
    // Prepare something... (e.g. connect the db)
    server.listenMsg('UpdateStatus', ({ msg }) => {
        Player.players.find(ele=>ele.playerId === msg.playerId)?.updateStates(msg)
    })

    server.flows.postDisconnectFlow.push(v =>{
       Player.players.splice( Player.players.findIndex(ele => ele.playerId === v.conn.id),1)

        return v
    })

    // setInterval
    setInterval(()=>{
        server.broadcastMsg('Sync',{
            players:Player.players
        })
    },10)
};

// Entry function
async function main() {
    await init();
    await server.start();
}
main();


import express from 'express';
const app = express()
const port = 3001

app.use(express.static('../client'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))