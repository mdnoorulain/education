import React from "react";
import { techdetails } from "../../Data";
import { Link } from 'react-router-dom'
const userProfile = techdetails;



function founder() {
  return (
    <div className="font-Poppins bg-Solitude">
      <div className="profile-bg-image w-full h-44 sm:h-64 md:h-80"></div>
      <div className="profile-description flex flex-col justify-start items-start md:justify-center md:items-center gap-5 sm:gap-8 md:gap-10 px-2 sm:px-4 md:px-14">
        <div className="photo-intro gap-3 flex">
          <div className="profile-photo border-2 -my-3 sm:-my-5 md:-my-12 border-gray-500 rounded-full w-16 h-16 sm:w-24 sm:h-24 md:w-44 md:h-44"></div>
          <div className="profile-name py-2 mx-0 sm:mx-1 md:mx-2 flex flex-col gap-3 justify-start items-between">
            <span className="name flex gap-2 justify-center items-center w-fit font-bold text-xl sm:text-2xl md:text-3xl">
              {userProfile.name}
              <i className="fa-regular fa-gem flex justify-center items-center p-1 text-xs sm:text-sm bg-purple-900 text-white w-5 h-5 rounded-full"></i>
              <i className="fa-solid fa-check flex justify-center items-center p-1 text-xs sm:text-sm bg-green-400 text-black font-bold w-5 h-5 rounded-full"></i>
            </span>
            <div className="follow-details flex gap-4 font-bold text-base sm:text-md md:text-lg">
              <div className="followers-details flex flex-col">
                <span className="followers rounded-lg text-center px-2 sm:px-4 sm:py-1 border-2 text-gray-400 border-gray-400 hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
                  {userProfile.followers}
                </span>
                <span className="followers-text text-center text-gray-400 text-sm sm:text-base font-medium">
                  Followers
                </span>
              </div>
              <div className="following-details flex flex-col">
                <span className="following rounded-lg text-center px-2 sm:px-4 sm:py-1 border-2 text-gray-400 border-gray-400 hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
                  {userProfile.following}
                </span>
                <span className="following-text text-center text-gray-400 text-sm sm:text-base font-medium">
                  Following
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="photo-details flex flex-col gap-2 w-fit">
          <h3 className="profession text-md md:text-lg">
            {userProfile.profession}
          </h3>
          <a
            href={userProfile.instagram}
            className="instagram-link text-blue-500 font-semibold text-sm md:text-lg hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {userProfile.instagram}
          </a>
          <div className="reactions flex flex-col sm:flex-row flex-wrap p-1 gap-8 text-xs font-semibold">
            <span className="flex gap-2">
              <i className="fa-regular fa-star flex justify-center items-center p-1 bg-cyan-600 text-white text-sm w-6 h-6 rounded-full"></i>
              <span className="py-0.5 text-sm font-semibold">
                {userProfile.favorites}
              </span>
            </span>
            <span className="flex gap-2">
              <i className="fa-regular fa-thumbs-up flex justify-center items-center p-1 bg-yellow-600 text-white text-sm w-6 h-6 rounded-full"></i>
              <span className="py-0.5 text-sm font-semibold">
                {userProfile.thumbLikes}
              </span>
            </span>
            <span className="flex gap-2">
              <i className="fa-regular fa-eye flex justify-center items-center p-1 bg-gray-600 text-white text-sm w-6 h-6 rounded-full"></i>
              <span className="py-0.5 text-sm font-semibold">
                {userProfile.views}
              </span>
            </span>
            <span className="flex gap-2">
              <i className="fa-regular fa-heart flex justify-center items-center p-1 bg-red-600 text-white text-sm w-6 h-6 rounded-full"></i>
              <span className="py-0.5 text-sm font-semibold">
                {userProfile.heartLikes}
              </span>
            </span>
          </div>
        </div>

        <Link
          to="/"
          className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold "
        >
          Back
        </Link>
      </div>
    </div>
  );
}

export default founder;
