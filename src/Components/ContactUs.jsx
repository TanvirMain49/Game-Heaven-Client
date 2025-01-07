import React from "react";

const ContactUs = () => {
  return (
    <div
      className="text-white px-4 mt-20 bg-fixed"
      id="contact"
      style={{
        backgroundImage: `url('https://wallpapers.com/images/hd/blood-moon-1fennw7hpmgqllm0.jpg')`,
        backgroundPosition: "center"

        
      }}
    >
        <div className="md:w-7/12 mx-auto pb-24 pt-20">
          {/* Title */}
          <h2 className="text-center text-3xl font-bold text-white mb-8">
            Contact Us
          </h2>

          {/* Form with Glassy Effect */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg">
            {/* Input Fields */}
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-transparent text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-transparent text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600 border border-gray-500"
            />
            <input
              type="text"
              placeholder="Your Subject"
              className="col-span-1 md:col-span-2 p-3 rounded-lg bg-transparent text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600 border border-gray-500"
            />
            {/* Textarea */}
            <textarea
              placeholder="Your Message"
              className="col-span-1 md:col-span-2 h-32 p-3 rounded-lg bg-transparent text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-500"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="col-span-1 md:col-span-2 flex items-center justify-center gap-2 px-6 py-3 font-bold rounded-lg bg-red-600 text-white hover:bg-red-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

    </div>
  );
};

export default ContactUs;
