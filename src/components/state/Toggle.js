import React, { useState } from "react";

// statles functional component: component nhưng không sử dụng state

// function Toggle() {
//     return
//     (
//         <div className="toggle">

//         </div>
//     )
// }
// // Satateful functional components: component có sử dụng state

// function Toggle2() {
//     // const [count, setCount]=useState();
//     return (
//         <div className="toggle"></div>
//     )
// }


function Toggle() {
    // 1. enabling state: useState(initialize value)
    // 2. initialie state: useState(false)
    // 3. reading state: 
    // 4. update state

    const array = useState(false);
    console.log(array) //[falses, function]
    console.log(array[0])
    console.log(array[1])
    const arr = [1, 2];
    console.log(arr[0], arr[1])
    return <div className="toggle"></div>
}

export default Toggle;