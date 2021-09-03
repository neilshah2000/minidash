import { minimaInit, initSuccess, minimaGetStatus, statusSuccess, newBlock, newTransaction, newTxPow,
    newBalance, network, txPowStart, txPowEnd, minimaGetMetrics, minimaGetMetricsSuccess,
    minimaGetMetricsFailure, chainMessage } from "./minima.action";
import { Minima, NetworkStatus } from 'minima';
import { Middleware } from 'redux'
import { RootState } from './store'
import { Metric } from './types/Metric'
import { info } from "console";

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
                    store.dispatch(initSuccess(msg.info))
                    break;
                case MinimaEventTypes.NEWBLOCK:
                    store.dispatch(newBlock(msg.info))
                    break;
                case MinimaEventTypes.NEWTRANSACTION:
                    store.dispatch(newTransaction(msg.info))
                    break;
                case MinimaEventTypes.NEWTXPOW:
                    store.dispatch(newTxPow(msg.info))
                    break;
                case MinimaEventTypes.NEWBALANCE:
                    store.dispatch(newBalance(msg.info))
                    break;
                case MinimaEventTypes.NETWORK:
                    store.dispatch(network(msg.info))
                    break;
                case MinimaEventTypes.TXPOWSTART:
                    store.dispatch(txPowStart(msg.info))
                    break;
                case MinimaEventTypes.TXPOWEND:
                    store.dispatch(txPowEnd(msg.info))
                    break;
                default:
                    console.error('Unknown event type: ', msg.event)
            }
            
            store.dispatch(chainMessage(msg))
        })
    }
}

// this middleware will trigger new actions,
// but there is also a reducer for this same action
// which will store the block data
const newBlockEventProcessor: Middleware<{}, RootState> = store => next => action => {
    next(action)

    if(newBlock.match(action)) {
        store.dispatch(minimaGetMetrics())
        store.dispatch(minimaGetStatus())
    }
}

const minimaGetStatusProcessor: Middleware<{}, RootState> = store => next => action => {
    next(action)

    if(minimaGetStatus.match(action)) {
        Minima.cmd('status', (respJSON: any)=> {
            const status: NetworkStatus = respJSON.response;
            store.dispatch(statusSuccess(status))
        })
    }
}


const minimaGetMetricsProcessor: Middleware<{}, RootState> = store => next => action => {
    next(action)

    if(minimaGetMetrics.match(action)) {
        Minima.sql('SELECT * FROM metrics;', (res) => {
            const success = res.response[0].status
            const statusHistoryData: any = res.response[0].rows
            if (success) {
                const sh: Metric[] = statusHistoryData.map((metric: any) => {
                    return new Metric(
                        metric.CHAINLENGTH,
                        metric.CHAINSPEED,
                        metric.CHAINWEIGHT,
                        metric.ID,
                        metric.RAM,
                        metric.TIME,
                        metric.DIFFICULTY,
                        metric.BLOCKNUMBER,
                        metric.TRANSACTIONCOUNT)
                })
                store.dispatch(minimaGetMetricsSuccess(sh))
            } else {
                const message = res.response[0].message
                store.dispatch(minimaGetMetricsFailure(message))
            }
        })
    }
}



export const minimaMiddleware = [
    minimaInitProcessor,
    newBlockEventProcessor,
    minimaGetStatusProcessor,
    minimaGetMetricsProcessor,
]