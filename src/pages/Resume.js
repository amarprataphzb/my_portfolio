


import React from "react";

const Resume = () => {
  // Define education data
  const educationData = [
    {
      institution: "Rajiv Gandhi Prodyogiki viswavidyalay Bhopal",
      degree: "Master of Computer Application",
      year: "2018 - 2020",
    },
    {
      institution: "Makhanlal Chaturvedi National University of Journalism and Communication, Bhopal",
      degree: "Bachelor of Computer Application",
      year: "2015 - 2018",
    },
  ];

  // Define experience data
  const experienceData = [
    {
      company: "Restory HealthyTech Private Limited, Hyderabad",
      position: "Software Developer",
      duration: "july,2022 - Present",
      description: "Responsible for developing web applications using React.",
    },
    {
      company: "Sigroo technology private limited",
      position: "Intern",
      duration: "oct,2021-dec,2021",
      description: "Assisted in front-end development tasks using React and CSS.",
    },
  ];

  return (
    <div className="max-h-max bg-black mt-8 mr-24 rounded-lg">
      <div className="p-20">
        {/* Resume Header */}
        <div className="flex flex-col md:flex-row">
          {/* Title */}
          <h2 className="text-white text-3xl font-bold">Resume</h2>
          {/* Divider */}
          <span className="my-auto bg-rose-500 w-48 ml-6 align-middle justify-center rounded-lg h-1"></span>
        </div>

        {/* Education and Experience Sections */}
        <div className="mt-10 flex">
          {/* Education Section */}
          <div className="w-1/2 mx-4 rounded-lg pr-8">
            {/* Section Title */}
            <h2 className="text-white text-2xl font-bold mb-5">Education</h2>
            {/* Education Entries */}
            {educationData.map((education, index) => (
              <div key={index} className="mb-5">
                {/* Degree */}
                <div className="text-base font-medium text-gray-700 dark:text-gray-500">
                  {education.degree}
                </div>
                {/* Institution and Year */}
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {education.institution} ({education.year})
                </div>
              </div>
            ))}
          </div>

          {/* Vertical Line */}
          <div className="h-auto bg-white mx-4 my-4 md:my-0" style={{width: '1px'}}></div>

          {/* Experience Section */}
          <div className="w-1/2 mx-4 rounded-lg pl-8">
            {/* Section Title */}
            <h2 className="text-white text-2xl font-bold mb-5">Experience</h2>
            {/* Experience Entries */}
            {experienceData.map((experience, index) => (
              <div key={index} className="mb-5">
                {/* Company and Position */}
                <div className="text-base font-medium text-gray-700 dark:text-gray-500">
                  {experience.position}, {experience.company}
                </div>
                {/* Duration */}
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {experience.duration}
                </div>
                {/* Description */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
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

