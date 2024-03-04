import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsSnapchat,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  const SOCIAL =[
    {
        id :1,
        link: "https://www.instagram.com/mtzic_education?igsh=Mm15ajFxNnlpbDBk",
        icon : <BsInstagram />,
    },
    {
        id :2,
        link: "https://www.facebook.com",
        icon : <BsFacebook />,
    },
    {
        id :3,
        link: "https://sharechat.com/profile/mtziceducation?d=n",
        icon : <BsSnapchat />,
    },
    
];
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Teal p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="font-bold mb-6">Get Started</div>
          <p className="text-sm leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo neque
            saepe cumque. Veritatis sunt commodi
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <a href=" " target="#" className="text-sm hover:underline">
              Web Design
            </a>
            <a href=" " target="#" className="text-sm hover:underline">
              Web Development
            </a>
            <a href=" " target="#" className="text-sm hover:underline">
              {" "}
              Science
            </a>
            <a href=" " target="#" className="text-sm hover:underline">
              Digital Marketing
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
            <a href=" " target="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href=" " target="#" className="text-sm hover:underline">
              Sitemap
            </a>
            <a href=" " target="#" className="text-sm hover:underline">
              Careers
            </a>
            <a href=" " target="#" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Follow us</div>
          <div className="text-sm mb-4">mtziceducation6@gmail.com</div>
          <div className="text-sm">+91 6367584643</div>
          <div className="flex gap-4 mt-4">
            {SOCIAL.map(({id, link, icon})=>(
                    <a href={link} target="_blank" rel='noopener noreferrer'
                    className=' duration-200 ease-out hover:scale-110 text-xl'>
                        {icon}</a>
                ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
