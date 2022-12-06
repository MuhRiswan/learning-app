import React, { useContext, useMemo, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import CategoryBtn from './CategoryBtn';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import axios from 'axios';

function Webinar() {
  let navigate = useNavigate();
  const [kategori, setKategori] = useState('');
  const { contextState, contextFunctions } = useContext(GlobalContext);
  const { arrayWebinar, fetchStatus, setFetchStatus } = contextState;
  const { renderDataWebinar, getUID } = contextFunctions;

  const handleKategori = (event) => {
    event.preventDefault();
    setKategori(event.target.value);
  };

  const handleClear = (event) => {
    event.preventDefault();
    setKategori('');
  };

  const filteredWebinar = useMemo(() => {
    if (kategori === '') {
      return arrayWebinar;
    } else if (kategori !== null) {
      return arrayWebinar.filter((el) => el.kategori == kategori);
    }
  }, [kategori, arrayWebinar]);

  const handleDetail = (event) => {
    const id = parseInt(event.target.getAttribute('data-item'));

    navigate(`/webinar/${id}`);
    setFetchStatus(true);
  };

  const checkIfPostLiked = (id) => {
    const filteredDetail = arrayWebinar.find((el) => el.id === Number(id));
    //
    const likeArray = filteredDetail.like;
    const checkInclude = likeArray.includes(getUID());
    return checkInclude;
  };

  useEffect(() => {
    if (fetchStatus === true) {
      renderDataWebinar();
    }
  }, [fetchStatus]);

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
                    {checkIfPostLiked(el.id) === true ? (
                      <p>
                        <BsHeartFill /> {el.like.length}
                      </p>
                    ) : (
                      <p>
                        <BsHeart /> {el.like.length}
                      </p>
                    )}
                    {/* <span>
                      {likeLength(el.id) !== 0 ? likeLength(el.id) : null}
                    </span> */}
                    <h3>
                      <a onClick={handleDetail} data-item={el.id}>
                        {el.judul}
                      </a>
                    </h3>
                    <p className="deskripsi my-4">{el.deskripsi}</p>
                    <p>{el.tanggal}</p>
                    {/* {checkIfPostLiked(el.id) === true ? (
                      <button value={el.id} onClick={checkIfPostLiked}>
                        like
                      </button>
                    ) : (
                      <button value={el.id} onClick={checkIfPostLiked}>
                        dislike
                      </button>
                    )} */}
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
