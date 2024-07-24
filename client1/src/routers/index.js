import Home from '../pages/Home';
import BookFlight from "../pages/BookFlight";
import SignUp from "../pages/SignUp";
import Nothing from "../pages/Nothing";
import Control from '../pages/Control';
import PlaceToCome from '../pages/PlaceToCome';
import IpFutures from '../pages/IpFutures';
import Help from '../pages/Help';
import Done from '../pages/Done';
import Admin from '../pages/Admin';
import signInAdmin from '../pages/SignInAdmin';
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
        path:'/BookFlight/Passengers/Options/Payment/Done',
        page:Done,
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
        path:'/PlaceToCome',
        page:PlaceToCome,
        isShowHeader:true,
        isShowFooter:true
    },
    {
        path:'/IpFutures',
        page:IpFutures,
        isShowHeader:true,
        isShowFooter:true
    },
    {
        path:'/Help',
        page:Help,
        isShowHeader:true,
        isShowFooter:true
    },
    {
        path:'/Admin',
        page:Admin,
        isShowHeader:true,
        isShowFooter:true
    },
    {
        path:'/signInAdmin',
        page:signInAdmin,
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