import { Player } from './../players/players';
import { ApiCall } from "tsrpc";
import { ReqJoin, ResJoin } from "../shared/protocols/PtlJoin";

export default async function (call: ApiCall<ReqJoin, ResJoin>) {
    // TODO
    const player = new Player(call.conn.id)

    call.succ({
        code:200,
        playerId:player.playerId
    })
}