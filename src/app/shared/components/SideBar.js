import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Grid } from 'antd';
import {
  EditOutlined,
  FolderViewOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { handleLogOut } from '../../query';

const { Sider } = Layout;

export default function SideBar() {
  const [iscollapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const { pathname } = useLocation();
  const { useBreakpoint } = Grid;
  const breakPoint = useBreakpoint();

  return (
    <>
      {(breakPoint.lg || breakPoint.md) && (
        <Sider
          width={200}
          className="site-layout-background"
          collapsible
          collapsed={iscollapsed}
          onCollapse={onCollapse}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={[pathname]}
            style={{
              height: '100%',
              borderRight: 0,
              position: 'fixed',
              width: iscollapsed ? 80 : 200,
              top: 64,
            }}
          >
            {[
              {
                key: '/view-profile',
                name: 'View Profile',
                icon: <FolderViewOutlined />,
              },
              {
                key: '/edit-profile',
                name: 'Edit Profile',
                icon: <EditOutlined />,
              },
            ].map((l) => (
              <Menu.Item key={l.key} icon={l.icon}>
                <Link to={l.key}>{l.name}</Link>
              </Menu.Item>
            ))}
            <Menu.Item key="3" icon={<LogoutOutlined />}>
              <a href="#" onClick={(e) => handleLogOut(e)}>
                Logout
              </a>
            </Menu.Item>
          </Menu>
        </Sider>
      )}
    </>
  );
}
