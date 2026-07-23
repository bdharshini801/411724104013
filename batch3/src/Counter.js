import { useState } from "react"
import { useEffect } from "react"

export default function Counter(){
    //let count=0;
    const [count,setCount]=useState(0)
    // useEffect(()=>{console.log(count)},[count])
    useEffect(()=>{document.title=count},[count])
    function Increment(){
        setCount(count+1)
    }
    function Decrement(){
        setCount(count-1)
    }
    function Reset(){
        setCount(0)
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
           
        </>
    )
}























// import { useState } from "react";
// export default function Counter() {
//   const [count, setCount] = useState(0);
//   function increment() {
//     setCount(count + 1);
//   }
//   function decrement() {
//     setCount(count - 1);
//   }
//   function reset() {
//     setCount(0);
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }


// import { useState, useEffect } from "react"
// import {useeffect} from "react"

// export default function Counter() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {console.log(count)},[])
//   function increment() {

