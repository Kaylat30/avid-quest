import { useState } from 'react';
import resort1 from '../imgs/resort1.jpg';
export default function Discover()
{
   // const content = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus odit, provident recusandae ut aspernatur fugiat sint minima tenetur voluptatem natus repudiandae quibusdam! Pariatur, obcaecati repellat.'
    // Split the content into words
   //const words = content.split(' ');

    // Extract the first 30 words
    //const excerpt = words.slice(0, 20).join(' ');
    const blogs =[
        {
        author: 'Kayondo Abdulatif',
        date: '19/09/2023',
        title:"First Blog Post",
        image:resort1,
        excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam libero eget tortor posuere...",
        link:"/sample-blog-post"
        },
        {
        author: 'Kayondo Abdulatif',
        date: '19/09/2023',
        title:"First Blog Post",
        image:resort1,
        excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam libero eget tortor posuere...",
        link:"/sample-blog-post"
        },
        {
        author: 'Kayondo Abdulatif',
        date: '19/09/2023',
        title:"First Blog Post",
        image:resort1,
        excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam libero eget tortor posuere...",
        link:"/sample-blog-post"
        },
        {
        author: 'Kayondo Abdulatif',
        date: '19/09/2023',
        title:"First Blog Post",
        image:resort1,
        excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam libero eget tortor posuere...",
        link:"/sample-blog-post"
        },
        {
        author: 'Kayondo Abdulatif',
        date: '19/09/2023',
        title:"First Blog Post",
        image:resort1,
        excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam libero eget tortor posuere...",
        link:"/sample-blog-post"
        },
        {
        author: 'Kayondo Abdulatif',
        date: '19/09/2023',
        title:"First Blog Post",
        image:resort1,
        excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam libero eget tortor posuere...",
        link:"/sample-blog-post"
        },
        
    ]
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

    // Define the number of posts to display per page
    const postsPerPage = 3; // You can adjust this number

    // Calculate the total number of pages
    const totalPages = Math.ceil(blogs.length / postsPerPage);

    // Initialize the current page state
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the start and end indexes of the current page's posts
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    // Get the current page's posts
    const currentPosts = blogs.slice(startIndex, endIndex);
    // Function to handle page navigation
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
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
            {/* tags section */}
            <div className='flex justify-center space-x-1 md:space-x-3 h-14 mt-3'>
                <button className='flex items-center bg-pink-100 rounded-lg text-xs md:text-sm font-bold hover:bg-brightRed hover:text-white md:p-2 p-1 md:px-6 my-2'>
                    ADVENTURE
                </button>
                <button className='flex items-center bg-pink-100 rounded-lg text-xs md:text-sm font-bold hover:bg-brightRed hover:text-white md:p-2 p-1 md:px-6 my-2'>
                    BEACH
                </button>
                <button className='flex items-center bg-pink-100 rounded-lg text-xs md:text-sm font-bold hover:bg-brightRed hover:text-white md:p-2 p-1 md:px-6 my-2'>
                    LIFESTYLE
                </button>
                <button className='flex items-center bg-pink-100 rounded-lg text-xs md:text-sm font-bold hover:bg-brightRed hover:text-white md:p-2 p-1 md:px-6 my-2'>
                    PARKS
                </button>
                <button className='flex items-center bg-pink-100 rounded-lg text-xs md:text-sm font-bold hover:bg-brightRed hover:text-white md:p-2 p-1 md:px-6 my-2'>
                    TOURISMS
                </button>
            </div>

            {/* articles section */}
            <section className='m-10 space-y-3 flex flex-wrap justify-center'>
                {currentPosts.map((post, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-96 h-96 relative mx-2 mb-4">
                    <img src={post.image} alt={post.title} className="w-96 h-52 object-cover object-center" />
                    <div className="p-4 absolute bottom-1 left-0 right-0 rounded-t-2xl bg-white">
                        <div className='flex justify-between'>
                        <div>
                            <h2>{post.author}</h2>
                        </div>
                        <div>
                            <h2>{post.date}</h2>
                        </div>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
                        <p className="text-gray-600 mt-2">{post.excerpt}...</p>
                        <a href={post.link} className="text-blue-600 hover:underline mt-2 inline-block">
                        Read More
                        </a>
                    </div>
                    </div>
                ))}
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