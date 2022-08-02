import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [cusList, setCustomerList] = useState(null);

  const loadCustomer = () => {
    axios.get("http://localhost:8080/customers").then(ret => {
      console.log(ret);
      setCustomerList(ret.data);
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Hello world</h2>
        <button onClick={loadCustomer}>Load Customer</button>
        {cusList && cusList.map(m => (
          <div>
              <h2>{m.id}</h2> - <span>{m.name}</span> ---- <b>{m.address}</b>  
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
