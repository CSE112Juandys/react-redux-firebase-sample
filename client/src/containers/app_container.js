import { connect } from 'react-redux';
import { readFirebaseStore } from '../actions/read_firebase_store_actions';
import { updateFirebaseStore } from '../actions/update_firebase_store_actions';
import { watchFirebaseStore } from '../actions/watch_firebase_store_actions';
import App from '../components/app';

function mapStateToProps(state) {
    return {
        firebaseStore : state.firebaseStore
    };
}

function mapDispatchToProps(dispatch) {
    watchFirebaseStore(dispatch);
    return {
        onReadFirebaseStore   : () => dispatch(readFirebaseStore()),
        onUpdateFirebaseStore : (dataToAdd) => dispatch(updateFirebaseStore(dataToAdd))
    };
}

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;