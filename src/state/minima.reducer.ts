import { createReducer } from '@reduxjs/toolkit'
import { initSuccess, initFailure, statusSuccess, statusHistorySuccess, statusHistoryFailure } from './minima.action'
import { NetworkStatus } from 'minima'
import { StatusHistory } from './types/StatusHistory'

interface Minima {
    connected: boolean,
    currentStatus: NetworkStatus | null,
    statusHistoryErrorMessage: string,
    statusHistory: StatusHistory[]
}

const initialState = {
    connected: false,
    currentStatus: null,
    statusHistoryErrorMessage: '',
    statusHistory: []
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
            state.currentStatus = action.payload
        })
        .addCase(statusHistorySuccess, (state, action) => {
            state.statusHistory = action.payload
        })
})