import { createAction } from '@reduxjs/toolkit'
import { NetworkStatus } from 'minima';
import { Metric } from './types/Metric'


export const minimaInit = createAction('MINIMA_INIT');
export const initSuccess = createAction<any>('MINIMA_INIT_SUCCESS');
export const initFailure = createAction('MINIMA_INIT_FAILURE');

export const minimaGetStatus = createAction('MINIMA_GET_STATUS');
export const statusSuccess = createAction<NetworkStatus>('MINIMA_STATUS_SUCCESS');
export const statusFailure = createAction('MINIMA_STATUS_FAILURE');

export const minimaGetMetrics = createAction('MINIMA_GET_METRICS')
export const minimaGetMetricsSuccess = createAction<Metric[]>('MINIMA_GET_METRICS_SUCCESS')
export const minimaGetMetricsFailure = createAction<string>('MINIMA_GET_METRICS_FAILURE')

// minima network events
export const newBlock = createAction<any>('MINIMA_NEW_BLOCK');
export const newTransaction = createAction<any>('MINIMA_NEW_TRANSACTION');
export const newTxPow = createAction<any>('MINIMA_NEW_TXPOW');
export const newBalance = createAction<any>('MINIMA_NEW_BALANCE');
export const network = createAction<any>('MINIMA_NETWORK');
export const txPowStart = createAction<any>('TX_POW_START');
export const txPowEnd = createAction<any>('TX_POW_END');


export const chainMessage = createAction<any>('MINIMA_MESSAGE')

