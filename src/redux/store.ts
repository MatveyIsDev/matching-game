import {createStore} from 'redux';
import {initialState} from './initialState';
import {reducer} from './reducer';
import {composeWithDevToolsDevelopmentOnly} from '@redux-devtools/extension';

export const store = createStore(
  reducer,
  initialState,
  composeWithDevToolsDevelopmentOnly()
);
