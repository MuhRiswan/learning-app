import React, { createContext, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  let navigate = useNavigate();
  const [fetchStatus, setFetchStatus] = useState(true);
  const [fetchStatusPodcast, setFetchStatusPodcast] = useState(true);
  const [arrayWebinar, setArrayWebinar] = useState([]);
  const [arrayPodcast, setArrayPodcast] = useState([]);
  const [currentId, setcurrentId] = useState(-1);
  const [inputWebinar, setInputWebinar] = useState({
    judul: '',
    sumber: '',
    narasumber: '',
    deskripsi: '',
    via: '',
    link_daftar: '',
    image: '',
    kategori: '',
    tanggal: '',
    waktu: '',
  });
  const [inputPodcast, setInputPodcast] = useState({
    judul: '',
    sumber: '',
    narasumber: '',
    deskripsi: '',
    link: '',
    image: '',
    kategori: '',
  });

  const renderDataWebinar = () => {
    axios
      .get('https://webinar-server-app.herokuapp.com/webinar')
      .then((res) => {
        const tempArr = res.data.map((el) => {
          //   console.log(el);
          return el;
        });
        setArrayWebinar(tempArr);
        // console.log(res);
      })
      .catch((e) => console.log(e));
    setFetchStatus(false);
  };

  const renderDataPodcast = () => {
    axios
      .get('https://webinar-server-app.herokuapp.com/podcast')
      .then((res) => {
        const tempArr = res.data.map((el) => {
          //   console.log(el);
          return el;
        });
        setArrayPodcast(tempArr);
        // console.log(res);
      })
      .catch((e) => console.log(e));
    setFetchStatusPodcast(false);
  };

  const handleChangeWebinar = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInputWebinar({ ...inputWebinar, [name]: value });
  };

  const handleChangePodcast = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInputPodcast({ ...inputPodcast, [name]: value });
  };

  const handleSubmitWebinar = (event) => {
    event.preventDefault();
    let {
      judul,
      sumber,
      narasumber,
      deskripsi,
      via,
      link_daftar,
      image,
      kategori,
      tanggal,
      waktu,
    } = inputWebinar;
    console.log(inputWebinar);

    if (currentId === -1) {
      axios
        .post('https://webinar-server-app.herokuapp.com/webinar', {
          judul,
          sumber,
          narasumber,
          deskripsi,
          via,
          link_daftar,
          image,
          kategori,
          tanggal,
          waktu,
        })
        .then((response) => {
          console.log(response);
          setFetchStatus(true);
          navigate('/admin/dataWebinar');
        });
    } else {
      axios
        .put(`https://webinar-server-app.herokuapp.com/webinar/${currentId}`, {
          judul,
          sumber,
          narasumber,
          deskripsi,
          via,
          link_daftar,
          image,
          kategori,
          tanggal,
          waktu,
        })
        .then((response) => {
          console.log(response);
          setFetchStatus(true);
          navigate('/admin/dataWebinar');
        });
    }
    setcurrentId(-1);
    setInputWebinar({
      judul: '',
      sumber: '',
      narasumber: '',
      deskripsi: '',
      via: '',
      link_daftar: '',
      image: '',
      kategori: '',
      tanggal: '',
      waktu: '',
    });
  };

  const handleSubmitPodcast = (event) => {
    event.preventDefault();
    let { judul, sumber, narasumber, deskripsi, link, image, kategori } =
      inputPodcast;

    if (currentId === -1) {
      axios
        .post('https://webinar-server-app.herokuapp.com/podcast', {
          judul,
          sumber,
          narasumber,
          deskripsi,
          link,
          image,
          kategori,
        })
        .then((response) => {
          console.log(response);
          setFetchStatus(true);
          navigate('/admin/dataPodcast');
        });
    } else {
      axios
        .put(`https://webinar-server-app.herokuapp.com/podcast/${currentId}`, {
          judul,
          sumber,
          narasumber,
          deskripsi,
          link,
          image,
          kategori,
        })
        .then((response) => {
          console.log(response);
          setFetchStatus(true);
          navigate('/admin/dataPodcast');
        });
    }
    setcurrentId(-1);
    setInputPodcast({
      judul: '',
      sumber: '',
      narasumber: '',
      deskripsi: '',
      link: '',
      image: '',
      kategori: '',
    });
  };

  const handleEditWebinar = (event) => {
    const id = parseInt(event.target.value);
    setcurrentId(id);
    navigate(`/admin/InputWebinar/edit/${id}`);
    setFetchStatus(true);
  };

  const handleEditPodcast = (event) => {
    const id = parseInt(event.target.value);
    setcurrentId(id);
    navigate(`/admin/InputPodcast/edit/${id}`);
    setFetchStatus(true);
  };

  const handleDeleteWebinar = (event) => {
    const iddel = parseInt(event.target.value);
    axios
      .delete(`https://webinar-server-app.herokuapp.com/webinar/${iddel}`)
      .then((response) => {
        console.log(response);
        setFetchStatus(true);
      });
  };

  const handleDeletePodcast = (event) => {
    const iddel = parseInt(event.target.value);
    axios
      .delete(`https://webinar-server-app.herokuapp.com/podcast/${iddel}`)
      .then((response) => {
        console.log(response);
        setFetchStatus(true);
      });
  };

  const contextState = {
    arrayWebinar,
    setArrayWebinar,
    arrayPodcast,
    setArrayPodcast,
    fetchStatus,
    setFetchStatus,
    fetchStatusPodcast,
    setFetchStatusPodcast,
    inputWebinar,
    setInputWebinar,
    inputPodcast,
    setInputPodcast,
  };

  const contextFunctions = {
    handleChangeWebinar,
    handleChangePodcast,
    renderDataWebinar,
    renderDataPodcast,
    handleSubmitWebinar,
    handleSubmitPodcast,
    handleEditWebinar,
    handleEditPodcast,
    handleDeleteWebinar,
    handleDeletePodcast,
  };

  return (
    <GlobalContext.Provider
      value={{
        contextState,
        contextFunctions,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
