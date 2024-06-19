import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import subjectListReducer from './subjectListSlice';

export const store = configureStore({
  reducer: {
   user: userReducer,
   subjectList: subjectListReducer,
  },
})