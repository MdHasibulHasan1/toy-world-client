import React, { useState } from "react";

function TabCom() {
  const [activeTab, setActiveTab] = useState(0);

  // Example data for tabs
  const tabs = [
    {
      title: "Tab 1",
      content: <p>Content for Tab 1</p>,
    },
    {
      title: "Tab 2",
      content: <p>Content for Tab 2</p>,
    },
    {
      title: "Tab 3",
      content: <p>Content for Tab 3</p>,
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="md:w-6/12 mt-6 ml-auto">
      <div className="flex flex-col lg:flex-row">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer p-4  text-center ${
              activeTab === index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
}

export default TabCom;
