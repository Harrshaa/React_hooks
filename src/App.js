import React from "react";
import ReactDOM from 'react-dom/client';
import Body from './Components/Body';
import Error from './Components/Error';
import UsestateComponent from './Components/Usestate';
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom'
import HeaderComponent from "./Components/Header";
import UseeffectComponent from "./Components/Useeffect";
import Usecontext from "./Components/Usecontext";
import UsereducerComponent from "./Components/Usereducer";
import UsememoComponent from "./Components/Usememo";
import CustomHooks from "./Components/CustomHooks/Customhooks";
import UseCounter from "./Components/CustomHooks/Usecounter";

const App=()=>{
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
           
        
        
        </div>
    )


    
}

const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element:<App/>,
            children:[
                {
                    path:"/",
                    element:<Body/>
                },
                {
                    path:"/useState",
                    element:<UsestateComponent/>
                },
                {
                    path:"/useEffect",
                    element:<UseeffectComponent/>
                },
                {
                    path:"/usecontext",
                    element:<Usecontext/>
                },
                {
                    path:"/useReducer",
                    element:<UsereducerComponent/>
                },
                {
                    path:"/useMemo",
                    element:<UsememoComponent/>
                },
                {
                    path:"/customHook",
                    element:<CustomHooks/>
                   
                },
                {
                    path:"/useCounter",
                    element:<UseCounter/>
                }

            ],
            errorElement:<Error/>
        }
    ]
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);