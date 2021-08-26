import { minimaInit, initSuccess, minimaGetStatus, statusSuccess, newBlock, newTransaction, newTxPow,
    newBalance, network, txPowStart, txPowEnd, minimaStatusHistory, statusHistorySuccess, statusHistoryFailure } from "./minima.action";
import { Minima, NetworkStatus } from 'minima';
import { Middleware } from 'redux'
import { RootState } from './store'
import { StatusHistory } from './types/StatusHistory'

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
        console.log('Initialize Minima MIDDlEWARE')
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
        })
    }
}


export const minimaGetStatusProcessor: Middleware<{}, RootState> = store => next => action => {
    next(action)

    if(minimaGetStatus.match(action)) {
        Minima.cmd('status', (respJSON: any)=> {
            const status: NetworkStatus = respJSON.response;
            console.log('status', status)
            store.dispatch(statusSuccess(status))
        })
    }
}

export const minimaStatusHistoryProcessor: Middleware<{}, RootState> = store => next => action => {
    next(action)

    if(minimaStatusHistory.match(action)) {
        Minima.sql('SELECT * FROM networkstatus;', (res) => {
            const success = res.response[0].status
            const statusHistoryData: any = res.response[0].rows
            console.log(success)
            if (success) {
                const sh: StatusHistory[] = statusHistoryData.map((statusHistory: any) => {
                    console.log(statusHistory)
                    return new StatusHistory(
                        statusHistory.CHAINLENGTH,
                        statusHistory.CHAINSPEED,
                        statusHistory.CHAINWEIGHT,
                        statusHistory.ID,
                        statusHistory.RAM,
                        statusHistory.TIME)
                })
                const statusHistoryAction = statusHistorySuccess(sh)
                console.log(statusHistoryAction)
                store.dispatch(statusHistoryAction)
            } else {
                const message = res.response[0].message
                store.dispatch(statusHistoryFailure(message))
            }
        })
    }
}


export const minimaMiddleware = [
    minimaInitProcessor,
    minimaGetStatusProcessor,
    minimaStatusHistoryProcessor
]