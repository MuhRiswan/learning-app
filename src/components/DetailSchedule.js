import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import Cookies from 'js-cookie';
import axios from 'axios';

function DetailSchedule() {
  const userLocal = JSON.parse(Cookies.get('user'));
  const localUID = userLocal.uid;
  const { id } = useParams();
  const [filtered, setFiltered] = useState([]);
  const [likeArray, setLikeArray] = useState([]);
  const length = likeArray.length;
  console.log(length);
  // console.log(Number(id));
  const { contextState, contextFunctions } = useContext(GlobalContext);
  const {
    arrayWebinar,
    arrayPodcast,
    setArrayWebinar,
    fetchStatus,
    setFetchStatus,
  } = contextState;
  const { renderDataWebinar } = contextFunctions;
  const filteredDetail = arrayWebinar.find((el) => el.id === Number(id));
  // console.log(arrayWebinar);
  console.log(likeArray);
  // console.log(checkIfPostLiked(7));
  const linkDaftar = () => {
    return `https://${filtered.link_daftar}`;
  };

  const checkIfPostLiked = () => {
    const checkInclude = likeArray.includes(localUID);
    return checkInclude;
    console.log(checkInclude);
  };

  useEffect(() => {
    axios
      .get(`https://webinar-server-new.herokuapp.com/webinar/${id}`)
      .then((response) => {
        const res = response.data;
        setFiltered(res);
        setLikeArray(res.like);
      });
  }, []);
  return (
    <div className="detail-page py-5">
      <div className="detail-page__image px-5 py-2">
        <img className="img-fluid rounded-3" src={filtered.image} />
      </div>
      <div className="detail-page__body container text-lg-start mt-5">
        {checkIfPostLiked(filtered.id) ? (
          <button value={filtered.id} onClick={checkIfPostLiked}>
            dislike {length}
          </button>
        ) : (
          <button value={filtered.id} onClick={checkIfPostLiked}>
            like
          </button>
        )}
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
        <ul>
          <li>Hari / Tanggal: {filtered.tanggal}</li>
          {/* {tanggal} */}
          <li>Waktu: {filtered.waktu}</li>
          {/* {waktu} */}
          <li>Via: {filtered.via}</li>
          {/* {via} */}
        </ul>
        <div className="detail-page__desrkipsi">
          <span className="fw-bold">Deskripsi:</span>
          {/* {deskripsi} */}
          <p>{filtered.deskripsi}</p>
        </div>
        <a
          className="detail-page__button btn position-relative px-5"
          href={linkDaftar()}
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

export default DetailSchedule;
