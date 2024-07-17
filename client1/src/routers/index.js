import Home from '../pages/Home';
import BookFlight from "../pages/BookFlight";
import SignUp from "../pages/SignUp";
import Nothing from "../pages/Nothing";
import Control from '../pages/Control';
import Passengers from '../pages/Passengers';
export const routers=[
    {
        path:'/',
        page:Home,
        isShowHeader:true,
        isShowFooter:true
    },
    {
        path:'/BookFlight',
        page:BookFlight,
        isShowHeader:true,
        isShowFooter:true
    },
    {
        path:'/BookFlight/Passengers',
        page:Passengers,
        isShowHeader:true,
        isShowFooter:true
    },
    {
        path:'/SignUp',
        page:SignUp,
        isShowHeader:true,
        isShowFooter:true
    },
    {
        path:'/Control',
        page:Control,
        isShowHeader:true,
        isShowFooter:true
    },
    {
        path:'/*',
        page:Nothing,
        isShowHeader:false,
        isShowFooter:false
    }
]