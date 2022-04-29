import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Body from './components/Body';
import Hero from './components/Hero';

function App() {
  return (
    <div className="mx:container flex-col h-screen bg-sol-tan-1">
      <Header />
      <Body>
        <Hero />
      </Body>
    </div>
  );
}

export default App;
