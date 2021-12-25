import React, { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { Card } from 'antd';
import PersonalDetail from './components/PersonalDetail';
import WorkDetail from './components/WorkDetail';
import { PageContainer } from '../../shared';
import { getCurrentUserDetail } from '../../query';

const tabListNoTitle = [
  {
    key: 'personal',
    tab: 'Personal',
  },
  {
    key: 'work',
    tab: 'Work',
  },
];

export default function Index() {
  const [activeTabKey, setActiveTabKey] = useState('personal');

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  const userDetails = useLiveQuery(() => {
    return getCurrentUserDetail();
  }, []);

  const contentListNoTitle = {
    personal: <PersonalDetail userDetails={userDetails} />,
    work: <WorkDetail userDetails={userDetails} />,
  };

  return (
    <PageContainer pageTitle="Edit Profile">
      <Card
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey}
        onTabChange={(key) => {
          onTabChange(key);
        }}
      >
        {contentListNoTitle[activeTabKey]}
      </Card>
    </PageContainer>
  );
}
