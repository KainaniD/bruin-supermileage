import { React } from 'react'

const Contact = () => {
    return (
        <>
            <div className="flex flex-col landing gap-8">
                <h1 className='text-neutral-700 title'>Contact</h1>
                <form className='flex flex-col gap-4 w-1/2'>
                    <div className="flex flex-row gap-4">
                        <div className='flex flex-col w-1/2'>
                            <label className='form-label'>Name</label>
                            <input className='p-2 rounded-lg' type="text" name="user_name" />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <label className='form-label'>Email</label>
                            <input className='p-2 rounded-lg' type="email" name="user_email" />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className='form-label'>Subject</label>
                        <textarea className='p-2 rounded-lg' name="message" />
                    </div>
                    <button type="submit" className='bg-blue-900 p-2 text-xl rounded-md text-white'>Send</button>
                </form>
            </div>
        </>
    );
}

export default Contact