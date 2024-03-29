import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-gray-900 font-montserrat" >{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
