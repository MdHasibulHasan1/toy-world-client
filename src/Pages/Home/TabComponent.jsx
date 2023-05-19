import React, { useState } from "react";

function TabComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-item ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
}

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

export default TabComponent;
