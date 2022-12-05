import React, { useContext, useMemo, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import CategoryBtn from './CategoryBtn';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import axios from 'axios';

function Webinar() {
  let navigate = useNavigate();
  const userLocal = JSON.parse(Cookies.get('user'));
  const localUID = userLocal.uid;
  const [likePostArray, setLikePostArray] = useState();
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
  const { renderDataWebinar, renderDataPodcast, handleEditPodcast } =
    contextFunctions;

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

  // console.log(filterCategory);
  // console.log(arrayWebinar);
  const handleDetail = (event) => {
    const id = parseInt(event.target.getAttribute('data-item'));
    // console.log(id);
    navigate(`/webinar/${id}`);
    setFetchStatus(true);
  };

  const handleDisLike = async (event) => {
    const id = parseInt(event.target.value);
    const filteredDetail = await arrayWebinar.find(
      (el) => el.id === Number(id)
    );

    // console.log(arrayWebinar.find((el) => el.id === Number(id)).like);
    const likeArray = await arrayWebinar.find((el) => el.id === Number(id))
      .like;
    // const i = likeArray.indexOf('fdash3iu452u4234');
    // console.log(i);
    // console.log(likeArray);
    // console.log(likeArray.splice(i, 1));
    // console.log(likeArray);
    setLikePostArray(likeArray);
    const checkInclude = likeArray.includes(localUID);
    if (checkInclude == true) {
      const i = likeArray.indexOf(localUID);
      // axios
      //   .put(`https://webinar-server-new.herokuapp.com/webinar/${id}`, {
      //     ...filteredDetail,
      //     like: likeArray.splice(i, 1),
      //   })
      //   .then((response) => {
      //     console.log(response);
      //     setLikePostArray([]);
      //   });
      console.log(i);
      console.log(likeArray.splice(i, 1));
      // console.log(...arrayWebinar);
    }
  };

  const handleLike = (event) => {
    const id = parseInt(event.target.value);
    const filteredDetail = arrayWebinar.find((el) => el.id === Number(id));

    // console.log(arrayWebinar.find((el) => el.id === Number(id)).like);
    const likeArray = arrayWebinar.find((el) => el.id === Number(id)).like;
    // const i = likeArray.indexOf('fdash3iu452u4234');
    // console.log(i);
    // console.log(likeArray);
    // console.log(likeArray.splice(i, 1));
    // console.log(likeArray);
    setLikePostArray(likeArray);

    const checkInclude = likeArray.includes(localUID);
    if (checkInclude == true) {
      const i = likeArray.indexOf(localUID);
      // console.log(i);
      // console.log(likeArray.splice(i, 1));
      // console.log(...arrayWebinar);
    }
  };
  console.log(arrayWebinar);
  console.log(likePostArray);
  const likeLength = (id) => {
    const filteredDetail = arrayWebinar.find((el) => el.id === Number(id));
    // const checkInclude = likeArray.includes(localUID);
    const likeArray = filteredDetail.like.length;
    return likeArray;

    console.log(likeArray);
  };

  const checkIfPostLiked = (id) => {
    const filteredDetail = arrayWebinar.find((el) => el.id === Number(id));
    //
    const likeArray = filteredDetail.like;
    const checkInclude = likeArray.includes(localUID);
    // console.log(checkInclude);
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
                      <button value={el.id} onClick={handleDisLike}>
                        <BsHeartFill /> {likeLength(el.id)}
                      </button>
                    ) : (
                      <button value={el.id} onClick={handleLike}>
                        <BsHeart /> {likeLength(el.id)}
                      </button>
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
