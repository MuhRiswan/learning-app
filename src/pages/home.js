import React, { useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import ScheduleApp from '../components/ScheduleApp';
import { logout } from '../firebase';
import { GlobalContext } from '../context/GlobalContext';

const Home = () => {
  const { contextState, contextFunctions } = useContext(GlobalContext);
  const { setIsLoggedIn, isLoggedIn, fetchStatus, setFetchStatus } =
    contextState;
  const logoutBtn = () => {
    if (isLoggedIn) {
      return <button onClick={logouthandler}>Logout</button>;
    } else {
      return null;
    }
  };
  function logouthandler() {
    const confirmation = window.confirm('Yakin ingin logout?');
    if (confirmation) {
      logout();
      Cookies.remove('token');
      Cookies.remove('user');
      setIsLoggedIn(false);
      window.alert('Logout berhasil!');
    }
  }
  useEffect(() => {
    if (Cookies.get('token') !== undefined) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <>
      <div className="home container-fluid">
        <div className="">
          <p>Home</p>
          {logoutBtn()}
        </div>
      </div>
      <ScheduleApp />
    </>
  );
};

export default Home;
