import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
export default function Blog(props)
{
    const content = props.description
    // Split the content into words
    const words = content.split(' ');

    // Extract the first 30 words
    const excerpt = words.slice(0, 20).join(' ');
    return(
        <>
            <div key={props.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-96 h-96 relative mx-2 mb-4">
                <img src={props.image} alt={props.title} className="w-96 h-52 object-cover object-center" />
                <div className="p-4 absolute bottom-1 left-0 right-0 rounded-t-2xl bg-white">
                    <div className='flex justify-between'>
                    <div>
                        <h2>{props.author}</h2>
                    </div>
                    <div>
                        <h2>{props.date}</h2>
                    </div>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">{props.title}</h2>
                    <p className="text-gray-600 mt-2">{excerpt}...</p>
                    <Link to={props.id}  state={{search: `?${props.searchParams.toString()}`,type: props.typeFilter}} className="text-blue-600 hover:underline mt-2 inline-block">
                    Read More
                    </Link>
                </div>
            </div>
        </>
    )
}