
import {createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from './../Pages/Home/Home';
import About from './../Pages/About/About';
import Test from './../Pages/Test-page/Test';
import Protfolio from './../Pages/Protfolio/Protfolio';
import Blog from './../Pages/Blog/Blog';
import Contact from './../Pages/Contact/Contact';

const routes = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"home",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"protfolio",
                element:<Protfolio/>
            },
            {
                path:"blog",
                element:<Blog/>
            },
        ]
    },
    {
        path:"test",
        element:<Test/>
    }
])
export default routes;