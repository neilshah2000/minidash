import type { RootState } from './store'
import { Metric } from './types/Metric';
import { format } from 'date-fns'
import { createSelector } from '@reduxjs/toolkit'

const selectMetricHistory = (state: RootState) => state.minima.metricHistory

const extractRamPoint = (row: Metric) => {
    return {
        x: row.time,
        y: row.ram,
        label: format(row.time,'MMM dd, HH:mm:ss')
    }
}

const extractChainSpeedPoint = (row: Metric) => {
    return {
        x: row.time,
        y: row.chainspeed,
        label: format(row.time,'MMM dd, HH:mm:ss')
    }
}

const extractChainWeightPoint = (row: Metric) => {
    return {
        x: row.time,
        y: row.chainweight,
        label: format(row.time,'MMM dd, HH:mm:ss')
    }
}

const extractDifficultyPoint = (row: Metric) => {
    return {
        x: row.time,
        y: row.difficulty,
        label: format(row.time,'MMM dd, HH:mm:ss')
    }
}

const extractTransactionCountPoint = (row: Metric) => {
    return {
        data: row.transactionCount,
        label: row.blockNumber
    }
}

const extractRamHistory = (metrics: Metric[]) => {
    return metrics.map(extractRamPoint)
}

const extractChainSpeedHistory = (metrics: Metric[]) => {
    return metrics.map(extractChainSpeedPoint)
}

const extractChainWeightHistory = (metrics: Metric[]) => {
    return metrics.map(extractChainWeightPoint)
}

const extractDifficultyHistory = (metrics: Metric[]) => {
    return metrics.map(extractDifficultyPoint)
}

const extractTransactionCountHistory = (metrics: Metric[]) => {
    return metrics.map(extractTransactionCountPoint)
}


// Memoised with reselect from redux toolkit
export const selectRamHistory = createSelector(selectMetricHistory, extractRamHistory)
export const selectChainSpeedHistory = createSelector(selectMetricHistory, extractChainSpeedHistory)
export const selectChainWeightHistory = createSelector(selectMetricHistory, extractChainWeightHistory)
export const selectDifficultyHistory = createSelector(selectMetricHistory, extractDifficultyHistory)
export const selectTransactionCountHistory  = createSelector(selectMetricHistory, extractTransactionCountHistory)

export const selectLastTenBlocks = (state: RootState) => {
    return state.minima.latestBlocks.slice(-10)
}

export const selectLastTenTransactions = (state: RootState) => {
    return state.minima.latestTransactions.slice(-10)
}

export const selectStatus = (state: RootState) => {
    return state.minima.currentStatus
}