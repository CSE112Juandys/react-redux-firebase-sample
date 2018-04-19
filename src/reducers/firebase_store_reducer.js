import ActionTypes from '../actions/action_types';
import initialState from './initial_state';

export default function firebaseStoreReducer(state = initialState.firebaseStore, action) {
    
    switch(action.type) {
        case ActionTypes.READ_FIREBASE_STORE_REQUESTED:
            console.log(action.type);
            console.log(action);
            return state;

        case ActionTypes.READ_FIREBASE_STORE_REJECTED:
            console.log(action.type);
            return state;

        case ActionTypes.READ_FIREBASE_STORE_FULFILLED:
            console.log(action.type);
            const firebaseStore = action.firebaseStore;
            const newState = Object.assign({}, firebaseStore);
            return newState;

        default:
            console.log("default");
            return state;
    }
}