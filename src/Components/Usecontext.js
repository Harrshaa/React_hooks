import { createContext } from "react";
const Usecontext=()=>{

    const ThemeContext = createContext("light");
    return(
        <div>
            <h1>UseContext</h1>
            <p>Current Theme: {ThemeContext}</p>
        </div>
    )
}

export default Usecontext;