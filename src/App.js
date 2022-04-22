import Devour from './images/Devour.jpg'
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ButtonClear } from './components/ButtonClear';
import {useState} from 'react';
import {evaluate} from 'mathjs'

function App() {

  const [input,setInput] = useState('');

  const addInput= value=>{
    setInput(input + value);
  }
  const calculate=()=>{
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  }

  return (
    <div className="App">
      <div className='logo-container'>
        <img src={Devour} className='logo' alt='Logo'> 
        </img>
      </div>
      <div className="calculator-container">
        <Input input={input}/>
        <div className='row'>
          <Button clickHandler={addInput}>1</Button>
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button clickHandler={calculate}>=</Button>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={addInput}>/</Button>
        </div>
        <div className='row'>
            <ButtonClear
              clearHandler={() => setInput('')}
            >Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
