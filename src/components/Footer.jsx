import { Link } from "react-router-dom"
import image from "../imgs/logo.png";
import facebook from "../imgs/icon-facebook.svg"
import youtube from "../imgs/icon-youtube.svg"
import twitter from "../imgs/icon-twitter.svg"
import pinterest from "../imgs/icon-pinterest.svg"
import instagram from "../imgs/icon-instagram.svg"

export default function Footer()
{
    const currentYear = new Date().getFullYear();
    return(
        <>
           
    <footer className="bg-veryDarkBlue">
        
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
               
               <div className="flex flex-col-reverse items-center justify-between space-y-12 lg:flex-col lg:space-y-0 lg:items-start">
                <div className="mx-auto my-6 text-center text-white lg:hidden">
                    Copyright &copy; {currentYear}, All Rights Reserved 
                </div>
                
                <div className="flex items-center">
                    <img src={image} className="h-8" alt=""/>
                    <h1 className="font-bold text-white">Viva Quest</h1>
                </div>
                
                <div className="flex justify-center space-x-4">
                    
                    <Link to="/">
                        <img src={facebook} className="h-8" alt=""/>
                    </Link>
                    
                    <Link to="/">
                        <img src={youtube} className="h-8" alt=""/>
                    </Link>
                    
                    <Link to="/">
                        <img src={twitter} className="h-8" alt=""/>
                    </Link>
                    
                    <Link to="/">
                        <img src={pinterest} className="h-8" alt=""/>
                    </Link>
                    
                    <Link to="/">
                        <img src={instagram} className="h-8" alt=""/>
                    </Link>
                </div>                
               </div>
               
               <div className="flex flex-col justify-center space-y-8">
                    <h3 className="flex flex-col items-center text-white font-bold">Company</h3>
                    <div className="flex justify-around space-x-4">                    
                        <div className="flex flex-col space-y-3 text-white">                    
                            <Link to="/" className="hover:text-brightRed">Home</Link>
                            <Link to="about" className="hover:text-brightRed">About Us</Link>
                            <Link to="team" className="hover:text-brightRed">Our Team</Link>
                            <Link to="safaris" className="hover:text-brightRed">Safaris</Link>
                        </div>
                        <div className="flex flex-col space-y-3 text-white">
                            <Link to="discover" className="hover:text-brightRed">Discover Nature</Link>
                            <Link to="booking" className="hover:text-brightRed">Bookings</Link>
                            <Link to="contact" className="hover:text-brightRed">Contact Us</Link>                    
                        </div>
                   </div>
                </div>
               
               
               <div className="flex flex-col space-y-8">
                    <h3 className="flex items-center flex-col text-white font-bold">NewsLetter</h3>
                    <div className="flex flex-col text justify-between">
                
                        <form>
                            <div className="flex flex-col space-x-3 sm:flex-row xsm:space-y-3 ">
                                <input type="text" className="flex-1 px-4 rounded-full outline-none" placeholder="Email Address"/>
                                <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                        
                    </div>
                    <div className="hidden text-white lg:block">
                        Copyright &copy; {currentYear}, All Rights Reserved 
                    </div>
               </div>

            
        </div>

        <div className="text-white flex justify-center">Developed by Kayondo A.Latif</div>
        
    </footer>
        </>
    )
}