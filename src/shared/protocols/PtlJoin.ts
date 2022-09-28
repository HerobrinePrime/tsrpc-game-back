import { BaseRequest, BaseResponse, BaseConf } from "./base";

export interface ReqJoin extends BaseRequest {
    
}

export interface ResJoin extends BaseResponse {
    code:number,
    playerId:number
}

export const conf: BaseConf = {
    
}