import ActionTypes from './action_types';
import database from '../database';

export function readFirebaseStore() {
    return dispatch => {
        dispatch(readFirebaseStoreRequestedAction());
        return database.ref('/').once('value', snap => {
            const firebaseStore = snap.val();
            dispatch(readFirebaseStoreFulfilledAction(firebaseStore))
        })
        .catch((error) => {
            console.log(error);
            dispatch(readFirebaseStoreRejectedAction());
        });
    }
}

function readFirebaseStoreRequestedAction() {
    return {
        type : ActionTypes.READ_FIREBASE_STORE_REQUESTED
    };
}

function readFirebaseStoreRejectedAction() {
    return {
        type : ActionTypes.READ_FIREBASE_STORE_REJECTED
    };
}

function readFirebaseStoreFulfilledAction(firebaseStore) {
    return {
        type : ActionTypes.READ_FIREBASE_STORE_FULFILLED,
        firebaseStore
    };
}