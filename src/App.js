import QRCode from 'react-qr-code';
import './App.css';
import { useState } from 'react';

function App() {
  const [text,setText]=useState('')
 
  function handleChange(e){
    setText(e.target.value)
  }
  return (
    <div className="App">
      <h1>QR Generator</h1>
      <QRCode value={text}/>
      <div>
        <p>Enter your Text here</p>
        <input type='text' value={text} onChange={(e)=>{handleChange(e)}}></input>
      </div>
    </div>
  );
}

export default App;
