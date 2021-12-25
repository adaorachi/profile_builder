import { Space, Row, Col, Layout, Typography, Grid } from 'antd';

const { Content } = Layout;

export default function AuthContainer({ children, Title, Footer, message }) {
  const { useBreakpoint } = Grid;
  const breakPoint = useBreakpoint();

  return (
    <Row
      align="center"
      style={{
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <Col
        span={breakPoint.lg ? 6 : breakPoint.md ? 10 : breakPoint.sm ? 12 : 20}
        align="center"
      >
        <Typography.Title level={4}>ProfileBuilder.io</Typography.Title>
        <Content
          style={{
            background: '#f9f9f9',
            padding: 20,
          }}
        >
          <Typography.Title type="secondary" level={5}>
            <Title />
          </Typography.Title>

          {message && (
            <Typography.Text type="danger">{message}</Typography.Text>
          )}
          {children}
          <Space
            style={{
              width: '100%',
              justifyContent: 'center',
              marginTop: 10,
            }}
          >
            <Footer />
          </Space>
        </Content>
      </Col>
    </Row>
  );
}
