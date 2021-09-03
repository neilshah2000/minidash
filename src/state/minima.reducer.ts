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
    latestTransactions: any[]
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
            state.latestBlocks.push(action.payload.txpow)
            if (state.latestBlocks.length > 100) {
                state.latestBlocks.shift()
            }
        })
})