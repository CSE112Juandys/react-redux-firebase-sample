import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firebaseStore : [],
      queryCounter  : 1
    };
  
    this.handleUpdateFirebase = this.handleUpdateFirebase.bind(this);
  }

  handleUpdateFirebase() {
    const queryCounter = this.state.queryCounter + 1;
    this.setState({ queryCounter });
    this.props.onUpdateFirebaseStore(this.state.queryCounter);

  }

  componentDidMount() {
    this.props.onReadFirebaseStore();
  }

  componentWillReceiveProps(newProps) {
    console.log("PROPS RECEIVED");
    console.log(newProps.firebaseStore.query);
    this.setState({ firebaseStore : newProps.firebaseStore.query });
  }

  render() {
    return (
      <div> 
        <p> this version is built on travis and deployed to firebase, edit version by aaron to test build </p>
        <p> {this.state.firebaseStore} </p>
        <button onClick={this.handleUpdateFirebase} > update firebase </button> 
      </div>
    );
  }
}

