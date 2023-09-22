import { Form} from 'react-router-dom';
import resort1 from '../imgs/resort1.jpg';
export default function Booking()
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
                    <h1 className="text-4xl font-bold mb-4 etx">Booking</h1>
                </div>
                <div className="hidden sm:block absolute right-20 bottom-0 p-4 text-black bg-white rounded-t-lg font-bold">
                    Home / <span className='text-brightRed'>Booking</span>
                </div>
            </div>
            {/* contact us section */}
            <section className='space-y-9 items-center mt-10 mb-10'>
                <div className='flex flex-col items-center justify-center space-y-3 lg:ml-48 lg:mr-48 xsm:ml-7 xsm:mr-7'>
                    <div className='font-bold text-3xl'>Safari Booking Request</div>
                    <div>Panning for a Safari tour? Viva Quest has got you covered. Sumbit your details belwo to book a tour and we will reach out to you for more!!</div>
                        
                </div>                
               
               {/* form section */}
                <div className='space-y-3 lg:ml-28 lg:mr-28 xsm:ml-7 xsm:mr-7 bg-pink-100 rounded-lg'>
                    <Form className='flex flex-col items-center space-y-7 '>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label>First Name <span className='text-red-600 text-xl'>*</span></label>
                                <input type='text' className='border border-solid md:w-96 md:p-4 xsm:p-2 xsm:w-72 rounded-lg' required/>
                            </div>
                            <div>
                                <label>Last Name <span className='text-red-600 text-xl'>*</span></label>
                                <input type='text' className='border border-solid md:w-96 md:p-4 xsm:p-2 xsm:w-72 rounded-lg' required/>
                            </div>
                            <div>
                                <label>Email <span className='text-red-600 text-xl'>*</span></label>
                                <input type='email' className='border border-solid md:w-96 md:p-4 xsm:p-2 xsm:w-72 rounded-lg' required/>
                            </div>
                            <div>
                                <label>Phone <span className='text-red-600 text-xl'>*</span></label>
                                <input type='date' className='border border-solid md:w-96 md:p-4 xsm:p-2 xsm:w-72 rounded-lg' required/>
                            </div>
                            <div>
                                <label>Start Date <span className='text-red-600 text-xl'>*</span></label>
                                <input type='date' className='border border-solid md:w-96 md:p-4 xsm:p-2 xsm:w-72 rounded-lg' required/>
                            </div>
                            <div>
                                <label>End Date <span className='text-red-600 text-xl'>*</span></label>
                                <input type='tel' className='border border-solid md:w-96 md:p-4 xsm:p-2 xsm:w-72 rounded-lg' required/>
                            </div>
                            <div>
                                <label>Total number of visitors<span className='text-red-600 text-xl'>*</span></label>
                                <input type='number' min={1} className='border border-solid md:w-96 md:p-4 xsm:p-2 xsm:w-72 rounded-lg' required/>
                            </div>
                        </div>
                        <div>
                            <label>Additional Notes</label>
                            <textarea rows={4} cols={50} className='border border-solid w-full md:w-96 md:p-4 xsm:p-2 xsm:w-72 rounded-lg'></textarea>
                        </div>
                        <button
                            type='submit'
                            className="md:p-6 xsm:p-3 xsm:px-5 md:px-9 font-bold text-white bg-brightRed rounded-xl baseline hover:shadow-2xl"
                        >
                            Submit
                        </button>
                    </Form>
                </div>


 
            </section>
        </>
      )
}