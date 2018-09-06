import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
 
  render() {
     const {dog, fetching, error, onFetchUser} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={dog || logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {dog ? (
           <p className="App-intro">Keep clicking for new dogs</p>
          ) : (
            <p className="App-intro">Replace the React icon with a dog!</p>
        )}
        
        {
          fetching ? 
          (<button disabled>Fetching...</button>) :
          (<button onClick={onFetchUser}>click button to Toogle a Dog</button>)
        }

        {error && <p style={{ color: 'red' }}>Oh, Something looks wrong!</p>}
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dog: state.dog,
  fetching: state.fetching,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  onFetchUser: () => dispatch({type: 'API_CALL_REQUEST'})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
