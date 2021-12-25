import React from 'react';
import { editUserDetails } from '../../../query';
import { PersonalDetailSchema } from '../../../utils/FormSchema';
import AppForm from '../../../components/Form';

export default function PersonalDetail({ userDetails }) {
  return (
    <AppForm
      inputList={['firstName', 'lastName', 'email', 'tagline']}
      userDetails={userDetails}
      detailSchema={PersonalDetailSchema}
      handleSubmit={(values) => editUserDetails(values)}
      submitBtnLabel={'Save'}
    />
  );
}
