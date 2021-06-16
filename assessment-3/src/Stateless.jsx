import React from 'react';

function Greeting2() {

  function sayHello() {
    alert('Hello!');
  }
  
  return (
    <button onClick={sayHello}>
      Click me!
    </button>
  );
}

export default Greeting2;