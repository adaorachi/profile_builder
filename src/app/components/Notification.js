import React, { useEffect } from 'react';
import { notification } from 'antd';

export default function Notification({ showNotif }) {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.success({
      message: 'Successfully Saved',
      description: '',
      placement: 'topRight',
    });
  };

  useEffect(() => {
    if (showNotif) {
      openNotification();
    }
  }, [showNotif]);

  return <>{contextHolder}</>;
}
