import { Form, Link } from "react-router-dom"
export default function Signup()
{
    return (
        <>
            {/* form section */}
            <div className='flex items-center flex-col my-10 space-y-3 lg:ml-28 lg:mr-28 xsm:ml-7 xsm:mr-7'>
                <h1 className="font-bold text-xl">Sign Up</h1>
                <Form className='flex flex-col items-center space-y-7 shadow-md p-10'>
                    <input type='text' placeholder='Username or email' className='border md:w-96 md:p-4  xsm:p-2 xsm:w-72 rounded-lg' />
                    <input type='password' placeholder='Password' className='border md:w-96  md:p-4  xsm:p-2 xsm:w-72 rounded-lg' />
                    <button
                        type='submit'
                        className="md:p-4 xsm:p-2 xsm:px-4 md:px-9 font-bold text-white bg-brightRed rounded-md baseline hover:shadow-2xl"
                    >
                        SIGN UP
                    </button>

                </Form>
                <div>Do not have an account? <Link className="text-brightRed" to='login'>Sign in</Link></div>

                </div>
        </>
    )
}