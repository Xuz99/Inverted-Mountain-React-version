import React, {Component, Fragment} from 'react';
import './styles/app.css';
import './styles/custom.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Play from './components/Play';
import Newsletter from './components/Newsletter';


class App extends Component {
  render(){
    return (
      <Fragment>
      <Header/>
      <Navbar/>
      <LandingPage/>
      <Play/>
      <Newsletter/>
      </Fragment>
      ) 
  }
}

export default App;
