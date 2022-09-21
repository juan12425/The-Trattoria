import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {NavBar} from './features/navbar/navbar';
import {Banner} from './features/banner/banner';
import {Menu} from './features/menu/menu'

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Menu />
    </div>
  );
}

export default App;
