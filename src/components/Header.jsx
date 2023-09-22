import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import image from '../imgs/logo.png';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
}

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex flex-col justify-center lg:items-center  mx-auto p-6 fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className='lg:inline-flex flex items-center justify-between'>
        <div className="flex items-center justify-between lg:space-x-5">
          <div className="pt-2 flex items-center">
            <img className="" src={image} width="40px" alt="VIVA QUEST LOGO" />
            <h2 className="font-bold text-2xl">Viva Quest</h2>
          </div>

          {/* Show on screens smaller than LG (976px) */}
          <div className={`lg:flex space-x-6 hide-on-mobile`}>

            <NavLink 
            to="/" 
            className="hover:text-darkGrayisBlue"
            style={({isActive}) => isActive ? activeStyles : null}>
              Home
            </NavLink>

            <NavLink 
            to="about"           
            className="hover:text-darkGrayisBlue "
            style={({isActive}) => isActive ? activeStyles : null}>
              About Us
            </NavLink>

            {/* This link is hidden on screens smaller than LG */}

            <NavLink 
            to="team" 
            className="hover:text-darkGrayisBlue show-on-mobile"
            style={({isActive}) => isActive ? activeStyles : null}>
              Our Team
            </NavLink>

            <NavLink 
            to="safaris" 
            className="hover:text-darkGrayisBlue"
            style={({isActive}) => isActive ? activeStyles : null}>
              Safaris
            </NavLink>

            <NavLink 
            to="discover" 
            className="hover:text-darkGrayisBlue"
            style={({isActive}) => isActive ? activeStyles : null}>
              Discover Nature
            </NavLink>

            <NavLink 
            to="booking" 
            className="hover:text-darkGrayisBlue"
            style={({isActive}) => isActive ? activeStyles : null}>
              Bookings
            </NavLink>

            <NavLink 
            to="contact" 
            className="hover:text-darkGrayisBlue"
            style={({isActive}) => isActive ? activeStyles : null}>
              Contact Us
            </NavLink>

          </div>

          <Link
            to="login"
            className="hidden lg:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            Login
          </Link>
        </div>

        
        <button
          id="menu-btn"
          className={`hamburger lg:hidden focus:outline-none ${
            menuOpen ? 'open' : ''
          }`}
          onClick={toggleMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div
        id="menu"
        className={`lg:hidden  ${
          menuOpen ? 'flex flex-col' : 'hidden'
        } items-center self-end py-8 mt-10 space-y-6 font-bold bg-white xsm:w-64 xsm:self-center left-6 right-6 drop-shadow-md`}
      >
        
        <Link to="/">Home</Link>
        <Link to="about">About Us</Link>
        <Link to="team">Our Team</Link>
        <Link to="safaris">Safaris</Link>
        <Link to="discover">Discover Nature</Link>
        <Link to="booking">Bookings</Link>
        <Link to="contact">Contact Us</Link>
        <Link
            to="login"
            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            Login
        </Link>
      </div>
    </nav>
  );
}
