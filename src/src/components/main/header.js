/**
 * Created by ocean on 18/3/1.
 */
import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

export default () => {
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <a className="brand" rel="noopener noreferrer" target="_blank">
          <img src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="logo"/>
        </a>
        <ul mode="horizontal" >
          <li key="全部">
            <Link to="/all">全部</Link>
          </li>
          <li key="精华">
            <Link to="/good">精华</Link>
          </li>
          <li key="分享">
            <Link to="/share">分享</Link>
          </li>
          <li key="问答">
            <Link to="/ask">问答</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
