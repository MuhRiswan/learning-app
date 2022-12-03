import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";

const AdminNavbar = () => {
  function logouthandler() {
    const confirmation = window.confirm('Yakin ingin logout?');
    if (confirmation) {
      Cookies.remove('admin');
      window.alert('Logout berhasil!');
    }
  }
  return (
    <div className="home">
      <nav class="navbar navbar-light navbar-expand-md bg-faded justify-content-center shadow-sm p-3 mb-5 bg-body rounded">
        <div class="container">
          <a href="/" class="navbar-brand d-flex w-50 me-auto fw-bold fs-4">
            Home Page
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsingNavbar3"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
            <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
              <li class="nav-item">
                <Link className="nav-link fw-bold fs-5" to="/admin/adminDashboard">
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown fw-bold fs-5">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {' '}
                  Webinar{' '}
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/admin/dataWebinar">
                      <button className="navhome btn">Data Webinar</button>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin/InputWebinar">
                      <button className="navhome btn">
                        Tambah Data Webinar
                      </button>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown fw-bold fs-5">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {' '}
                  Podcast{' '}
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/admin/dataPodcast">
                      <button className="navhome btn">Data Podcast</button>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin/InputPodcast">
                      <button className="navhome btn">
                        Tambah Data Podcast
                      </button>
                    </Link>
                  </li>
                </ul>
              </li>
              {Cookies.get('admin') !== undefined && (
                <li class="nav-item dropdown fw-bold fs-5">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >

                    <FaRegUser />
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-right p-2"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li className='mb-2'>
                      <button className='dropdown-item'>Profile</button>
                    </li>
                    <li>
                      <button className="dropdown-item btn bg-danger button-logout" onClick={logouthandler}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {Cookies.get('token') !== undefined && (
        <button onClick={logouthandler}>Logout</button>
      )}
    </div>
  );
};

export default AdminNavbar;
