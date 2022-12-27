import { configureStore, ThunkAction, Action, combineReducers, } from '@reduxjs/toolkit';
import ProjectSlice from '../ReduxSlices/ProjectSlice';
import UserSlice from '../ReduxSlices/UserSlice';

const rootRed = combineReducers({
    projectInfo : ProjectSlice,
    userInfo : UserSlice
});

export const store = configureStore({reducer:rootRed});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;