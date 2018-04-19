import { connect } from 'react-redux';
import { readFirebaseStore } from '../actions/firebase_store_actions';
import App from '../components/app';

function mapStateToProps(state) {
    return {
        firebaseStore : state.firebaseStore
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onReadFirebaseStore : () => dispatch(readFirebaseStore())
    };
}

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;