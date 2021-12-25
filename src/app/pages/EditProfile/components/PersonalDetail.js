import React, { useState } from 'react';
import { editUserDetails } from '../../../query';
import { PersonalDetailSchema } from '../../../utils/FormSchema';
import { AppForm, Notification } from '../../../components';

export default function PersonalDetail({ userDetails }) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <>
      <Notification showNotif={isSaved} />
      <AppForm
        inputList={['firstName', 'lastName', 'email', 'tagline']}
        userDetails={userDetails}
        detailSchema={PersonalDetailSchema}
        handleSubmit={(values) => editUserDetails(values, setIsSaved)}
        submitBtnLabel={'Save'}
      />
    </>
  );
}
