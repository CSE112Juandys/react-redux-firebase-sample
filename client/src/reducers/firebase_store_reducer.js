import ActionTypes from '../actions/action_types';
import initialState from './initial_state';

export default function firebaseStoreReducer(state = initialState.firebaseStore, action) {
    
    switch(action.type) {
        case ActionTypes.READ_FIREBASE_STORE_REQUESTED:
            console.log(action.type);
            return state;

        case ActionTypes.READ_FIREBASE_STORE_REJECTED:
            console.log(action.type);
            return state;

        case ActionTypes.READ_FIREBASE_STORE_FULFILLED:
            console.log(action.type);
            const firebaseStore = action.firebaseStore;
            const newState = Object.assign({}, firebaseStore);
            return newState;

        case ActionTypes.UPDATE_FIREBASE_STORE_REQUESTED:
            console.log(action.type);
            return state;

        case ActionTypes.UPDATE_FIREBASE_STORE_REJECTED:
            console.log(action.type);
            return state;

        case ActionTypes.UPDATE_FIREBASE_STORE_FULFILLED:
            console.log(action.type);
            return state;

        case ActionTypes.WATCH_FIREBASE_STORE_TRIGGERED:
            console.log(action.type);
            console.log(action.dataAdded);
            return state;

        default:
            console.log("default");
            return state;
    }
}