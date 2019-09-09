import React from 'react';
import {Provider} from "react-redux";
import store from "./store";
import Wizard from "./components/wizard";
import AppNav from "./components/AppNav";

const App = () => (
  <Provider store ={store} >
  <main>
    <AppNav/>
 <Wizard/>
  </main>
  </Provider>
)

export default App;
