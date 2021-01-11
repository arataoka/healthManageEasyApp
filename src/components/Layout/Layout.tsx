import React from 'react';
import Style from './_Layout.module.scss';
import Header from '../Header/Header';
type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={Style.wrapper}>
      <Header />
      <div className={Style.main}>{children}</div>
    </div>
  );
};

export default Layout;
