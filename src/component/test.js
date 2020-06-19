import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
// function Example() {
//   // 声明一个叫 "count" 的 state 变量
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//       <button onClick={() => setCount(count - 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
function Counter() {
    const [count, setCount] = useState(Number(1));
    function go(){
        this.history.push('/home')
    }
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(Number(1))}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        <a onClick={go}>回到home</a>
      </>
    );
  }

export default Counter