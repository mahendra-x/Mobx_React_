import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { Count } from './Components/Count';
import { GetUserDetails } from './Components/GetUserDetails';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Count />
       <GetUserDetails/>
      </header>
    </div>
  );
}

export default App;
