import React, { Component } from 'react';
import { Element } from 'react-scroll';

import './resources/styles.css';
import Header from './components/header_footer/Header';

import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import HighLights from './components/HighLights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:"1500px",background:''}}>
        <Element name="header">
          <Header />
        </Element>

        <Element name="featured">
          <Featured />
        </Element>

        <Element name="venuenfo">
          <VenueNfo/>
        </Element>

        <Element name="hightlights">
          <HighLights />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location/>
        </Element>
        
        <Element name="Footer">
          <Footer/>
        </Element>
        

      </div>
    );
  }
}

export default App;
