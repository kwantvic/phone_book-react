import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import CreateConteiner from './components/Create/CreateConteiner';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/newPhonebook' render={() => (<CreateConteiner/>)}
				/>
      </div>
    </div>
  )
}

export default App;