import ActionTypes from './action_types';
import database from '../database';

export function watchFirebaseStore(dispatch) {
    database.ref().on('child_added', (snap) => {
        dispatch(watchFirebaseStoreTriggeredAction(snap.val()));
    });
}

function watchFirebaseStoreTriggeredAction(dataAdded) {
    return {
        type : ActionTypes.WATCH_FIREBASE_STORE_TRIGGERED,
        dataAdded
    };
}