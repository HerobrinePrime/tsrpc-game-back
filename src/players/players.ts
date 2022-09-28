//console.log(fox.x,fox.y,fox.z,fox.animation,fox.rotationX,fox.rotationY,fox.rotationZ);

import { MsgUpdateStatus } from "../shared/protocols/MsgUpdateStatus";

export class Player {
    // static maxPlayerId: number = -1;
    // static players: { [playerId: number]: Player } = {}
    static players: Array<Player> = []


    playerId: string;

    x: number = 0;
    y: number = -968.56;
    z: number = 0;
    animation: string = 'idle';
    rotationX: number = 0;
    rotationY: number = 0;
    rotationZ: number = 0;

    constructor(wsId: string) {
        this.playerId = wsId
        // Player.players[this.playerId] = this
        Player.players.push(this)

        console.log(Player.players.find(ele => ele.playerId === wsId ));

    }

    public updateStates(msg: MsgUpdateStatus): void {
        this.x = msg.x
        this.y = msg.y
        this.z = msg.z
        this.animation = msg.animation
        this.rotationX = msg.rotationX
        this.rotationY = msg.rotationY
        this.rotationZ = msg.rotationZ
    }
}