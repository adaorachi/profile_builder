import React from 'react';
import { Breadcrumb } from 'antd';

export default function AppBreadCrumb({ pageTitle }) {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>App</Breadcrumb.Item>
      <Breadcrumb.Item>{pageTitle}</Breadcrumb.Item>
    </Breadcrumb>
  );
}
