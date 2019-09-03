import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
// import ContactState from './context/contact/ContactState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // <ContactState>
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
          </Switch>
        </div>
      </div>
    </Router>
    // </ContactState>
  );
}

export default App;
