import Home from '../pages/Home';
import BookFlight from "../pages/BookFlight";
import SignUp from "../pages/SignUp";
import Nothing from "../pages/Nothing";
import Control from '../pages/Control';
import Passengers from '../pages/Passengers';
import PlaceToCome from '../pages/PlaceToCome';
import IpFutures from '../pages/IpFutures';
import Help from '../pages/Help';
import Options from '../pages/Options';
import Payment from '../pages/Payment';
import Done from '../pages/Done';
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
        path:'/BookFlight/Passengers/Options',
        page:Options,
        isShowHeader:true,
        isShowFooter:true
    },
    {
        path:'/BookFlight/Passengers/Options/Payment',
        page:Payment,
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
        path:'/*',
        page:Nothing,
        isShowHeader:false,
        isShowFooter:false
    }
]