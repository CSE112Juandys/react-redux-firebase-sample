import ActionTypes from './action_types';
import database from '../database';

export function updateFirebaseStore(dataToAdd) {
    return dispatch => {
        dispatch(updateFirebaseStoreRequestedAction());
        const databaseRef = database.ref('/');
        databaseRef.push({
            dataToAdd
        })
        .then(() => {
            dispatch(updateFirebaseStoreFulfilledAction({ dataToAdd }));
        })
        .catch((error) => {
            dispatch(updateFirebaseStoreRejectedAction());
        });
    }
}

function updateFirebaseStoreRequestedAction() {
    return {
        type : ActionTypes.UPDATE_FIREBASE_STORE_REQUESTED
    };
}

function updateFirebaseStoreRejectedAction() {
    return {
        type : ActionTypes.UPDATE_FIREBASE_STORE_REJECTED
    };
}

function updateFirebaseStoreFulfilledAction(dataToAdd) {
    return {
        type : ActionTypes.UPDATE_FIREBASE_STORE_FULFILLED,
        dataToAdd
    };
}