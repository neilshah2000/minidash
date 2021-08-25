import { minimaInit, initSuccess, minimaGetStatus, statusSuccess, newBlock, newTransaction, newTxPow,
    newBalance, network, txPowStart, txPowEnd } from "./minima.action";
import { Minima, NetworkStatus } from 'minima';
import { Middleware } from 'redux'
import { RootState } from './store'

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


export const minimaMiddleware = [
    minimaInitProcessor,
    minimaGetStatusProcessor
]