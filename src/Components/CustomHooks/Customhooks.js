import UseCounter from "./Usecounter";

const CustomHooks=()=>{

    const {count,increment,decrement,reset}= UseCounter(0,2)


    return (
        <div className="flex flex-col items-center my-8">
            <h1>Welcome to Custom Hooks</h1>
            <p>Count :{count} </p>
            <button className="border border-black" onClick={increment}>Increment</button>
            <button className="border border-black" onClick={decrement}>Decrement</button>
            <button className="border border-black" onClick={reset}>Reset</button>
        </div>

    )
}

export default CustomHooks;