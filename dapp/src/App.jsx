import { useState } from 'react'
import {Install} from "./components";
import Home from "./Home";

function App() {
  return window.ethereum ? <Home /> : <Install />
}

export default App;
