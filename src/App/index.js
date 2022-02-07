import React from "react";
import { TodoProvider } from "../TodoContext";
import {AppUi} from './AppUi'
import './App.css';

function App() {

  
  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
}

export default App;
