import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className="text-center max-w-[600px] mx-auto">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
        Contact us 📞
        </div>
        <p className="text-sm leading-7 text-gray">
        There are a ways you can get in touch with me. Hope to hear from you soon:)
        </p>
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5"
        >
          <form
            action="https://getform.io/f/d054a5ba-4cdf-4004-8f3a-823e5abd1095"
            method="POST"
          >
            <div className=" gap-4 w-full">
              <div className="flex flex-col my-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-full w-60  rounded-lg"
                />
              </div>
              <div className="flex flex-col my-2">
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your mobile number"
                  className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-full w-60  rounded-lg"
                />
              </div>

              <div className="flex flex-col my-2">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-full w-60 rounded-lg"
                />
              </div>

              <div className="flex flex-col my-2">
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Enter your Full Name"
                  className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-full w-60 rounded-lg" 
                ></textarea>
              </div>
            </div>
            <div className=" flex items-center justify-center">
              <button className="text-sm text-white bg-Teal sm:p-3 p-2 rounded-lg shadow-md font-bold">
                send message
              </button>
            </div>
          </form>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
