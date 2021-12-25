import React from 'react';
import { Menu, Layout, Grid } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { handleLogOut } from '../../query';

const { Header } = Layout;

export default function NavBar() {
  const { pathname } = useLocation();
  const { useBreakpoint } = Grid;
  const breakPoint = useBreakpoint();

  return (
    <>
      <Header
        className="header"
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: 100,
          height: 'auto',
        }}
      >
        <div className="logo">
          <Link
            to="/"
            style={{
              color: '#fff',
              fontSize: 20,
              display: 'inline',
            }}
          >
            ProfileBuilder.io
          </Link>
          {!(breakPoint.lg || breakPoint.md) && (
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[pathname]}
            >
              {[
                {
                  key: '/view-profile',
                  name: 'View Profile',
                },
                {
                  key: '/edit-profile',
                  name: 'Edit Profile',
                },
              ].map((l) => (
                <Menu.Item key={l.key}>
                  <Link to={l.key}>{l.name}</Link>
                </Menu.Item>
              ))}
              <Menu.Item key="3">
                <a href="#" onClick={(e) => handleLogOut(e)}>
                  Logout
                </a>
              </Menu.Item>
            </Menu>
          )}
        </div>
      </Header>
    </>
  );
}
