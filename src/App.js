import React, { useState } from "react";
import './App.css';
import { signUp } from "./Auth/helper";
import Signup from "./Signup";


const App=() =>{
  return (
    <div>
      <Signup/>
    </div>
  );
}

export default App;
