import React, { useState } from 'react';
import { Input } from 'formik-antd';
import { Row, Col, Button } from 'antd';
import { Formik, FieldArray, Form } from 'formik';
import { editUserDetails } from '../../../query';
import { WorkDetailSchema } from '../../../utils/FormSchema';
import { Notification } from '../../../components';

import AddExperience from './AddExperience';

export default function Work({ userDetails }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const { work_experience, skills } = userDetails ?? {};

  return (
    <>
      <Notification showNotif={isSaved} />
      <Formik
        initialValues={{ work_experience, skills: skills?.join(',') }}
        enableReinitialize
        // validationSchema={WorkDetailSchema}
        onSubmit={(values, actions) => {
          setIsSubmitting(true);
          const valuesFormat = {
            ...values,
            skills:
              values.skills === ''
                ? []
                : values.skills.split(',').map((e) => e.trim()),
          };
          setTimeout(() => {
            editUserDetails(valuesFormat, setIsSaved);
            setIsSubmitting(false);
          }, 2000);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <Row gutter={[16, 24]}>
              <Col span={24}>
                <FieldArray name="work_experience">
                  {({ insert, remove, push }) => (
                    <AddExperience
                      {...{
                        values,
                        setFieldValue,
                        remove,
                        push,
                      }}
                    />
                  )}
                </FieldArray>
              </Col>
              <Col span={24}>
                <Input
                  name="skills"
                  placeholder="Add Skills"
                  onChange={(e) => setFieldValue('skills', e.target.value)}
                />
              </Col>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                disabled={isSubmitting}
                loading={isSubmitting}
              >
                Save
              </Button>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
}
