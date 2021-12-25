import React from 'react';
import { Layout, Grid } from 'antd';
import { NavBar, SideBar, Footer, BreadCrumb } from './index';

const { Content } = Layout;

export default function PageContainer({ children, pageTitle }) {
  const { useBreakpoint } = Grid;
  const breakPoint = useBreakpoint();

  return (
    <Layout>
      <NavBar />
      <Layout style={{ minHeight: '90vh' }}>
        <SideBar />
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              marginTop: breakPoint.lg || breakPoint.md ? 64 : 100,
              minHeight: 280,
            }}
          >
            <BreadCrumb pageTitle={pageTitle} />
            {children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  );
}
