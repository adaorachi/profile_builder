import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthStack from './AuthStack';
import GenStack from './GenStack';
import ScrollTop from '../shared/ScrollTop';

import 'antd/dist/antd.css';

const AppRoutes = () => (
  <BrowserRouter>
    <ScrollTop>
      <>
        <Routes>
          {AuthStack}
          {GenStack}
          <Route path="*" element={() => <div>404, Not Found!</div>} />
        </Routes>
      </>
    </ScrollTop>
  </BrowserRouter>
);

export default AppRoutes;
