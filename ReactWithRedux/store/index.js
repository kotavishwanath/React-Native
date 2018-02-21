import { createStore, combineReducers } from 'redux';

import userReducers from '../reducers';

const store = createStore( userReducers );

export default store;