import React, { useState, useEffect } from 'react';
import { Input } from 'formik-antd';
import { Row, Col, DatePicker, Divider, Button, Checkbox, Grid } from 'antd';
import moment from 'moment';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import { WorkDetailValues } from '../../../utils/FormValues';

export default function AddExperience({ values, setFieldValue, remove, push }) {
  const [disableEndDate, setDisableEndDate] = useState({});
  const [isChecked, setIsChecked] = useState({});

  const onChange = (e, setFieldValue, index) => {
    const { checked } = e.target;
    setDisableEndDate((prevS) => ({
      ...prevS,
      [`isDisabled${index}`]: checked,
    }));
    setIsChecked((prevS) => ({
      ...prevS,
      [`checked${index}`]: checked,
    }));
    setFieldValue(`work_experience.${index}.end_date`, 'present date');
  };

  useEffect(() => {
    const list = values?.work_experience?.map(
      (v) => v?.end_date === 'present date'
    );
    setIsChecked(() => {
      return list?.reduce((acc, item, index) => {
        acc[`checked${index}`] = item;
        return acc;
      }, {});
    });

    setDisableEndDate(() => {
      return list?.reduce((acc, item, index) => {
        acc[`isDisabled${index}`] = item;
        return acc;
      }, {});
    });
  }, [values]);

  const datesList = (values, index) => {
    return [
      {
        placeholder: 'Start Date',
        name: 'start_date',
        value: values?.work_experience?.[index]?.start_date,
      },
      {
        placeholder: 'End Date',
        name: 'end_date',
        value: values?.work_experience?.[index]?.end_date,
      },
    ];
  };

  const { useBreakpoint } = Grid;
  const breakPoint = useBreakpoint();

  return (
    <>
      {values?.work_experience?.length > 0 &&
        values?.work_experience?.map((work, index) => (
          <Row gutter={[16, 24]} key={index}>
            {[
              { placeholder: 'Company', name: 'company' },
              { placeholder: 'Role', name: 'role' },
            ].map((r, ind) => (
              <Col span={24} key={ind}>
                <Input
                  placeholder={r.placeholder}
                  name={`work_experience.${index}.${r.name}`}
                  type="text"
                />
              </Col>
            ))}
            <Col span={24}>
              <Input.TextArea
                name={`work_experience.${index}.job_desc`}
                placeholder="Job Description (300 chars max)"
                autoSize={{ minRows: 2, maxRows: 6 }}
              />
            </Col>
            <Col span={24}>
              <Row gutter={[16, 24]}>
                {datesList(values, index).map((d, ind) => (
                  <Col span={breakPoint.md ? 9 : 24} key={ind}>
                    <DatePicker
                      onChange={(date, dateString) => {
                        setFieldValue(
                          `work_experience.${index}.${d.name}`,
                          dateString
                        );
                      }}
                      picker="month"
                      style={{ width: '100%' }}
                      placeholder={d.placeholder}
                      {...(d.value !== 'present date' && {
                        defaultValue: moment(d.value),
                      })}
                      {...(d.name === 'end_date' && {
                        disabled: disableEndDate?.[`isDisabled${index}`],
                      })}
                    />
                  </Col>
                ))}
                <Col span={breakPoint.md ? 6 : 24}>
                  <Checkbox
                    onChange={(e) => onChange(e, setFieldValue, index)}
                    checked={isChecked?.[`checked${index}`]}
                  >
                    Present Date
                  </Checkbox>
                </Col>
              </Row>
            </Col>
            <Col span={24} align="center">
              <MinusCircleOutlined onClick={() => remove(index)} />
            </Col>
            <Divider />
          </Row>
        ))}
      <Button
        type="dashed"
        onClick={() => push(WorkDetailValues)}
        block
        icon={<PlusOutlined />}
      >
        Add Work Experience
      </Button>
    </>
  );
}
