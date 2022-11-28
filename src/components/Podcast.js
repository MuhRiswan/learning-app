import React from "react";

function Podcast() {
    return (
        <div className="podcast-page py-4">
            <div className="container">
                <h2>Podcast</h2>
                <div className="kategori-list d-flex my-4">
                    <a href="">Ekonomi</a>
                    <a href="">Programming</a>
                    <a href="">Bisnis</a>
                    <a href="">Investasi</a>
                    <a href="">Pendirikan</a>
                </div>
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
    )
}

export default Podcast;