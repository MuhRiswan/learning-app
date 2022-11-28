import React from "react";

function ScheduleApp() {
    return (
        <section className="schedule py-4">
            <div className="container">
                <section className="top-view">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://images.unsplash.com/photo-1448099940878-e0c48ea3a165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://images.unsplash.com/photo-1448099940878-e0c48ea3a165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://images.unsplash.com/photo-1448099940878-e0c48ea3a165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
                <section className="webinar-page py-5 mt-5">
                    <div className="webinar">
                        <div className="webinar__head d-flex justify-content-between mb-2">
                            <h2>Webinar</h2>
                            <a href="" className="fw-bold">Show All</a>
                        </div>
                        <div className="webinar__body">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="card shadow mb-5">
                                        <div className="card-title">
                                            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="" />
                                        </div>
                                        <div className="card-body">
                                            <span className="">Ekonomi</span>
                                            <h3>Bagaimana Data Engineer Menjadi Profesi Menjanjikan di Era</h3>
                                            <p className="deskripsi my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc sed blandit.</p>
                                            <p>10 agustus 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card shadow mb-5">
                                        <div className="card-title">
                                            <img src="https://images.unsplash.com/photo-1566141828450-84ea7ee7d634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="card-img-top" alt="" />
                                        </div>
                                        <div className="card-body">
                                            <span className="">Ekonomi</span>
                                            <h3>Bagaimana Data Engineer Menjadi Profesi Menjanjikan di Era</h3>
                                            <p className="deskripsi my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc sed blandit.</p>
                                            <p>10 agustus 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card shadow mb-5">
                                        <div className="card-title">
                                            <img src="https://images.unsplash.com/photo-1566141828450-84ea7ee7d634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="card-img-top" alt="" />
                                        </div>
                                        <div className="card-body">
                                            <span className="">Ekonomi</span>
                                            <h3>Bagaimana Data Engineer Menjadi Profesi Menjanjikan di Era</h3>
                                            <p className="deskripsi my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc sed blandit.</p>
                                            <p>10 agustus 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="podcast-page py-5 mt-5">
                    <div className="podcast">
                        <div className="podcast__head d-flex justify-content-between mb-2">
                            <h2>Podcast</h2>
                            <a href="" className="fw-bold">Show All</a>
                        </div>
                        <div className="podcast__body">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="card shadow mb-5">
                                        <div className="card-title">
                                            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="" />
                                        </div>
                                        <div className="card-body">
                                            <span className="">Ekonomi</span>
                                            <h3>Bagaimana Data Engineer Menjadi Profesi Menjanjikan di Era</h3>
                                            <p className="deskripsi my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc sed blandit.</p>
                                            <p>10 agustus 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card shadow mb-5">
                                        <div className="card-title">
                                            <img src="https://images.unsplash.com/photo-1566141828450-84ea7ee7d634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="card-img-top" alt="" />
                                        </div>
                                        <div className="card-body">
                                            <span className="">Ekonomi</span>
                                            <h3>Bagaimana Data Engineer Menjadi Profesi Menjanjikan di Era</h3>
                                            <p className="deskripsi my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc sed blandit.</p>
                                            <p>10 agustus 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card shadow mb-5">
                                        <div className="card-title">
                                            <img src="https://images.unsplash.com/photo-1566141828450-84ea7ee7d634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="card-img-top" alt="" />
                                        </div>
                                        <div className="card-body">
                                            <span className="">Ekonomi</span>
                                            <h3>Bagaimana Data Engineer Menjadi Profesi Menjanjikan di Era</h3>
                                            <p className="deskripsi my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc sed blandit.</p>
                                            <p>10 agustus 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default ScheduleApp;