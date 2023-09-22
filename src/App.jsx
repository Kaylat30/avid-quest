import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import Error from './components/Error'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurTeam from './pages/OurTeam'
import Discover from './pages/Discover'
import Booking from './pages/Booking'
import ContactUs from './pages/ContactUs'
import Safaris from './pages/Safaris'
import SafariInfo from './pages/SafariInfo'
import Login from './pages/Login'
import DiscoverInfo from './pages/DiscoverInfo'
import NotFound from './pages/NotFound'
import Signup from './pages/Signup'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} errorElement={<Error />}>
    <Route index element={<Home />} />
    <Route path='about' element={<AboutUs />} />
    <Route path='team' element={<OurTeam />} />
    <Route path='discover' element={<Discover/>} />
    <Route path='discover/:id' element={<DiscoverInfo/>} />
    <Route path='booking' element={<Booking/>} />
    <Route path='contact' element={<ContactUs/>} />
    <Route path='safaris' element={<Safaris/>} />
    <Route path='safaris/:id' element={<SafariInfo/>} />
    <Route path='login' element={<Login/>} />
    <Route path='signup' element={<Signup/>} />
    <Route path='*' element={<NotFound/>} />
  </Route>
))

export default function App()
{ 
  return(
    <RouterProvider router={router} />
  )
}