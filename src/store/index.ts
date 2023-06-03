import { LoginActionTypeEnum } from 'enums/actions';
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { RootStateType } from 'types/store';
import {
  asyncTaskReducer,
  initialAsyncTaskState,
} from './reducers/asyncTaskReducer';

export const initialRootState: RootStateType = {
  asyncTaskReducer: initialAsyncTaskState,
};

export default function configureStore(
  preloadedState: RootStateType = initialRootState,
) {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers =
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(...enhancers)
      : compose(...enhancers);

  const appReducer = combineReducers<RootStateType>({
    asyncTaskReducer,
  });

  // Reset state after logout
  const rootReducer = (state: RootStateType, action: AnyAction) => {
    return action.type === LoginActionTypeEnum.LOGOUT
      ? initialRootState
      : appReducer(state, action);
  };

  // @ts-ignore
  return createStore(rootReducer, preloadedState, composedEnhancers);
}
