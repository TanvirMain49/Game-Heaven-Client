import React from "react";
import Swal from "sweetalert2";
import newsLetter from '../assets/NewsLetter.jpg'

const NewsLetter = () => {
  return (
    <div className="hero bg-fixed bg-white dark:bg-black mt-16 text-white" >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.pinimg.com/736x/41/f5/af/41f5af237569ea6a4172a1a1c434be20.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="w-10/12 mx-auto md:mt-20 py-10 text-center">
          <h2 className="md:text-3xl text-2xl font-bold text-gray-800 dark:text-white" >
            Stay Updated with Our Latest News!
          </h2>
          <p className="mt-2 md:text-lg text-base text-gray-600 dark:text-white">
            Join our newsletter to receive the latest updates, exclusive offers,
            and insightful content directly to your inbox. Stay in the loop!
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              Swal.fire({
                title: "Thank you for subscribing to our newsletter",
                icon: "success",
                confirmButtonText: "Okay",
                customClass: {
                  confirmButton:
                    "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded",
                },
                buttonsStyling: false,
              });
              e.target.reset();
            }}
            className="mt-6 flex justify-center items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-64 border text-black border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button
              type="submit"
              className="bg-red-500 text-white p-3 rounded-r-md hover:bg-red-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
