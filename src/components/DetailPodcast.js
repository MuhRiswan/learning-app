import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

function DetailPodcast() {
  const { id } = useParams();
  const [filtered, setFiltered] = useState([]);
  console.log(Number(id));
  const { contextState, contextFunctions } = useContext(GlobalContext);
  const { arrayPodcast, setArrayWebinar, fetchStatus, setFetchStatus } =
    contextState;
  const { renderDataPodcast } = contextFunctions;
  const filteredDetail = arrayPodcast.find((el) => el.id === Number(id));
  console.log(arrayPodcast);

  useEffect(() => {
    if (fetchStatus === true) {
      renderDataPodcast();
      setFiltered(filteredDetail);
    }
  }, []);
  return (
    <div className="detail-page py-5">
      <div className="detail-page__image px-5 py-2">
        <img className="img-fluid rounded-3" src={filtered.image} />
      </div>
      <div className="detail-page__body container text-lg-start mt-5">
        <h2 className="fw-bold mb-3">{filtered.judul}</h2>
        {/* {judul} */}
        <span className="kategori py-2 px-4 text-center rounded-3">
          {filtered.kategori}
        </span>
        {/* {kategori} */}
        <h4 className="mt-3 fw-bold">Narasumber: {filtered.narasumber}</h4>
        {/* {narasumber} */}
        <p className="fw-500 fs-5">Sumber: {filtered.sumber}</p>
        {/* {sumber} */}
        <div className="detail-page__desrkipsi">
          <span className="fw-bold">Deskripsi:</span>
          {/* {deskripsi} */}
          <p>{filtered.deskripsi}</p>
        </div>
        <a
          className="detail-page__button btn position-relative px-5"
          href={filtered.link}
          target="_blank"
          rel="noreferrer"
        >
          Daftar
        </a>
        {/* daftar */}
      </div>
    </div>
  );
}

export default DetailPodcast;
