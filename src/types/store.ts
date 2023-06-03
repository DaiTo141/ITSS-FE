import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AsyncTaskReducerState } from './asyncTaskState';

export type DispatchType = ThunkDispatch<any, any, AnyAction>;

export type RootStateType = {
  asyncTaskReducer: AsyncTaskReducerState;
};

export type ThunkActionType = ThunkAction<
  Promise<void>,
  RootStateType,
  Record<string, unknown>,
  AnyAction
>;
