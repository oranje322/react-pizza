import React from 'react';
import './scss/app.scss'
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import {Route} from "react-router-dom";
import Cart from "./components/Cart/Cart";




function App() {
    



  return (
      <div className="wrapper">
          <Header />

          <Route exact path={'/cart'}>
              <Cart />
          </Route>
          <Route exact path={'/'}>
              <Content />
          </Route>
      </div>
  );
}

export default App;
