import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {choice, remove} from './helpers';
import {fruits} from './food';

function App () {
  const item = choice(fruits);
  console.log(`I'd like one ${item}, please`)
  console.log(`Here you go: ${item}`);
  console.log(`Delicious! May I have another?`)
  remove(fruits, item);
  console.log(`I’m sorry, we’re all out. We have ${fruits.length} left.`)
  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))

