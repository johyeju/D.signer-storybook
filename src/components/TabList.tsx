import React, { useState } from 'react';
import TabAtom from './TabAtom';
import './TabAtom.css';

interface TabItem {
  text: string;
  num?: number;
  className?: string;
}

interface TabListProps {
  tabs: TabItem[];
}

const TabList: React.FC<TabListProps> = ({ tabs }) => {
  const [selectedIndex, setSelectedIndex] = useState(0); // 내부 상태 관리

  return (
    <div className="tab-list">
      {tabs.map((tab, index) => (
        <TabAtom
          key={index}
          text={tab.text}
          num={tab.num}
          className={tab.className}
          selected={selectedIndex === index}
          onClick={() => setSelectedIndex(index)} //  클릭 시 내부 상태 변경
        />
      ))}
    </div>
  );
};

export default TabList;
