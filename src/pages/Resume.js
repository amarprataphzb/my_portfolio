import React from "react";

const Resume = () => {
  return (
    <div className="max-h-max bg-black mt-8 mr-24 rounded-lg">
      <div className="p-20">
        <div className="flex flex-col md:flex-row">
          <h2 className="text-white text-3xl font-bold">Resume</h2>
          <span className="my-auto bg-rose-500 w-48 ml-6 align-middle justify-center rounded-lg h-1"></span>
        </div>

        <div className=" mt-10">
          <div className="w-1/2  mx-4 rounded-lg">
            <h2 className="text-white text-2xl font-bold mb-5">
              Knowledge / Working Skills
            </h2>
            <div>
              <div className="mb-1 text-base font-medium text-gray-700 dark:text-gray-500">
                React
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-red-600 h-2.5 w-4/5  rounded-full dark:bg-red-500"></div>
              </div>

              <div className="mb-1 text-base font-medium text-gray-700 dark:text-gray-500">
                JavaScript
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-green-600 h-2.5  rounded-full w-10/12 dark:bg-green-500"></div>
              </div>

              <div className="mb-1 text-base font-medium text-gray-700 dark:text-gray-500">
                TypeScript
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-yellow-400 h-2.5 rounded-full w-8/12"></div>
              </div>

              <div className="mb-1 text-base font-medium text-gray-700 dark:text-gray-500">
                Material UI
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-indigo-600 h-2.5 rounded-full w-9/12 dark:bg-indigo-500"></div>
              </div>
              <div className="mb-1 text-base font-medium text-gray-700 dark:text-gray-500">
                Bootstrap
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-purple-600 h-2.5 rounded-full w-9/12 dark:bg-purple-500"></div>
              </div>
            </div>
            <div class="mt-4 text-base font-medium text-gray-700 dark:text-gray-500">
              CSS
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div class="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300 w-11/12"></div>
            </div>
            <div className="mb-1 text-base font-medium text-gray-700 dark:text-gray-500">
              HTML
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div className="bg-red-600 h-2.5 w-100  rounded-full w-11/12 dark:bg-red-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
