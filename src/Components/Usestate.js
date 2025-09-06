import { useContext, useState } from "react";


const UsestateComponent=()=>{

    const [count,setCount]=useState(0);
    // const data=useContext(ThemeContext);
    // console.log(data);

    const handleIncrement=()=>{
       setCount((prev)=>prev+1)
       setCount((prev)=>prev+1)
       setCount((prev)=>prev+1)
  
        console.log(count);
    }

    return(
        <div className="flex  justify-center content-center py-10">
            {/* <div className="flex ">
            <span>count:{count}</span>
            <button className="w-20 bg-red-200" onClick={()=>setCount((prev)=>prev+1)}>Click me</button>
            </div>
             */}
            <div>
            <span>count by three:{count}</span>
            <button className="w-20 bg-red-200" onClick={()=>handleIncrement()}>Click me</button>    
            </div>
        </div>
    )
}
export default UsestateComponent;