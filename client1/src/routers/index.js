import Home from '../pages/Home';
import BookFlight from "../pages/BookFlight";
import SignUp from "../pages/SignUp";
import Nothing from "../pages/Nothing";
export const routers=[
    {
        path:'/',
        page:Home,
        isShowHeader:true
    },
    {
        path:'/BookFlight',
        page:BookFlight,
        isShowHeader:true
    },
    {
        path:'/SignUp',
        page:SignUp,
        isShowHeader:true
    },
    {
        path:'/*',
        page:Nothing,
        isShowHeader:false
    }
]