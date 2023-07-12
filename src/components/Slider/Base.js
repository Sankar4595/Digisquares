import React from "react";
import './index.css';
import { FullscreenOutlined, RedoOutlined } from '@ant-design/icons';

const BasePage = ({ children }) => {
  return (
    <div className="base">
      <div className="top">
        <div className="left">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="center">
          <input placeholder="search" />
          <RedoOutlined style={{ cursor: "pointer" }} />
        </div>
        <div className="right">
          <FullscreenOutlined />

        </div>
      </div>

      <div className="children">
        {children}
      </div>
    </div>
  );
}

export default BasePage;

