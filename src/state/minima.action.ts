import { createAction } from '@reduxjs/toolkit'
import { NetworkStatus } from 'minima';

export const minimaInit = createAction('MINIMA_INIT');
export const initSuccess = createAction('MINIMA_INIT_SUCCESS');
export const initFailure = createAction('MINIMA_INIT_FAILURE');


export const minimaGetStatus = createAction('MINIMA_GET_STATUS');
export const statusSuccess = createAction<NetworkStatus>('MINIMA_STATUS_SUCCESS');
export const statusFailure = createAction('MINIMA_STATUS_FAILURE');

export const newBlock = createAction('MINIMA_NEW_BLOCK');
export const newTransaction = createAction('MINIMA_NEW_TRANSACTION');
export const newTxPow = createAction('MINIMA_NEW_TXPOW');
export const newBalance = createAction('MINIMA_NEW_BALANCE');
export const network = createAction('MINIMA_NETWORK');
export const txPowStart = createAction('TX_POW_START');
export const txPowEnd = createAction('TX_POW_END');