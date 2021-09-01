import { createReducer } from '@reduxjs/toolkit'
import { initSuccess, initFailure, statusSuccess, statusHistorySuccess, statusHistoryFailure, chainMessage, addTxnsSuccess } from './minima.action'
import { NetworkStatus } from 'minima'
import { StatusHistory } from './types/StatusHistory'

interface Minima {
    connected: boolean,
    currentStatus: NetworkStatus | null,
    statusCount: Number,
    statusHistoryErrorMessage: string,
    statusHistory: StatusHistory[],
    latestMessage: any,
    txsn: any[]
}

const initialState = {
    connected: false,
    currentStatus: null,
    statusCount: 0,
    statusHistoryErrorMessage: '',
    statusHistory: [],
    latestMessage: {},
    txsn: []
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
            state.statusCount = state.statusCount.valueOf() + 1
        })
        .addCase(statusHistorySuccess, (state, action) => {
            state.statusHistory = action.payload
        })
        .addCase(chainMessage, (state, action) => {
            state.latestMessage = action.payload
        })
        .addCase(addTxnsSuccess, (state, action) => {
            state.txsn = state.txsn.concat(action.payload)
        })
})