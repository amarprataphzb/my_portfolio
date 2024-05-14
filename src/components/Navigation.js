import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import DescriptionIcon from "@mui/icons-material/Description";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-end flex-wrap mr-24  ">
      <div className="flex justify-end flex-wrap p-4 rounded-lg bg-black">
        <NavLink to="/">
          <div className="  p-2 rounded-md bg-zinc-700 text-white hover:bg-rose-500">
            <div className="text-center">
              <PermIdentityIcon />
            </div>
            <div>About</div>
          </div>
        </NavLink>
        

        <NavLink to="resume">
          <div className="ml-4 p-2 rounded-md bg-zinc-700 text-white hover:bg-rose-500">
            <div className="text-center">
              <DescriptionIcon />
            </div>
            <div>Resume</div>
          </div>
        </NavLink>

        <NavLink to="works">
          <div className="ml-4 p-2 rounded-md bg-zinc-700 text-white hover:bg-rose-500">
            <div className="text-center">
              <IntegrationInstructionsOutlinedIcon />
            </div>
            <div>Works</div>
          </div>
        </NavLink>

        <NavLink to="contact">
          <div className="ml-4 p-2 rounded-md bg-zinc-700 text-white hover:bg-rose-500">
            <div className="text-center">
              <PermContactCalendarOutlinedIcon />
            </div>
            <div>Contact</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
