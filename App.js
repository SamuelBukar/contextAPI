import React, {Component} from 'react';
import './App.css';
import { Table, Button } from 'react-bootstrap'
import { ProductProvider, ProductConsumer } from './Context';  // Named imports
import Home from './Component/Home';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <h1>Hello ReactJs</h1>
        <Home />
      </div>
    </ProductProvider>
  );
}

export default App;
