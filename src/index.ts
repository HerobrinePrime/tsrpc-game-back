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
        Player.players[msg.playerId].updateStates(msg)
    })

    // setInterval
    setInterval(()=>{
        server.broadcastMsg('Sync',{
            players:Player.players
        })
    },50)
};

// Entry function
async function main() {
    await init();
    await server.start();
}
main();