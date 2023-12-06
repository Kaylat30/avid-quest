import { defer,useLocation,useLoaderData, Await,Link } from 'react-router-dom';
import {getDiscover,getDiscovers} from '../api'
import { Suspense } from 'react';
import resort1 from '../imgs/resort1.jpg'
import { IoFolderOpen, IoPerson } from 'react-icons/io5';


function shuffleArray(array) {
  
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

export async function loader({ params }) {
    const loadedAllBlogs = await getDiscovers();
    const shuffledProducts = shuffleArray(loadedAllBlogs);
    return defer({blog: await getDiscover(params.id),AllBlogs: shuffledProducts }) 
}

export default function DiscoverInfo()
{

    const location = useLocation()
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

    function renderAllBlogElements(id)
    {
        const blogs = loaderData.AllBlogs
        const currentblogs = blogs.filter((blog)=> blog.id !== id).slice(0,4)
        console.log(currentblogs)

        return(
            <>
            {currentblogs.map((blog)=>(
              <Link to={`../discover/${blog.id}`} key={blog.id} className='flex items-center space-x-2'>
              <img className='rounded-md h-16 w-16'  src={blog.image}/>
              <div className='flex flex-col'>
                  <h1 className='font-sm font-bold'>{blog.title}</h1>
                  <h1 className='font-xs text-gray-400'>By {blog.author}</h1>
              </div>
            </Link>  
             ))}
            </>
        )
    }

    function renderBlogElement(blog)
    {
        const search = location.state?.search || "";
        const type = location.state?.type || "all";
        return(
            <>
                {/* Location section */}
                <div style={parentDivStyle} className="relative">
                    <div className="text-white text-center mx-auto p-8 sm:hidden ">
                        <h1 className="flex text-3xl font-bold mb-4 ">Home/ <span className='text-brightRed'>{blog.tag}</span></h1>
                    </div>
                    <div className="hidden sm:block absolute right-20 bottom-0 p-4 text-black bg-white rounded-t-lg font-bold">
                        Home / <span className='text-brightRed'>{blog.tag}</span>
                    </div>
                </div>
                    {/* overview section */}
                <section className='flex flex-col md:flex-row my-10 md:mx-28 xsm:mx-5 space-x-3'>
                    
                        {/* left section */}
                        <div className='space-y-5'>
                            <Link
                                to={`..${search}`}
                                relative="path"
                                className="back-button"
                                >&larr; <span>Back to {type} blogs</span>
                            </Link>
                            <div>
                                <img src={blog.image}/>
                                <div className='flex space-x-8 mt-3'>
                                    <div className='flex items-center space-x-1'><IoPerson className='text-brightRed'/> <h1>{blog.author}</h1></div>
                                    <div className='flex items-center space-x-1'><IoFolderOpen className='text-brightRed'/><h1>{blog.tag}, Nature</h1></div>
                                </div>
                            </div>
                            <div className='space-y-3'>
                                <h1 className='font-bold text-2xl'>{blog.title}</h1>
                                <p>{blog.description}</p>                  
                            </div>                        
                            
                        </div>                    
                        {/* right section */}
                        <div className='space-y-5 mt-4'>
                            <div className='md:w-72 flex flex-col border rounded-lg space-y-3 py-5'>
                                <div className=' pl-6 text-2xl font-bold '>Recent Posts</div>
                                <div className='flex flex-col pl-8 space-y-10  '> 
                                    {renderAllBlogElements(blog.id)}                                   
                                    {/* <div className='flex items-center space-x-2'>
                                        <img className='rounded-md h-16 w-16'  src={resort1}/>
                                        <div className='flex flex-col'>
                                            <h1 className='font-sm font-bold'>THE BACHWEZI</h1>
                                            <h1 className='font-xs text-gray-400'>By Kayondo Abdulatif</h1>
                                        </div>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <img className='rounded-md h-16 w-16'  src={resort1}/>
                                        <div className='flex flex-col'>
                                            <h1 className='font-sm font-bold'>THE BACHWEZI</h1>
                                            <h1 className='font-xs text-gray-400'>By Kayondo Abdulatif</h1>
                                        </div>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <img className='rounded-md h-16 w-16'  src={resort1}/>
                                        <div className='flex flex-col'>
                                            <h1 className='font-sm font-bold'>THE BACHWEZI</h1>
                                            <h1 className='font-xs text-gray-400'>By Kayondo Abdulatif</h1>
                                        </div>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <img className='rounded-md h-16 w-16'  src={resort1}/>
                                        <div className='flex flex-col'>
                                            <h1 className='font-sm font-bold'>THE BACHWEZI</h1>
                                            <h1 className='font-xs text-gray-400'>By Kayondo Abdulatif</h1>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                </section>
            </>
        )
    }
    return (
        <>            
            <Suspense fallback={<h1>loading Blog...</h1>}>
                <Await resolve={loaderData.blog}>
                    {renderBlogElement}
                </Await>
            </Suspense>
        </>
    )
}