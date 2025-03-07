import { combineReducers, Reducer } from 'redux';

import * as AuthModule from '@/modules/auth';

import type * as Types from './types';

const rootReducer: Reducer<Types.IState> = combineReducers<Types.IState>({
// @ts-ignore
  auth: AuthModule.Reducer,
});

export default rootReducer;
