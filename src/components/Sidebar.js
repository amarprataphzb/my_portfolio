import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import pic from '../assests/amarportfoliopic.jpg'

const Sidebar = () => {
  return (
    <div className="ml-16 mt-8 h-dvh ">
      <div className="">
        <img
          className="mx-auto -mb-16 rounded-lg"
          height="150px"
          width="150px"
          src={pic}
          alt=" image load"
        />
      </div>
      <div className="bg-black py-6 rounded-lg">
        <h6 className="font-bold text-lg text-center mt-16 text-white">
          Amar Pratap
        </h6>
        <div className="text-center p-1  mx-16 border-transparent rounded-lg text-white bg-zinc-700">
          Software Developer
        </div>

        <div className="flex justify-around mt-4 mx-8">
          <div className="p-2 rounded-md bg-zinc-700 text-cyan-400">
            <FacebookIcon />
          </div>
          <div className="p-2 rounded-md bg-zinc-700 text-cyan-400">
            <TwitterIcon />
          </div>
          <div className="p-2 rounded-md bg-zinc-700 text-red-600">
            <InstagramIcon />
          </div>
          <div className="p-2 rounded-md bg-zinc-700 text-blue-700">
            <LinkedInIcon />
          </div>
        </div>

        <div className="m-4 p-4 rounded-lg bg-zinc-700">
          <div className="flex">
            <span className="p-2 rounded-md bg-black text-pink-400">
              <PhoneAndroidIcon />
            </span>
            <span className="text-white ml-4">
              <p className="text-xs">Phone No.</p>
              <p className="text-sm">+91 7991177182</p>
            </span>
          </div>
          <hr className="m-2"></hr>
          <div>
          <div className="flex mb-2">
            <span className="p-2 rounded-md bg-black text-cyan-500">
              <EmailIcon/>
            </span>
            <span className="text-white ml-4">
              <p className="text-xs">Email</p>
              <p className="text-sm">amarprataphzb@gmail.com</p>
            </span>
          </div>
          </div>
          <hr className="m-2"></hr>
          <div>
          <div className="flex">
            <span className="p-2 rounded-md bg-black text-pink-600">
              <LocationOnIcon />
            </span>
            <span className="text-white ml-4">
              <p className="text-xs">Location</p>
              <p className="text-sm">Hyderabad,India</p>
            </span>
          </div>
          </div>
          <hr className="m-2"></hr>
          <div>
          <div className="flex">
            <span className="p-2 rounded-md bg-black text-purple-600">
              <  CalendarMonthIcon />
            </span>
            <span className="text-white ml-4">
              <p className="text-xs">Birthday</p>
              <p className="text-sm">Feb 15, 1996</p>
            </span>
          </div>
          </div>
        </div>
        <div className="text-center">
          <button className="text-white py-2 px-8 border-transparent bg-rose-500 rounded-full "> <DownloadOutlinedIcon/> Download CV</button>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
