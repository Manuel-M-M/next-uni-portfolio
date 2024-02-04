import React from 'react'

const ContactForm = () => {
  return (
    <form action="">
      <h2 className='text-2xl font-bold mb-5 text-white'>Contact Me</h2>
      <div className='mb-3'>
        <input 
          type="text" 
          placeholder='Name'
          name='name' 
          className='w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'/>
      </div>
      <div className='mb-3'>
        <input 
          type="email" 
          placeholder='Email'
          name='name' 
          className='w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'/>
      </div>
      <div className='mb-3'>
        <input 
          type="text" 
          placeholder='Message'
          name='message' 
          className='w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'/>
      </div>
      <button 
        type='submit'
        className='px-6 mb-5 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400'
      >
        Send
      </button>
    </form>
  )
}

export default ContactForm