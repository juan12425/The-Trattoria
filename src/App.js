import React from 'react';
import {selectAllDishes, getTotalCount} from "./features/menu/menu-slice";
import './App.css';
import {NavBar} from './features/navbar/navbar';
import {Banner} from './features/banner/banner';
import {Menu} from './features/menu/menu';
import {Order} from "./features/order/order";
import {Footer} from "./features/footer/footer";  
import {useSelector} from "react-redux";
import {Contact} from "./features/contact/contact"

function App() {
  const dishes=useSelector(selectAllDishes);
  const totalCount=getTotalCount(dishes);

  return (
    <div>
      <NavBar />
      <Banner />
      <Menu />
      {totalCount>0 && <Order />}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
