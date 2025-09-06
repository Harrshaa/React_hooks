import { useState,useMemo, useCallback } from "react";

const UsememoComponent=()=>{

    const [counter,setCounter] = useState(2);
    const [counter2,setCounter2]=useState(100);
    // const squaredValue=useMemo(()=>{
    //     console.log("Expensive Calculation...")
    //     return counter* counter;
    // },[counter])
    const squaredValue=useCallback(()=>{
        console.log("Expensive Calculation...",  counter2)
        return counter* counter;
    },[counter])
    return (

        <div className="flex flex-col items-center my-8">
            <h1>USEMEMO HOOK</h1>
            <h2>Counter 1 : {squaredValue()}</h2>
            <button className="my-4 bg-red-200 " onClick={()=>  setCounter((prev)=> prev*prev)}>Increment</button>
            <hr/>
            <h2> Counter 2 : {counter2}</h2>
            <button className="my-4 bg-red-200 " onClick={()=>  setCounter2((prev)=> prev-2)}>Decrement by 2</button>
        </div>
    )
}

export default UsememoComponent;