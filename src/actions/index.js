import { useWallet } from "@solana/wallet-adapter-react";
import {
    SystemProgram,
    Transaction,
    PublicKey,
    TransactionInstruction,
} from "@solana/web3.js";

import axios from "../config";

const programAccount = new PublicKey(
    "6WxqDJMpbpTLFSW2SCnaBxLY8XZeStmGvum4fhnrSwcV"
);


export const withdraw = (streamId, amountToWithdraw, wallet) => {
    return async(dispatch, getState) => {};
};

export const cancelStream = (streamId, receiverAddress, wallet) => {
    return async(dispatch, getState) => {};
};

export const createStream = ({
    receiverAddress,
    startTime,
    endTime,
    amountSpeed,
    wallet
}) => {
    return async(dispatch, getState) => {};
};


export const getAllStreams = (pubkey) => {
    return async(dispatch, getState) => {
        dispatch({
            type: "DATA_RECEIVED",
            result: {
                "sending": [
                    { "amount_second": 66, "end_time": 1630889016, "sender": "8ytfrZ45J2nsZVaNX8stRauFxFia4Sbvrx7uAui5dmTm", "pda_account": "6RJEnfHuR2kpP98BMdkBxGxdyyXhucxEoPwzxJj9qJuj", "lamports_withdrawn": 0, "start_time": 1630853012, "receiver": "Bettxr9Gh1So6kvMsMhU4aRJSi1fanQT7CE1MmyZ3LDq", "total_amount": 2376264, }
                ],
                "receiving": [
                    { "amount_second": 66, "end_time": 1630889016, "sender": "8ytfrZ45J2nsZVaNX8stRauFxFia4Sbvrx7uAui5dmTm", "pda_account": "6RJEnfHuR2kpP98BMdkBxGxdyyXhucxEoPwzxJj9qJuj", "lamports_withdrawn": 0, "start_time": 1630853012, "receiver": "Bettxr9Gh1So6kvMsMhU4aRJSi1fanQT7CE1MmyZ3LDq", "total_amount": 2376264, }
                ]
            },
        })
    };
};