import React, { useState } from "react";

// export default function Button() {
//   const [buttonText, setButtonText] = useState("Click me, please");

//   return (
//     <button onClick={() => setButtonText("Thanks, been clicked!")}>
//       {buttonText}
//     </button>
//   );
// } 

export default function SayHello() {
    const [saying, setButtonSaying] = useState("Hello");
  
    return (
      <button onClick={() => setButtonSaying("and Welcome")}>
        {saying}
      </button>
    );
  }