import React from "react";

const Works = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "ToDo App",
      link: "https://github.com/amarprataphzb/Todoapp",
      description:
        "Todo lists are handy tools for organizing tasks, managing time efficiently, and staying on track. They allow users to prioritize work, hold themselves accountable, adapt to changing priorities, and find motivation in seeing progress.",
    },
    {
      id: 2,
      title: "Inshort Clone",
      link: "https://github.com/amarprataphzb/inshort-clone/tree/master",
      description:
        "This is clone of inshort website where people can read about the all news according to the state and country wise.basically It involves distilling the main points of a news story or topic into a concise format, usually a few sentences or bullet points, to provide a quick overview for readers who are short on time or attention. Inshorts, a popular news app, specializes in delivering news summaries in a concise format, allowing users to stay informed without investing a lot of time",
    },
    {
      id: 3,
      title: "My portfolio",
      link: "https://github.com/amarprataphzb/my_portfolio",
      description: "This is my developer portfolio in which i am telling about myself and my skill and many more thing.",
    },
    // Add more items as needed
  ];

  return (
    <div className="max-h-max bg-black mt-8 mr-24 rounded-lg">
      <div className="p-20">
        <div className="flex flex-col md:flex-row">
          <h2 className="text-white text-3xl font-bold">Portfolio</h2>
          <span className="my-auto bg-rose-500 w-48 ml-6 align-middle justify-center rounded-lg h-1"></span>
        </div>

        <div className="text-white mt-6">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-md p-4 mb-4">
              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
