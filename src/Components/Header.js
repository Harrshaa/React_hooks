import { Link } from "react-router-dom"

const HeaderComponent=()=>{
    return(
        <div className="flex justify-between bg-pink-50">
            <ul className="flex">
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/useState">useState</Link></li>
            </ul>
        </div>
        
    )
}

export default HeaderComponent