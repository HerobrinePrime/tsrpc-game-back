import { ServiceProto } from 'tsrpc-proto';
import { MsgSync } from './MsgSync';
import { MsgUpdateStatus } from './MsgUpdateStatus';
import { ReqJoin, ResJoin } from './PtlJoin';

export interface ServiceType {
    api: {
        "Join": {
            req: ReqJoin,
            res: ResJoin
        }
    },
    msg: {
        "Sync": MsgSync,
        "UpdateStatus": MsgUpdateStatus
    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 6,
    "services": [
        {
            "id": 4,
            "name": "Sync",
            "type": "msg"
        },
        {
            "id": 2,
            "name": "UpdateStatus",
            "type": "msg"
        },
        {
            "id": 3,
            "name": "Join",
            "type": "api",
            "conf": {}
        }
    ],
    "types": {
        "MsgSync/MsgSync": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "players",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Any"
                        }
                    }
                }
            ]
        },
        "MsgUpdateStatus/MsgUpdateStatus": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "playerId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "x",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "y",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "z",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "animation",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "rotationX",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "rotationY",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "rotationZ",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlJoin/ReqJoin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "base/BaseRequest": {
            "type": "Interface"
        },
        "PtlJoin/ResJoin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "code",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "playerId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface"
        }
    }
};