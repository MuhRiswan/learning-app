import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const Profile = () => {
  const localUser = JSON.parse(Cookies.get('user'));
  // const { uid } = localUser.user;
  console.log(localUser.uid);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const fetchProfile = async () => {
    try {
      const q = query(
        collection(db, 'users'),
        where('uid', '==', localUser.uid)
      );
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setProfile(data);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');
    fetchProfile();
  }, [user, loading]);
  return (
    <div>
      Profile
      <p>Nama: {profile.name}</p>
      <img src={profile.profile_image} />
    </div>
  );
};

export default Profile;
