import { useReducer } from "react";

const UsereducerComponent=()=>{

    const countReducer=(state,action)=>{
        switch(action.type){
            case "INCREMENT":
                return{
                    ...state,
                    count:state.count+1,
                }
            case "DECREMENT":
                return{
                    ...state,
                    count: state.count-1,
                }
            
            default:
                return state;

        }

    }

    const initialCount={
        count:0
    }

    const [state,dispatch]=useReducer(countReducer,initialCount)
    return(
        <div className="flex flex-col items-center py-4">
        
        <p>Count : {state.count}</p>
        <button className="bg-red-200" onClick={()=> dispatch({type: "INCREMENT"})} >Increment</button>
        <button className="bg-red-200 my-6" onClick={()=> dispatch({type: "DECREMENT"})} >Decrement</button>
        </div>
        
    )
}

export default UsereducerComponent;