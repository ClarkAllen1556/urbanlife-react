import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Body from './components/Body';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx:container flex-col h-screen bg-sol-tan-1">
      <Header />
      <Body />
    </div>
  );
}

export default App;
