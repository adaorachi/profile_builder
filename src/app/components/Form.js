import React, { useState } from 'react';
import { Row, Col, Button, Typography } from 'antd';
import { Input, Form } from 'formik-antd';
import { Formik } from 'formik';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

export default function AppForm({
  inputList,
  userDetails,
  detailSchema,
  handleSubmit,
  submitBtnLabel,
  icons,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const list = inputList;

  const ErrorMessage = ({ input, errors, touched }) => {
    return (
      <>
        {errors?.[input] && touched?.[input] ? (
          <Typography.Text
            type="danger"
            style={{
              display: 'block',
              textAlign: 'left',
              fontSize: 12,
            }}
          >
            {errors?.[input]}
          </Typography.Text>
        ) : null}
      </>
    );
  };

  return (
    <Formik
      initialValues={userDetails ?? {}}
      enableReinitialize
      validationSchema={detailSchema}
      onSubmit={(values, actions) => {
        setIsSubmitting(true);
        setTimeout(() => {
          handleSubmit(values, actions.resetForm);
          setIsSubmitting(false);
        }, 2000);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Row gutter={[16, 24]}>
            {list.includes('firstName') && (
              <Col className="gutter-row" span={24}>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  {...(icons && { prefix: <UserOutlined /> })}
                />
                <ErrorMessage input="firstName" {...{ errors, touched }} />
              </Col>
            )}
            {list.includes('lastName') && (
              <Col className="gutter-row" span={24}>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  {...(icons && { prefix: <UserOutlined /> })}
                />
                <ErrorMessage input="lastName" {...{ errors, touched }} />
              </Col>
            )}
            {list.includes('email') && (
              <Col className="gutter-row" span={24}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...(icons && { prefix: <MailOutlined /> })}
                />

                <ErrorMessage input="email" {...{ errors, touched }} />
              </Col>
            )}
            {list.includes('password') && (
              <Col className="gutter-row" span={24}>
                <Input
                  name="password"
                  type="password"
                  {...(icons && { prefix: <LockOutlined /> })}
                  placeholder="Password"
                />
                <ErrorMessage input="password" {...{ errors, touched }} />
              </Col>
            )}

            {list.includes('tagline') && (
              <Col className="gutter-row" span={24}>
                <Input.TextArea name="tagline" placeholder="Tagline" />
                <ErrorMessage input="tagline" {...{ errors, touched }} />
              </Col>
            )}
            <Col className="gutter-row" span={24}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                disabled={isSubmitting}
                loading={isSubmitting}
              >
                {submitBtnLabel}
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
