import React from 'react'

const Services = () => {
  return (
     <section className='min-h-screen flex items-center justify-center'>
      <div className="max-w-6xl mx-auto w-full px-2 -pt-20 md:pt-20 lg:pt-20 xl:pt-20"> 
        <div className="glass-card rounded-2xl text-white py-2 text-center h-68 mb-8"> 
          <h1 className="text-3xl pt-0">Services</h1>
          <p className="text-lg">You can contact us whenever you need help or just curious about something.</p>
        </div>

        <div className='flex flex-row justify-center items-center gap-4 flex-wrap'>
          <div className="bg-gradient-to-b from-pink-400 to-gray-500 py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
            <h2 className="font-semibold text-2xl mb-6">Start chatting</h2>
            <img className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg" src="https://images.unsplash.com/photo-1611342799915-5dd9f1665d04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="User avatar"/>
            <p className="capitalize text-xl mt-1">essie walton</p>
            <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12"><div className="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>Active</span>
            <button className="rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-xl text-white pt-3 pb-4 px-8 inline">Send a message</button>
          </div>
          <div className="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
            <h2 className="font-semibold text-2xl mb-6">Start chatting</h2>
            <img className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg" src="https://images.unsplash.com/photo-1611342799915-5dd9f1665d04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="User avatar"/>
            <p className="capitalize text-xl mt-1">essie walton</p>
            <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12"><div className="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>Active</span>
            <button className="rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-xl text-white pt-3 pb-4 px-8 inline">Send a message</button>
          </div>
          <div className="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
            <h2 className="font-semibold text-2xl mb-6">Start chatting</h2>
            <img className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg" src="https://images.unsplash.com/photo-1611342799915-5dd9f1665d04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="User avatar"/>
            <p className="capitalize text-xl mt-1">essie walton</p>
            <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12"><div className="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>Active</span>
            <button className="rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-xl text-white pt-3 pb-4 px-8 inline">Send a message</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;