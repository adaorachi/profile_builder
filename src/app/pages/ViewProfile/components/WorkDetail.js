import { Card, Tag, Row, Col, Divider, List, Typography } from 'antd';
import { formatDate } from '../../../utils/helpers';

export default function WorkDetail({ userDetails }) {
  const dataList = (details) => {
    const { company, role, job_desc, start_date, end_date } = details;
    return [
      {
        title: 'Company',
        desc: company,
      },
      {
        title: 'Role',
        desc: role,
      },
      {
        title: 'Start Date - End Date',
        desc: `${formatDate(start_date)} - ${formatDate(end_date)}`,
      },
      {
        title: 'Job Description',
        desc: job_desc,
      },
    ];
  };

  const { work_experience, skills } = userDetails ?? {};

  return (
    <div className="site-card-wrapper">
      <Divider orientation="left">Work Details</Divider>
      <Row gutter={16}>
        <Col span={24}>
          <Card title="Skills">
            {skills?.length ? (
              skills?.map((skill) => <Tag color="default">{skill}</Tag>)
            ) : (
              <Typography.Text type="secondary">
                No Skills Added
              </Typography.Text>
            )}
          </Card>
        </Col>
        <Col span={24}>
          <Card bordered title="Work Experiences">
            {work_experience?.length ? (
              work_experience?.map((work, index) => (
                <Card
                  key={index}
                  type="inner"
                  title={`Work Experience #${index + 1}`}
                  style={{
                    marginBottom: 20,
                  }}
                >
                  <List
                    itemLayout="horizontal"
                    dataSource={dataList(work)}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          title={item.title}
                          description={item.desc}
                        />
                      </List.Item>
                    )}
                  />
                </Card>
              ))
            ) : (
              <Typography.Text type="secondary">
                No Work Experience Added
              </Typography.Text>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
