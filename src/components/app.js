import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firebaseStore : "empty"
    };
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
      <div> {this.state.firebaseStore} </div>
    );
  }
}

