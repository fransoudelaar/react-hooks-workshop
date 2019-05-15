/* 
* Exercise 4:
* Copy the Counter component from below to your project. 
* For every re-render of the component, 2 new functions are created. In this example, 5 state changes result in 10 new functions.
* Try to resolve the problem with Hooks.
*/

import React, { useState } from 'react';

// Keeps track of all created functions during the app's life 
const functions: Set<any> = new Set();

const Counter = () => {
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);

  const increment1 = () => setC1(c1 + 1);
  const increment2 = () => setC2(c2 + 1);

  // Register the functions so we can count them
  functions.add(increment1);
  functions.add(increment2);

  return (<div>
    <div> Counter 1 is {c1} </div>
    <div> Counter 2 is {c2} </div>
    <br/>
    <div>
      <button onClick={increment1}>Increment Counter 1</button>
      <button onClick={increment2}>Increment Counter 2</button>
    </div>
    <br/>
    <div> Newly Created Functions: {functions.size - 2} </div>
  </div>)
}