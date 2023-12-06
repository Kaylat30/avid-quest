import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import Error from './components/Error'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurTeam, {loader as teamLoader} from './pages/OurTeam'
import Discover, {loader as discoversLoader}  from './pages/Discover'
import Booking from './pages/Booking'
import ContactUs from './pages/ContactUs'
import Safaris, {loader as safarisLoader} from './pages/Safaris'
import SafariInfo, {loader as safariLoader} from './pages/SafariInfo'
import Login, {action as loginAction} from './pages/Login'
import DiscoverInfo, {loader as DiscoverInfoLoader}  from './pages/DiscoverInfo'
import NotFound from './pages/NotFound'
import Signup,{action as signupAction} from './pages/Signup'
import "./api"
import RequireAuth from './utils'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} errorElement={<Error />}>
    <Route index element={<Home />} />
    <Route path='about' element={<AboutUs />} />
    <Route path='team' element={<OurTeam />} loader={teamLoader}/>
    <Route path='discover' element={<Discover/>} loader={discoversLoader} />
    <Route path='discover/:id' element={<DiscoverInfo/>} loader={DiscoverInfoLoader}/>
    <Route element={<RequireAuth />}>
      <Route path='booking' element={<Booking/>} />
    </Route>
    <Route path='contact' element={<ContactUs/>} />
    <Route path='safaris' element={<Safaris/>} loader={safarisLoader}/>
    <Route path='safaris/:id' element={<SafariInfo/>} loader={safariLoader}/>
    <Route path='login' element={<Login/>} action={loginAction}/>
    <Route path='signup' action={signupAction} element={<Signup/>} />
    <Route path='*' element={<NotFound/>} /> 
  </Route>
))

export default function App()
{ 
  return(
    <RouterProvider router={router} />
  )
}