import React, {Component} from 'react';

class App extends Component {

  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  }

  getMyStorage = () => {
    let myCookieDate = document.cookie.split("=")[1];
    let myLocalStorageDate = localStorage.getItem('Paragon');
    let mySessionStorageData = sessionStorage.getItem('frontend');
  }

  render() {
    return (
        <div className="App">
          <button onClick={this.setMyStorage}>Set my storage</button>
          <button onClick={this.getMyStorage}>Get my storage</button>
        </div>
    )
  }
}

export default App;