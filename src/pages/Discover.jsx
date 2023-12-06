import { Await, defer, useLoaderData, useSearchParams } from 'react-router-dom';
import { Suspense, useState } from 'react';
import resort1 from '../imgs/resort1.jpg';
import { getDiscovers } from '../api';
import Blog from './Blog';

export function loader()
{
    let loadedBlogs = getDiscovers()
    return defer({blogs: loadedBlogs})
}
export default function Discover()
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

    // Initialize the current page state
    const [currentPage, setCurrentPage] = useState(1);

    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("tag")
    
    function handleFilterChange(key, value){
        setSearchParams(prevParams =>{
            if(value == null)
            {
                prevParams.delete(key)
            }
            else{
                prevParams.set(key,value)
            }
            return prevParams
        })
    }

    function renderBlogElements(blogs)
    {
        const displayBlogs = typeFilter 
            ? blogs.filter(blog => blog.tag === typeFilter)
            : blogs
        // Define the number of posts to display per page
        const postsPerPage = 3; // You can adjust this number

        // Calculate the start and end indexes of the current page's posts
        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;

        // Get the current page's posts
        const currentblogs = displayBlogs.slice(startIndex, endIndex);
        
        // Calculate the total number of pages
        const totalPages = Math.ceil(displayBlogs.length / postsPerPage);

        // Function to handle page navigation
        const handlePageChange = (pageNumber) => {
            setCurrentPage(pageNumber);
        };

        const blogElements = currentblogs.map((blog) => (
            <Blog key={blog.id} description={blog.description} image={blog.image} title={blog.title} author={blog.author} date={blog.date} id={blog.id} searchParams={searchParams} typeFilter={typeFilter}/>
        ))
        return(
            <>
                {/* tags section */}
                <div className='flex justify-center space-x-1 md:space-x-3 h-14 mt-3'>
                    <button className='flex items-center bg-pink-100 rounded-lg text-xs md:text-sm font-bold hover:bg-brightRed hover:text-white md:p-2 p-1 md:px-6 my-2'
                    onClick={()=> handleFilterChange("tag", "adventure")}>
                        ADVENTURE
                    </button>
                    <button className='flex items-center bg-pink-100 rounded-lg text-xs md:text-sm font-bold hover:bg-brightRed hover:text-white md:p-2 p-1 md:px-6 my-2'
                    onClick={()=> handleFilterChange("tag", "beach")}>
                        BEACH
                    </button>
                    <button className='flex items-center bg-pink-100 rounded-lg text-xs md:text-sm font-bold hover:bg-brightRed hover:text-white md:p-2 p-1 md:px-6 my-2'
                    onClick={()=> handleFilterChange("tag", "lifestyle")}>
                        LIFESTYLE
                    </button>
                    <button className='flex items-center bg-pink-100 rounded-lg text-xs md:text-sm font-bold hover:bg-brightRed hover:text-white md:p-2 p-1 md:px-6 my-2'
                    onClick={()=> handleFilterChange("tag", "parks")}>
                        PARKS
                    </button>
                    <button className='flex items-center bg-pink-100 rounded-lg text-xs md:text-sm font-bold hover:bg-brightRed hover:text-white md:p-2 p-1 md:px-6 my-2'
                    onClick={()=> handleFilterChange("tag", "tourism")}>
                        TOURISMS
                    </button>
                    {typeFilter ?(
                    <button 
                    className='flex items-center bg-pink-100 rounded-lg text-xs md:text-sm font-bold hover:bg-brightRed hover:text-white md:p-2 p-1 md:px-6 my-2'
                    onClick={()=> handleFilterChange("tag", null)}
                    >Clear</button> )
                    : null}
                </div>

                {/* articles section */}
                <section className='m-5 space-y-3 flex flex-wrap justify-center'>
                    {blogElements}
                </section> 

                {/* Page numbers */}
                <div className="flex justify-center mt-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 mx-2 text-blue-600 hover:underline focus:outline-none ${
                        currentPage === index + 1
                            ? 'bg-blue-600 text-yellow-50 rounded-full'
                            : 'bg-white text-blue-600 border border-blue-600 rounded-full'
                        }`}
                    >
                        {index + 1}
                    </button>
                    ))}
                </div>
            </>
            
        )
    }
        
    return (
        <>
            {/* Location section */}
            <div style={parentDivStyle} className="relative">
                <div className="text-white text-center mx-auto p-8">
                    <h1 className="text-4xl font-bold mb-4 etx">Discovery Nature</h1>
                </div>
                <div className="hidden sm:block absolute right-20 bottom-0 p-4 text-black bg-white rounded-t-lg font-bold">
                    Home / <span className='text-brightRed'>Discovery Nature</span>
                </div>
            </div>
            
            <Suspense fallback={<h1>loading Blogs...</h1>}>
                <Await resolve={loaderData.blogs}>
                    {renderBlogElements}
                </Await>
            </Suspense>           
          
        </>
    )
}