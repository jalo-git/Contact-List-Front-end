import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormDataComponent from './components/inputField';
import Header from './components/header';
import DisplayField from './components/displayField';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="row">
          <div className="col-lg-3">
            <FormDataComponent />
          </div>
          <div className="col-lg-9">
            <DisplayField />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
