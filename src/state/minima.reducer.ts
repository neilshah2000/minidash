import { createReducer } from '@reduxjs/toolkit'
import { initSuccess, initFailure, statusSuccess, minimaGetMetricsSuccess, chainMessage, newBlock} from './minima.action'
import { NetworkStatus } from 'minima'
import { Metric } from './types/Metric'

interface Minima {
    connected: boolean,
    currentStatus: NetworkStatus | null,
    metricErrorMessage: string,
    metricHistory: Metric[],
    latestMessage: any,
    latestBlocks: any[],
    latestTransactions: Array<any>
}

const initialState = {
    connected: false,
    currentStatus: null,
    metricErrorMessage: '',
    metricHistory: [],
    latestMessage: {},
    latestBlocks: [],
    latestTransactions: []
} as Minima

// uses immer to allow direct state mutation
export const minimaReducer = createReducer(initialState, (builder) => { 
    builder
        .addCase(initSuccess, (state, action) => {
            state.connected = true
        })
        .addCase(initFailure, (state, action) => {
            state.connected = false
        })
        .addCase(statusSuccess, (state, action) => {
            state.currentStatus = action.payload;
        })
        .addCase(minimaGetMetricsSuccess, (state, action) => {
            state.metricHistory = action.payload
        })
        .addCase(chainMessage, (state, action) => {
            state.latestMessage = action.payload
        })
        .addCase(newBlock, (state, action) => {
            // add latest block for ui
            state.latestBlocks.push(action.payload.txpow)
            if (state.latestBlocks.length > 100) {
                state.latestBlocks.shift()
            }

            // add latest transaction for ui
            state.latestTransactions = state.latestTransactions.concat(action.payload.txpow.body.txnlist)
            if (state.latestTransactions.length > 100) {
                state.latestTransactions.shift()
            }
        })
})