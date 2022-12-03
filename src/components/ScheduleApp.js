import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
function ScheduleApp() {
  let navigate = useNavigate();
  const { contextState, contextFunctions } = useContext(GlobalContext);
  const {
    arrayWebinar,
    arrayPodcast,
    setArrayWebinar,
    fetchStatusPodcast,
    fetchStatus,
    setFetchStatus,
  } = contextState;
  const {
    renderDataWebinar,
    renderDataPodcast,
    handleEditPodcast,
    handleDeletePodcast,
  } = contextFunctions;

  const handleDetail = (event) => {
    const id = parseInt(event.target.getAttribute('data-item'));
    // console.log(id);
    navigate(`/webinar/${id}`);
    setFetchStatus(true);
  };

  const handleShowWebinar = () => {
    navigate(`/webinar`);
    setFetchStatus(true);
  };

  const handleShowPodcast = () => {
    navigate(`/podcast`);
    setFetchStatus(true);
  };

  useEffect(() => {
    if (fetchStatusPodcast === true && fetchStatus === true) {
      renderDataWebinar();
      renderDataPodcast();
    }
  }, []);
  return (
    <section className="schedule py-4">
      <div className="container">
        <section className="top-view">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner ">
              {arrayWebinar !== null ? (
                arrayWebinar.slice(0, 3).map((el) => (
                  <div className="carousel-item active" key={el.id}>
                    <img src={el.image} className="d-block w-100" alt="..." />
                    <div className="carousel-caption">
                      <p>
                        <a onClick={handleDetail} data-item={el.id}>
                          {el.judul}
                        </a>
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Tidak ada data</p>
              )}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        <section className="webinar-page py-5 mt-5">
          <div className="webinar">
            <div className="webinar__head d-flex justify-content-between mb-2">
              <h2>Webinar</h2>
              <a onClick={handleShowWebinar} className="fw-bold">
                Show All
              </a>
            </div>
            <div className="webinar__body">
              <div className="row">
                {arrayWebinar !== null ? (
                  arrayWebinar.slice(0, 3).map((el) => (
                    <div className="col-lg-4 col-md-6" key={el.id}>
                      <div className="card shadow mb-5">
                        <div className="card-title">
                          <img src={el.image} className="card-img-top" alt="" />
                        </div>
                        <div className="card-body">
                          <span className="">{el.kategori}</span>
                          <h3>
                            <a onClick={handleDetail} data-item={el.id}>
                              {el.judul}
                            </a>
                          </h3>
                          <p className="deskripsi my-4">{el.deskripsi}</p>
                          <p>{el.tanggal}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Tidak ada data</p>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="podcast-page py-5 mt-5">
          <div className="podcast">
            <div className="podcast__head d-flex justify-content-between mb-2">
              <h2>Podcast</h2>
              <a onClick={handleShowPodcast} className="fw-bold">
                Show All
              </a>
            </div>
            <div className="podcast__body">
              <div className="row">
                {arrayPodcast !== null ? (
                  arrayPodcast.slice(0, 3).map((el) => (
                    <div className="col-lg-4 col-md-6" key={el.id}>
                      <div className="card shadow mb-5">
                        <div className="card-title">
                          <img src={el.image} className="card-img-top" alt="" />
                        </div>
                        <div className="card-body">
                          <span className="">{el.kategori}</span>
                          <h3>{el.judul}</h3>
                          <p className="deskripsi my-4">{el.deskripsi}</p>
                          <p>{el.link}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Tidak ada data</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default ScheduleApp;
