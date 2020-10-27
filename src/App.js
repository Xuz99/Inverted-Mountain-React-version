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
            <section className="mx-5 flex-auto max-w-full mx-10 xl:mx-64">
              <LandingPage/>
            </section>
            <section className="mx-5 flex-auto max-w-full mx-10 xl:mx-64">
              <Play/>
            </section>
            <section className="mx-5 flex-auto max-w-full mx-10 xl:mx-64">
              <Newsletter />
            </section>
          </Fragment>
        ) 
      
  }
}

export default App;
