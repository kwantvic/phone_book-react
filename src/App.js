import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import CreateConteiner from './components/Create/CreateConteiner';
import MyPhoneBookConteiner from './components/MyPhoneBook/MyPhoneBookConteiner';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/newPhonebook' render={() => (<CreateConteiner/>)} />
        <Route path='/myPhonebook' render={() => (<MyPhoneBookConteiner/>)} />
      </div>
    </div>
  )
}

export default App;