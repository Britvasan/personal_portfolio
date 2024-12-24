import React from 'react'

const Contact = () => {
  const config = {
    email:"britvasan12@gmail.com",
    phone:"+91 6385517658"
  }
  return (
    <section id="contact" className="flex flex-col bg-primary px-5 py-16 text-white font-text-font">

      <div className="flex flex-col md:flex-row md:justify-between items-center mb-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl border-b-4 border-secondary mb-5 font-semibold inline-block">Contact</h1>
          <p className="pb-5">If you want to know more details, kindly contact me.</p>
          <p className="py-2">
            <span className="font-bold">Email:</span> {config.email}
          </p>
          <p className="py-2">
            <span className="font-bold">Phone:</span> {config.phone}
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <form action="https://getform.io/f/bnllzwnb" method='POST' className="bg-secondary rounded-xl w-full max-w-md px-8 py-6">
          <h1 className="font-bold text-2xl mb-5 text-black text-center">Send Your Message!</h1>
          <div className="flex flex-col mb-4">
            <label className="block text-lg mb-2" htmlFor="name">Name</label>
            <input
              className="shadow appearance-none text-black border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name='name'
              type="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-lg mb-2" htmlFor="email">Email</label>
            <input
              className="shadow appearance-none text-black border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name='email'
              type="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-lg mb-2" htmlFor="msg">Message</label>
            <textarea
              className="shadow appearance-none text-black border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              name='message'
              id="msg"
              placeholder="Enter Your Message!"
            ></textarea>
          </div>
          <button type='submit' className="btn bg-primary text-white py-2 px-4 rounded-lg w-full hover:bg-opacity-90">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
