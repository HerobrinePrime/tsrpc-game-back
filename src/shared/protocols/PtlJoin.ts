import { BaseRequest, BaseResponse, BaseConf } from "./base";

export interface ReqJoin extends BaseRequest {
    
}

export interface ResJoin extends BaseResponse {
    code:number,
    playerId:string
}

export const conf: BaseConf = {
    
}