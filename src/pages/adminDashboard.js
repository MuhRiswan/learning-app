import React from 'react';
import { BsArrowRightSquareFill, BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="home container-fluid">
      <div className="">
        <h2 className="fw-bold text-center my-4">Dashboard Admin</h2>
        <div class="container text-center">
          <div class="row g-4 my-4">
            <div class="col col-md-6 col-sm-12 col-12">
              <div class="card card-home-admin p-3">
                <div class="card-body position-relative">
                  <h5 class="card-title">Halaman Home</h5>
                  <p class="card-text">Lihat halaman home</p>
                  <Link to="/" className="text-decoration-none ">
                    <button className="btn btn-primary position-absolute bottom-0 end-0 p-2">
                      <BsArrowRightSquareFill className="icon-font" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col col-md-6 col-xs-12 col-12">
              <div class="card card-home-admin p-3">
                <div class="card-body position-relative">
                  <h5 class="card-title">Halaman Data Webinar</h5>
                  <p class="card-text">
                    Lihat data webinar, edit data webinar, atau hapus data
                    webinar
                  </p>
                  <Link
                    to="/admin/dataWebinar"
                    className="text-decoration-none "
                  >
                    <button className="btn btn-primary position-absolute bottom-0 end-0 p-2">
                      <BsArrowRightSquareFill className="icon-font" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-4">
            <div class="col col-lg-4 col-md-4 col-sm-12 col-12">
              <div class="card card-home-admin p-3">
                <div class="card-body position-relative">
                  <h5 class="card-title">Halaman Input Webinar</h5>
                  <p class="card-text">Tambah data webinar</p>
                  <Link
                    to="/admin/InputWebinar"
                    className="text-decoration-none "
                  >
                    <button className="btn btn-primary position-absolute bottom-0 end-0 p-2">
                      <BsArrowRightSquareFill className="icon-font" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col  col-lg-4 col-md-4 col-sm-12 col-12">
              <div class="card card-home-admin p-3">
                <div class="card-body position-relative">
                  <h5 class="card-title">Halaman Data Podcast</h5>
                  <p class="card-text">
                    Lihat data podcast, edit data podcast, atau hapus data
                    podcast
                  </p>
                  <Link
                    to="/admin/dataPodcast"
                    className="text-decoration-none "
                  >
                    <button className="btn btn-primary position-absolute bottom-0 end-0 p-2">
                      <BsArrowRightSquareFill className="icon-font" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col  col-lg-4 col-md-4 col-sm-12 col-12">
              <div class="card card-home-admin p-3">
                <div class="card-body position-relative">
                  <h5 class="card-title">Halaman Input Podcast</h5>
                  <p class="card-text">Tambah data podcast</p>
                  <Link
                    to="/admin/InputPodcast"
                    className="text-decoration-none "
                  >
                    <button className="btn btn-primary position-absolute bottom-0 end-0 p-2">
                      <BsArrowRightSquareFill className="icon-font" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
