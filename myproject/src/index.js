import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './componant.js';
import mainlogin from './login.jsx';
import Dashboard from './NameChanged';
import Mainfunction from './newfunction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <App/>
 <Login/>
 <Dashboard/>  
<Mainfunction/>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals