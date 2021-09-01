import { minimaInit, initSuccess, minimaGetStatus, statusSuccess, newBlock, newTransaction, newTxPow,
    newBalance, network, txPowStart, txPowEnd, minimaStatusHistoryGuard, minimaStatusHistory, statusHistorySuccess,
    statusHistoryFailure, chainMessage, addTxns, addTxnsSuccess } from "./minima.action";
import { Minima, NetworkStatus } from 'minima';
import { Middleware } from 'redux'
import { RootState } from './store'
import { StatusHistory } from './types/StatusHistory'
import { selectStatusCount } from './minima.selector'

const enum MinimaEventTypes {
    CONNECTED = 'connected',
    NEWBLOCK = 'newblock',
    NEWTRANSACTION = 'newtransaction',
    NEWTXPOW = 'newtxpow',
    NEWBALANCE = 'newbalance',
    NETWORK = 'network',
    TXPOWSTART = 'txpowstart',
    TXPOWEND = 'txpowend'
  }

export const minimaInitProcessor: Middleware<{}, RootState> = store => next => action => {
    next(action)

    if(minimaInit.match(action)) {
        Minima.init((msg) => {
            switch(msg.event) {
                case MinimaEventTypes.CONNECTED:
                    store.dispatch(initSuccess())
                    break;
                case MinimaEventTypes.NEWBLOCK:
                    store.dispatch(newBlock())
                    break;
                case MinimaEventTypes.NEWTRANSACTION:
                    store.dispatch(newTransaction())
                    break;
                case MinimaEventTypes.NEWTXPOW:
                    store.dispatch(newTxPow())
                    break;
                case MinimaEventTypes.NEWBALANCE:
                    store.dispatch(newBalance())
                    break;
                case MinimaEventTypes.NETWORK:
                    store.dispatch(network())
                    break;
                case MinimaEventTypes.TXPOWSTART:
                    store.dispatch(txPowStart())
                    break;
                case MinimaEventTypes.TXPOWEND:
                    store.dispatch(txPowEnd())
                    break;
                default:
                    console.error('Unknown event type: ', msg.event)
            }
            
            // get status every time there is an event
            store.dispatch(minimaGetStatus())

            store.dispatch(chainMessage(msg))
            store.dispatch(addTxns(msg))
        })
    }
}


export const minimaGetStatusProcessor: Middleware<{}, RootState> = store => next => action => {
    next(action)

    if(minimaGetStatus.match(action)) {
        Minima.cmd('status', (respJSON: any)=> {
            const status: NetworkStatus = respJSON.response;
            store.dispatch(statusSuccess(status))
            store.dispatch(minimaStatusHistoryGuard(5))
        })
    }
}

export const minimaAddTxnsProcessor: Middleware<{}, RootState> = store => next => action => {
    next(action)

    if(addTxns.match(action)) {
        const txns = action.payload?.info?.txpow?.body?.txnlist
        const txpowid = action.payload?.info?.txpow?.txpowid
        const myDate = action.payload?.info?.txpow?.header?.date
        if (txns && txns.length > 0) {
            const txnlistNew = txns.map((txn: any)  => {
                return {
                    txn,
                    txpowid,
                    date: myDate
                }
            });
            store.dispatch(addTxnsSuccess(txnlistNew))
        }

    }
}

export const minimaGetStatusGuardProcessor: Middleware<{}, RootState> = store => next => action => {
    next(action)

    if(minimaStatusHistoryGuard.match(action)) {
        const statusCount = selectStatusCount(store.getState())
        if (statusCount % action.payload === 0) {
            store.dispatch(minimaStatusHistory())
        }
    }
}

export const minimaStatusHistoryProcessor: Middleware<{}, RootState> = store => next => action => {
    next(action)

    if(minimaStatusHistory.match(action)) {
        Minima.sql('SELECT * FROM networkstatus;', (res) => {
            const success = res.response[0].status
            const statusHistoryData: any = res.response[0].rows
            if (success) {
                const sh: StatusHistory[] = statusHistoryData.map((statusHistory: any) => {
                    return new StatusHistory(
                        statusHistory.CHAINLENGTH,
                        statusHistory.CHAINSPEED,
                        statusHistory.CHAINWEIGHT,
                        statusHistory.ID,
                        statusHistory.RAM,
                        statusHistory.TIME)
                })
                store.dispatch(statusHistorySuccess(sh))
            } else {
                const message = res.response[0].message
                store.dispatch(statusHistoryFailure(message))
            }
        })
    }
}


export const minimaMiddleware = [
    minimaInitProcessor,
    minimaGetStatusGuardProcessor,
    minimaGetStatusProcessor,
    minimaStatusHistoryProcessor,
    minimaAddTxnsProcessor
]