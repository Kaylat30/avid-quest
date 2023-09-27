import { Link,defer,Await, useLoaderData } from "react-router-dom"
import { Suspense } from 'react';
import facebook from "../imgs/icon-facebook.svg"
import youtube from "../imgs/icon-youtube.svg"
import twitter from "../imgs/icon-twitter.svg"
import pinterest from "../imgs/icon-pinterest.svg"
import instagram from "../imgs/icon-instagram.svg"
import resort1 from '../imgs/resort1.jpg';
import { getTeam } from "../api"


export function loader()
{
    let loadedTeam = getTeam()
    return defer({team: loadedTeam})
}

export default function OurTeam()
{
    const loaderData = useLoaderData()

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
    function renderTeamelements(team)
    {
        const TeamElements = team.map((member)=> (
            <div key={member.id} className='relative flex items-center justify-center group'>
                <img
                    className='rounded-xl w-96 h-96 transition-transform transform group-hover:scale-105'
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                />
                <div className='absolute flex flex-col items-center bg-white rounded-t-xl p-5 -bottom-16 left-2 right-2'>
                    <h1 className='font-bold text-xl'>{member.name}</h1>
                    <h4 className='font-bold text-sm text-brightRed uppercase'>{member.role}</h4>
                </div>
                <div className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className="flex flex-col items-end space-y-2">
                    <Link to="/" className="hover:bg-brightRed rounded-full p-3">
                        <img src={facebook} className="h-8 rounded-full" alt="Facebook" />
                    </Link>
                    <Link to="/" className="hover:bg-brightRed rounded-full p-3">
                        <img src={youtube} className="h-8 rounded-full" alt="YouTube" />
                    </Link>
                    <Link to="/" className="hover:bg-brightRed rounded-full p-3">
                        <img src={twitter} className="h-8 rounded-full" alt="Twitter" />
                    </Link>
                    <Link to="/" className="hover:bg-brightRed rounded-full p-3">
                        <img src={pinterest} className="h-8 rounded-full" alt="Pinterest" />
                    </Link>
                    <Link to="/" className="hover:bg-brightRed rounded-full p-3">
                        <img src={instagram} className="h-8 rounded-full" alt="Instagram" />
                    </Link>
                </div>
                </div>
            </div>
        )) 
        return(
            <>
            {/* Team section */}
            <section className='flex flex-col space-y-9 items-center mt-10 mb-10'>
                <div className='flex flex-col items-center justify-center space-y-3 lg:ml-48 lg:mr-48 xsm:ml-7 xsm:mr-7'>
                    <div className='text-brightRed'>Professional people</div>
                    <div className='font-bold text-3xl'>Meet the Team</div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-28'>
                    {TeamElements}
                </div>
            </section>
            {/* book us now section */}
            <section className=' flex h-72 bg-brightRed mt-20'>
                <div className="container flex text-white flex-col justify-between lg:flex-row items-center px-6 mx-auto mb-8 space-y-0 xsm:space-y-3 ">
                    
                    <div className="">
                        <p>Plan your trip with us</p>
                        <p className='text-4xl font-bold'>Ready for an unforgatable tour?</p>
                    </div>

                    
                    <div className="flex justify-center md:justify-start">
                        <a href="booking" 
                        className="p-3 px-6 pt-2 text-white bg-veryDarkBlue rounded-xl baseline hover:bg-slate-800 " >
                        BOOK TOUR NOW</a>
                    </div>
                    
                    
                </div>
            </section>  
            </>
        )
    }
    return (
        <>
            {/* Location section */}
            <div style={parentDivStyle} className="relative">
                <div className="text-white text-center mx-auto p-8">
                    <h1 className="text-4xl font-bold mb-4 ">Our Team</h1>
                </div>
                <div className="hidden sm:block absolute right-20 bottom-0 p-4 text-black bg-white rounded-t-lg font-bold">
                    Home / <span className='text-brightRed'>Our Team</span>
                </div>
            </div>            
            <Suspense fallback={<h2>Loading team...</h2>}>
                <Await resolve={loaderData.team}>
                    {renderTeamelements}
                </Await>
            </Suspense>             
        </>
    )
}