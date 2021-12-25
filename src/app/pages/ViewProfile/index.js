import React from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { PageContainer } from '../../shared';
import PersonalDetail from './components/PersonalDetail';
import WorkDetail from './components/WorkDetail';
import { getCurrentUserDetail } from '../../query';

export default function Index() {
  const userDetails = useLiveQuery(() => {
    return getCurrentUserDetail();
  }, []);

  return (
    <PageContainer pageTitle="View Profile">
      <PersonalDetail userDetails={userDetails} />
      <WorkDetail userDetails={userDetails} />
    </PageContainer>
  );
}
