import React, { Suspense } from "react";
import { NavLink } from "react-router-dom";

import '../styles/main.scss';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <i className="fa-solid fa-sitemap fa-lg mr-2"></i>
    <NavLink to="/" className="navbar-brand">App Dashboard</NavLink>
  </nav>
);

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mt-4">
        {children}
      </div>
      <div className="text-center text-muted mt-4">
        cfryerdev - 2023
      </div>
    </>
  );
};

export default Layout;