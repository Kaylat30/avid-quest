import { Form, Link } from 'react-router-dom';
import resort1 from '../imgs/resort1.jpg';
import facebook from "../imgs/icon-facebook.svg"
import youtube from "../imgs/icon-youtube.svg"
import twitter from "../imgs/icon-twitter.svg"
import pinterest from "../imgs/icon-pinterest.svg"
import instagram from "../imgs/icon-instagram.svg"
export default function ContactUs()
{
    const parentDivStyle = {
        backgroundImage: `url(${resort1})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '40vh', 
        display: 'flex',
        paddingRight: '60%',
        alignItems: 'center',
    };
    
      return (
        <>
            {/* location section */}
            <div style={parentDivStyle} className="relative">
                <div className="text-white text-center mx-auto p-8">
                    <h1 className="text-4xl font-bold mb-4 etx">Contact</h1>
                </div>
                <div className="hidden sm:block absolute right-20 bottom-0 p-4 text-black bg-white rounded-t-lg font-bold">
                    Home / <span className='text-brightRed'>Contact</span>
                </div>
            </div>
            {/* contact us section */}
            <section className='space-y-9 items-center mt-10 mb-10'>
                <div className='flex flex-col items-center justify-center space-y-3 lg:ml-48 lg:mr-48 xsm:ml-7 xsm:mr-7'>
                    <div className='text-brightRed'>Talk with our team</div>
                    <div className='font-bold text-3xl'>Contact Us</div>
                    <div> Contact Viva Quest by sending us a message via our contact form below. We shall respond 
                    within 24 hours</div>
                        
                </div>
                {/* social media icons */}
                <div className="flex justify-center space-x-2">
                    <Link to="/" className="hover:bg-brightRed rounded-full p-3 bg-black">
                        <img src={facebook} className="h-8 rounded-full" alt="Facebook" />
                    </Link>
                    <Link to="/" className="hover:bg-brightRed rounded-full p-3 bg-black">
                        <img src={youtube} className="h-8 rounded-full" alt="YouTube" />
                    </Link>
                    <Link to="/" className="hover:bg-brightRed rounded-full p-3 bg-black">
                        <img src={twitter} className="h-8 rounded-full" alt="Twitter" />
                    </Link>
                    <Link to="/" className="hover:bg-brightRed rounded-full p-3 bg-black">
                        <img src={pinterest} className="h-8 rounded-full" alt="Pinterest" />
                    </Link>
                    <Link to="/" className="hover:bg-brightRed rounded-full p-3 bg-black">
                        <img src={instagram} className="h-8 rounded-full" alt="Instagram" />
                    </Link>
                </div>
                {/* form section */}
                <div className='space-y-3 lg:ml-28 lg:mr-28 xsm:ml-7 xsm:mr-7'>
                <Form className='flex flex-col items-center space-y-7 '>
                    <input type='text' placeholder='Your name' className='bg-pink-100 md:w-96 md:p-4  xsm:p-2 xsm:w-72 rounded-lg' />
                    <input type='email' placeholder='Email Address' className='bg-pink-100 md:w-96  md:p-4  xsm:p-2 xsm:w-72 rounded-lg' />
                    <input type='tel' placeholder='Phone Number' className='bg-pink-100 md:w-96  md:p-4  xsm:p-2 xsm:w-72 rounded-lg' />
                    <input type='text' placeholder='Subject' className='bg-pink-100 md:w-96  md:p-4  xsm:p-2 xsm:w-72 rounded-lg' />
                    <textarea rows={4} cols={50} placeholder='Write message here...' className='bg-pink-100 md:w-96  md:p-4  xsm:p-2 xsm:w-72 rounded-lg'></textarea>
                    <button
                        type='submit'
                        className="md:p-6 xsm:p-3 xsm:px-5 md:px-9 font-bold text-white bg-brightRed rounded-xl baseline hover:shadow-2xl"
                    >
                        SEND A MESSAGE
                    </button>

                </Form>

                </div>
                
            </section>
            <section className='flex flex-col justify-between  lg:flex-row m-10 '>
                <div className='flex justify-around items-center lg:w-72  h-40 rounded-lg border border-solid mb-3 '> 
                    <Link to="/" className="hover:bg-brightRed rounded-full p-3 bg-black">
                        <img src={facebook} className="h-8 rounded-full" alt="Facebook" />
                    </Link>
                    <div>
                        <h1 className='font-bold text-xl'>Address</h1>
                        <h5>Uganda Plot 10 Tif Towers</h5>
                    </div>
                </div> 
                <div className='flex justify-around items-center lg:w-72  h-40 rounded-lg border border-solid mb-3'> 
                    <Link to="/" className="hover:bg-brightRed rounded-full p-3 bg-black">
                        <img src={facebook} className="h-8 rounded-full" alt="Facebook" />
                    </Link>
                    <div>
                        <h1 className='font-bold text-xl'>Phone</h1>
                        <h5>+256 400 444 987 </h5>
                        <h5>+256 456 678 809</h5>
                    </div>
                </div>
                <div className='flex justify-around items-center lg:w-72  h-40 rounded-lg border border-solid mb-3'> 
                    <Link to="/" className="hover:bg-brightRed rounded-full p-3 bg-black">
                        <img src={facebook} className="h-8 rounded-full" alt="Facebook" />
                    </Link>
                    <div>
                        <h1 className='font-bold text-xl'>Email</h1>
                        <h5>info@vivaquest.com</h5>
                    </div>
                </div>                
            </section>
        </>
      )
}    