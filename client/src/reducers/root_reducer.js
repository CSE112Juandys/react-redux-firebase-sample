import { combineReducers } from 'redux';
import firebaseStoreReducer from './firebase_store_reducer';

const rootReducer = combineReducers({
    firebaseStore : firebaseStoreReducer
});

export default rootReducer;