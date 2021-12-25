import { Card, Avatar, Row, Col, Divider, List, Grid } from 'antd';

export default function PersonalDetail({ userDetails }) {
  const { firstName, lastName, email, tagline } = userDetails ?? {};

  const detailList = [
    {
      title: 'First Name',
      desc: firstName,
    },
    {
      title: 'Last Name',
      desc: lastName,
    },
    {
      title: 'Email',
      desc: email,
    },
  ];

  const userIcon = `${firstName?.[0]}${lastName?.[0]}`;

  const { useBreakpoint } = Grid;
  const breakPoint = useBreakpoint();

  return (
    <div className="site-card-wrapper">
      <Divider orientation="left">Personal Details</Divider>
      <Row gutter={16}>
        <Col span={breakPoint.lg ? 8 : 24}>
          <Card bordered align="center">
            <Avatar
              size={100}
              style={{
                color: '#f56a00',
                backgroundColor: '#fde3cf',
                marginBottom: 20,
                fontSize: 30,
                fontWeight: 'bold',
              }}
            >
              {userIcon}
            </Avatar>
            <Card.Meta title="" description={tagline || 'No Tagline'} />
          </Card>
        </Col>
        <Col span={breakPoint.lg ? 16 : 24}>
          <Card bordered>
            <List
              itemLayout="horizontal"
              dataSource={detailList}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta title={item.title} description={item.desc} />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
