import { Link } from "react-router-dom"

const HeaderComponent=()=>{
    return(
        <div className="flex flex-col bg-pink-50">
            <ul className="flex">
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/useState">useState</Link></li>
                <li className="px-4"><Link to="/useEffect">useEffect</Link></li>
                <li className="px-4"><Link to="/useContext">useContext</Link></li>
                <li className="px-4"><Link to="/useReducer">useReducer</Link></li>
                <li className="px-4"><Link to="/useMemo">useMemo-Callback</Link></li>
            </ul>

            <ul className="flex mt-8">
            <li className="px-4"><Link to="/customHook">Custom Hooks</Link></li>
            {/* <li className="px-4"><Link to="/useCounter">use-counter</Link></li> */}

            </ul>
        </div>
        
    )
}

export default HeaderComponent