import { Link } from "react-router-dom"
import elephant from '../imgs/elephant.webp';
export default function NotFound()
{
    const parentDivStyle = {
        backgroundImage: `url(${elephant})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', 
    };
    return (
        <>
            {/* Location section */}
            <div style={parentDivStyle} className="flex flex-col justify-center items-center">
                <div className="text-white text-center mx-auto p-8">
                    <h1 className="text-7xl font-bold mb-4 ">404</h1>
                    <h1 className="text-4xl font-bold mb-4 ">PAGE NOT FOUND</h1>
                    <p className="text-xl">The page requested could not be found. This could be a spelling error in the URL or a removed page</p>
                </div>
                <Link to='/'
                        className="md:p-6 xsm:p-3 xsm:px-5 md:px-9 font-bold text-white bg-brightRed rounded-xl baseline hover:shadow-2xl"
                    >
                        BACK TO HOMEPAGE
                </Link>
                
            </div>
        </>
    )
}