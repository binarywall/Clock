import {createBrowserRouter} from 'react-router-dom'
import App from '../App';
import CountryTime from './CountryTime';
import Worldclock from './WorldClock';
import Stopwatch from './Stopwatch';




const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'/worldclock',
    element:<Worldclock/>,
  },
  {
    path:'/stopwatch',
    element:<Stopwatch/>,
  },
  {
    path:'/worldclock/:cont/:time',
    element:<CountryTime/>,
  },
])

export default router;