import React, { useState, useEffect } from 'react';
import './App.css'
import Card from './Components/Card';
import Fetch from './Fetch';


function App() {
  return (
    <div className="card-class">
      <Fetch />
    </div>
  )
};

export default App;
