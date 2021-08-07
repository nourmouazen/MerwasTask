import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FistNavbar from './components/FirstNavbar';
import SecoundNavbar from './components/SecoundNavbar';
import MainPage from './components/mainPage';
import FeaturedAucklandDeals from './components/FeaturedAucklandDeals';

function App() {
  return (
    <div className="App"  class ="mainPage">
      <FistNavbar/>
      <SecoundNavbar/>
      <MainPage/>
      <FeaturedAucklandDeals/>
    </div> 
  );
}

export default App;
