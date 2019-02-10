import React, { Component } from 'react';
import './App.css';
import VideoPlayer from './components/player'
import Logo from './components/logo'

class App extends Component {

  componentDidMount(){
    // setTimeout(10000)
    setTimeout(
    fetch('http://localhost:8000/mail',{
        method: 'get'
      })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.log(err))
      ,10000)
  }
  
  render() {
    return (
      <div className="App">
        <Logo />
        <VideoPlayer />
      </div>
    );
  }
}

export default App;
