import React from 'react';
import Heading from './components/Heading'

import Section from './components/Section'
import './App.css';
import logo from './Trakka _ Spend wisely, Save wisely _ Personal finance made simple and easy_files/trakka-home.png'
import sectionimg from './Trakka _ Spend wisely, Save wisely _ Personal finance made simple and easy_files/trakka-account.png'
import logo2 from './Trakka _ Spend wisely, Save wisely _ Personal finance made simple and easy_files/TrakkaLogoTransparent 2.png'
import decorate from './Trakka _ Spend wisely, Save wisely _ Personal finance made simple and easy_files/ellipse-full.png'



function App() {
  return (
    <div className="App">
     
       <Heading image={logo} image2={logo2} decorate={decorate}/>
       
       <Section sectionimg ={sectionimg}/>
    </div>
  );
}

export default App;
