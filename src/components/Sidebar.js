import React from "react";
import { Link } from "react-router-dom";

const sidebar = () => {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon">
            <img src="img/logo-bio.png" />
          </div>
          {/* <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div> */}
        </Link>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </Link>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fa fa-user" aria-hidden="true" />
            <span>Customer</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/Customerform">
                Create Customer
              </Link>
              <Link className="collapse-item" to="/Customerlist">
                Customer List
              </Link>
            </div>
          </div>
        </li>
        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fa fa-industry" aria-hidden="true" />
            <span>Manufacturer</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/Manufacturer">
                Create Product
              </Link>
              <Link className="collapse-item" to="/Manufacturerlist">
                Manufacturer List
              </Link>
            </div>
          </div>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder" />
            <span>Product</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/Productform">
                Create Product
              </Link>
              <Link className="collapse-item" to="/Productlist">
                Product List
              </Link>
            </div>
          </div>
        </li>
        {/*--contructs--*/}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages2"
            aria-expanded="true"
            aria-controls="collapsePages2"
          >
            <i className="fa fa-product-hunt" aria-hidden="true" />
            <span>Contracts</span>
          </a>
          <div
            id="collapsePages2"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/Createcontracts">
                Add New Contract
              </Link>
              <Link className="collapse-item" to="/Assingrule">
                Assing Rule
              </Link>
              <Link className="collapse-item" to="/Contractslist">
                Contract List
              </Link>
            </div>
          </div>
        </li>
        {/* Nav Item - Charts */}
        <li className="nav-item">
          <Link className="nav-link" to="/Charts">
            <i className="fas fa-fw fa-chart-area" />
            <span>Charts</span>
          </Link>
        </li>
        {/* Nav Item - Tables */}
        <li className="nav-item">
          <Link className="nav-link" to="/Tables">
            <i className="fas fa-fw fa-table" />
            <span>Tables</span>
          </Link>
        </li>
        {/*--dev--*/}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages2"
            aria-expanded="true"
            aria-controls="collapsePages2"
          >
            <i className="fa fa-product-hunt" aria-hidden="true" />
            <span>Dev</span>
          </a>
          <div
            id="collapsePages2"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded"></div>
          </div>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
      </ul>
    </>
  );
};

export default sidebar;
