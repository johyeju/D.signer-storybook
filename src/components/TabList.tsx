import React, { useState } from 'react';
import TabAtom from './TabAtom';
import './TabAtom.css';
import { Trans } from './IconTransport';

interface TabItem {
  text?: string;
  num?: number;
  className?: string;
  iconName?: keyof typeof Trans;
}

interface TabListProps {
  tabs: TabItem[];
}

const TabList: React.FC<TabListProps> = ({ tabs }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getGapClass = (className?: string) => {
    if (className?.includes('a-style')) return 'gap-a';
    if (className?.includes('b-style')) return 'gap-b';
    if (className?.includes('c-style')) return 'gap-c';
    if (className?.includes('e-style')) return 'gap-e';
    if (className?.includes('f-style')) return 'gap-f';
    if (className?.includes('g-style')) return 'gap-g';
    return '';
  };

  const gapClass = getGapClass(tabs[0]?.className);
  console.log(`Applied gap class: ${gapClass}`);

  return (
    <div className={`tab-list ${gapClass}`}>
      {tabs.map((tab, index) => {
        // 🔥 TabE (e-style) 또는 TabG (g-style)일 때만 아이콘 활성화
        const isIconActive =
          tab.className?.includes('e-style') ||
          tab.className?.includes('g-style');

        return (
          <TabAtom
            showIcon={isIconActive}
            Icon={isIconActive && tab.iconName ? tab.iconName : undefined}
            key={index}
            text={tab.text}
            num={tab.num}
            className={tab.className}
            selected={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default TabList;
