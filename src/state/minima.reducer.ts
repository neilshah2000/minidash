import { createReducer } from '@reduxjs/toolkit'
import { initSuccess, initFailure, statusSuccess } from './minima.action'
import { NetworkStatus } from 'minima'

interface Minima {
    connected: boolean,
    currentStatus: NetworkStatus
}

const initialState = {
    connected: false
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
})