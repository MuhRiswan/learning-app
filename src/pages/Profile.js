import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  query,
  collection,
  getDocs,
  where,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

const Profile = () => {
  const localUser = JSON.parse(Cookies.get('user'));
  const [input, setInput] = useState({
    name: '',
    profile_image: '',
  });
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
      setInput({
        name: data.name,
        profile_image: data.profile_image,
      });
    } catch (err) {
      Swal.fire({
        title: 'Error!',
        text: 'An error occured while fetching user data',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleUbahProfil = async (event) => {
    event.preventDefault();

    let { name, profile_image } = input;
    if (name === '' || profile_image === '') {
      Swal.fire({
        title: 'Inputan kosong!',
        text: 'Silahkan isi semua form',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    } else {
      const q = query(
        collection(db, 'users'),
        where('uid', '==', localUser.uid)
      );
      const refDoc = await getDocs(q);

      const data = refDoc.docs[0].data();
      const docRef = doc(db, 'users', data.uid);
      updateDoc(docRef, {
        name: name,
        profile_image: profile_image,
      })
        .then((response) => {
          Swal.fire({
            title: 'Berhasil!',
            text: 'Berhasil mengubah profil',
            icon: 'success',
            confirmButtonText: 'OK',
            allowOutsideClick: false,
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload(false);
            }
          });
        })
        .catch((error) => {
          Swal.fire({
            title: 'Error!',
            text: 'An error occured while fetching user data',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        });
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
      <p>Email: {profile.email}</p>
      <img src={profile.profile_image} />
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleUbahProfil}>
                <label>
                  Nama
                  <input
                    name="name"
                    onChange={handleChange}
                    value={input.name}
                    type="name"
                    placeholder="name"
                  />
                </label>
                <label>
                  Link Foto Profil
                  <input
                    name="profile_image"
                    onChange={handleChange}
                    value={input.profile_image}
                    type="profile_image"
                    placeholder="profile_image"
                  />
                </label>
                <button type="submit" class="btn btn-primary">
                  Save changes
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
