import React from 'react';
import Cookies from 'js-cookie';

const Home = () => {
  function logouthandler() {
    const confirmation = window.confirm('Yakin ingin logout?');
    if (confirmation) {
      Cookies.remove('token');
      Cookies.remove('user');
      window.alert('Logout berhasil!');
    }
  }
  return (
    <div className="home container-fluid">
      <div className="">
        <p>Home</p>
        {Cookies.get('token') !== undefined && (
          <button onClick={logouthandler}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Home;
