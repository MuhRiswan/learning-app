import React, { useContext, useMemo, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

import CategoryBtn from './CategoryBtn';

function Webinar() {
  let navigate = useNavigate();
  const [kategori, setKategori] = useState('');
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
    checkIfPostLiked,
  } = contextFunctions;

  const handleKategori = (event) => {
    event.preventDefault();
    setKategori(event.target.value);
  };

  const handleClear = (event) => {
    event.preventDefault();
    setKategori('');
  };

  const filterCategory = arrayWebinar.find((el) => el.kategori === kategori);

  const filteredWebinar = useMemo(() => {
    if (kategori === '') {
      return arrayWebinar;
    } else if (kategori !== null) {
      return arrayWebinar.filter((el) => el.kategori == kategori);
    }
  }, [kategori, arrayWebinar]);

  console.log(filterCategory);
  console.log(arrayWebinar);
  const handleDetail = (event) => {
    const id = parseInt(event.target.getAttribute('data-item'));
    // console.log(id);
    navigate(`/webinar/${id}`);
    setFetchStatus(true);
  };
  const handleLike = (event) => {
    const id = parseInt(event.target.value);
    console.log(id);
  };

  useEffect(() => {
    if (fetchStatus === true) {
      renderDataWebinar();
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <div className="webinar-page py-4">
      <div className="container">
        <h2>Webinar </h2>
        <CategoryBtn
          kategori={kategori}
          handleClear={handleClear}
          handleKategori={handleKategori}
        />
        <div className="row">
          {filteredWebinar !== null ? (
            filteredWebinar.map((el) => (
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
                    <button value={el.id} onClick={checkIfPostLiked}>
                      like
                    </button>
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
  );
}

export default Webinar;
