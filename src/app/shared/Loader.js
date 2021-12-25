import React from 'react';
import { Spin, Space } from 'antd';

export default function Loader() {
  return (
    <Space size="middle">
      <Spin size="large" />
    </Space>
  );
}
