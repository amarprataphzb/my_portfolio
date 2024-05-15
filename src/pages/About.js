import React from "react";
import { SiMaterialdesignicons } from "react-icons/si";
import { MdOutlineDeveloperBoard } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

const About = () => {
  return (
    <div className="max-h-max  bg-black mt-8 mr-24 rounded-lg">
      <div className="p-20">
        <div className="flex flex-col md:flex-row">
          <h2 className="text-white text-3xl font-bold">About Me</h2>
          <span className="my-auto bg-rose-500 w-48 ml-6 align-middle justify-center rounded-lg h-1"></span>
        </div>

        <div>
          <p className="text-white mt-6">
            2-year experienced web developer creating dynamic and responsive web
            applications. Proficient in HTML, CSS,
             JavaScript, React.js, and
            React Native for mobile app development. Skilled in using JavaScript
            to ensure high-quality, maintainable code. Strong knowledge of REST
            APIs and adept at debugging code. Committed to creating
            user-friendly and visually appealing websites with a focus on
            performance with functionality.
          </p>
          <p className="text-white mt-6">
            My aim is to bring across your message and identity in the most
            creative way.
          </p>
        </div>

        <div>
          <h2 className="text-white mt-10 text-2xl font-bold">What I do!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="flex flex-col border-2 rounded p-6 border-gray-500">
              <div className="text-violet-500 text-4xl mt-1">
                <SiMaterialdesignicons />
              </div>
              <div className="text-white ml-4">
                <h6>UI/UX design</h6>
                <p className="text-md mt-2">
                  Having great skill in design and easily I can design a
                  complete website with perfect responsiveness.
                </p>
              </div>
            </div>
            <div className="flex flex-col border-2 rounded p-4 border-gray-500">
              <div className="text-yellow-500 text-5xl mt-1">
                <MdOutlineDeveloperBoard />
              </div>
              <div className="text-white ml-4">
                <h6>App Development</h6>
                <p className="text-md mt-2">
                  Having great skill in design and easily I can design a
                  complete website with perfect responsiveness.
                </p>
              </div>
            </div>
            <div className="flex flex-col border-2 rounded p-6 border-gray-500">
              <div className="text-red-500 text-4xl mt-1">
                <FaCameraRetro />
              </div>
              <div className="text-white ml-4">
                <h6>Photography</h6>
                <p className="text-md mt-2">
                  Having great skill in design and easily I can design a
                  complete website with perfect responsiveness.
                </p>
              </div>
            </div>
            <div className="flex flex-col border-2 rounded p-4 border-gray-500">
              <div className="text-blue-500 text-5xl mt-1">
                <VscVscode />
              </div>
              <div className="text-white ml-4">
                <h6>Web Development</h6>
                <p className="text-md mt-2">
                  Having great skill in design and easily I can design a
                  complete website with perfect responsiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
