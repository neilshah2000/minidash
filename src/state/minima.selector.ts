import type { RootState } from './store'
import { StatusHistory } from '../state/types/StatusHistory';
import { format } from 'date-fns'
import { createSelector } from '@reduxjs/toolkit'

const selectStatusHistory = (state: RootState) => state.minima.statusHistory

export const selectStatusCount = (state: RootState) => state.minima.statusCount

export const selectTxnList = (state: RootState) => state.minima.txsn

const extractRamPoint = (row: StatusHistory) => {
    return {
        x: row.time,
        y: row.ram,
        label: format(row.time,'MMM dd, HH:mm:ss')
    }
}

const extractChainSpeedPoint = (row: StatusHistory) => {
    return {
        x: row.time,
        y: row.chainspeed,
        label: format(row.time,'MMM dd, HH:mm:ss')
    }
}

const extractChainWeightPoint = (row: StatusHistory) => {
    return {
        x: row.time,
        y: row.chainweight,
        label: format(row.time,'MMM dd, HH:mm:ss')
    }
}

const extractRamHistory = (statusHistory: StatusHistory[]) => {
    return statusHistory.map(extractRamPoint)
}

const extractChainSpeedHistory = (statusHistory: StatusHistory[]) => {
    return statusHistory.map(extractChainSpeedPoint)
}

const extractChainWeightHistory = (statusHistory: StatusHistory[]) => {
    return statusHistory.map(extractChainWeightPoint)
}


// Memoised with reselect from redux toolkit
export const selectRamHistory = createSelector(selectStatusHistory, extractRamHistory)
export const selectChainSpeedHistory = createSelector(selectStatusHistory, extractChainSpeedHistory)
export const selectChainWeightHistory = createSelector(selectStatusHistory, extractChainWeightHistory)
