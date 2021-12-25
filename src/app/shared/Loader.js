import React from 'react';
import { Spin, Space } from 'antd';

export default function Loader() {
  return (
    <Space
      size="middle"
      style={{
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
      }}
    >
      <Spin size="large" />
    </Space>
  );
}
