import React, { useContext, useMemo, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import CategoryBtn from './CategoryBtn';

function Podcast() {
  let navigate = useNavigate();
  const [kategori, setKategori] = useState('');
  const { contextState, contextFunctions } = useContext(GlobalContext);
  const { arrayPodcast, fetchStatusPodcast, setFetchStatusPodcast } =
    contextState;
  const { renderDataPodcast } = contextFunctions;

  const handleKategori = (event) => {
    event.preventDefault();
    setKategori(event.target.value);
  };

  const handleClear = (event) => {
    event.preventDefault();
    setKategori('');
  };

  const filterCategory = arrayPodcast.find((el) => el.kategori === kategori);

  const filteredPodcast = useMemo(() => {
    if (kategori === '') {
      return arrayPodcast;
    } else if (kategori !== null) {
      return arrayPodcast.filter((el) => el.kategori == kategori);
    }
  }, [kategori, arrayPodcast]);

  console.log(filterCategory);
  console.log(arrayPodcast);
  const handleDetail = (event) => {
    const id = parseInt(event.target.getAttribute('data-item'));
    // console.log(id);
    navigate(`/podcast/${id}`);
    setFetchStatusPodcast(true);
  };

  useEffect(() => {
    if (fetchStatusPodcast === true) {
      renderDataPodcast();
    }
  }, [fetchStatusPodcast, setFetchStatusPodcast]);
  return (
    <div className="podcast-page py-4">
      <div className="container">
        <h2>Podcast</h2>
        <CategoryBtn
          kategori={kategori}
          handleClear={handleClear}
          handleKategori={handleKategori}
        />
        <div className="row">
          {filteredPodcast !== null ? (
            filteredPodcast.map((el) => (
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

export default Podcast;
