
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_whqovnp', 'template_zzk9o4f', form.current, {
        publicKey: '6kczknkn3uaqNoc1m',
      })
      .then(
        () => {
          console.log('message send successfull!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='max-h-max bg-black mt-8 mr-24 rounded-lg'>
      <div className="flex p-20 flex-col md:flex-row">
          <h2 className="text-white text-3xl font-bold">Contact US</h2>
          <span className="my-auto bg-rose-500 w-48 ml-6 align-middle justify-center rounded-lg h-1"></span>
        </div>
      
      <form ref={form} onSubmit={sendEmail}  class="max-w-lg pb-20  mx-auto">

        <h2 className='text-white text-2xl pb-5'>I am always open to discuss product design and developement OR Partnership</h2>
        
          <div class="mb-5">
            <label
              for="base-input"
              className="block mb-2 text-sm font-bold font-['Poppins'] text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="base-input"
              name="user_name"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>

          <div class="mb-5">
            <label
              for="base-input"
              className="block mb-2 text-sm font-bold text-white font-['Poppins']"
            >
              Email
            </label>
            <input
              type="text"
              id="base-input"
              name="user_email"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div class="mb-5">
            <label
              for="base-input"
              className="block mb-2 text-sm  text-white font-bold font-['Poppins']"
            >
              Address
            </label>
            <input
              type="text"
              name="user_address"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div class="mb-5">
            <label
              for="base-input"
              className="block mb-2 text-sm font-bold text-white font-['Poppins']"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Leave a comment..."
            ></textarea>
          </div>

          <button
            type="submit"
          
            className="text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
    </div>
  )
}

export default Contact