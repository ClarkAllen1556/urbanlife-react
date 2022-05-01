import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Body from './components/Body';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <div className="mx:container flex-col h-screen bg-sol-tan-1">
      <Header />
      <Body>
        <Hero />

        <div className="flex gap-2 ml-5 mr-5">
          <Card>
            <div>
              <h1 className="text-2xl"> Welcome to my page! </h1>
              <p> Hello there! My name is allen clark! </p>
            </div>
          </Card>
          <Card>
            <div>
              <h1 className="text-2xl"> Welcome to my page! </h1>
              <p> Hello there! My name is allen clark! </p>
            </div>
          </Card>
        </div>
      </Body>
    </div>
  );
}

export default App;
