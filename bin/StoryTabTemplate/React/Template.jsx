import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

import imgJSX from './img/jsx.png';
import imgSass from './img/sass.png';
import './Template.css';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || initialValue);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  });
  return [value, setValue];
}

const Template = ({ jsx, scss, children }) => {
  const [tabIndex, setTabIndex] = useLocalStorage('storybook-rpt', {
    mainTabIndex: 0,
    codeTabIndex: 0,
  });

  return (
    <Tabs
      defaultIndex={tabIndex.mainTabIndex}
      onSelect={index =>
        setTabIndex(prevTabIndex => ({
          ...prevTabIndex,
          mainTabIndex: index,
        }))
      }
    >
      <TabList>
        <Tab>Demo</Tab>
        <Tab>Code</Tab>
      </TabList>
      <TabPanel className="story-tab-demo">{children}</TabPanel>
      <TabPanel className="story-tab-code">
        <Tabs
          defaultIndex={tabIndex.codeTabIndex}
          onSelect={index =>
            setTabIndex(prevTabIndex => ({
              ...prevTabIndex,
              codeTabIndex: index,
            }))
          }
        >
          <TabList>
            <Tab>
              <img src={imgJSX} height="30" />
            </Tab>
            {scss && (
              <Tab>
                <img src={imgSass} height="30" />
              </Tab>
            )}
          </TabList>
          <TabPanel>
            <SyntaxHighlighter language="jsx" style={prism}>
              {jsx}
            </SyntaxHighlighter>
          </TabPanel>
          {scss && (
            <TabPanel>
              <SyntaxHighlighter language="scss" style={prism}>
                {scss}
              </SyntaxHighlighter>
            </TabPanel>
          )}
        </Tabs>
      </TabPanel>
    </Tabs>
  );
};

export default Template;
