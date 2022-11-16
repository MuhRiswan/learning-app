import React from 'react';
import { GlobalProvider } from '../context/GlobalContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import AdminDashboard from '../pages/adminDashboard';
import WebinarData from '../pages/webinarData';
import PodcastData from '../pages/podcastData';
import AdminAddDataWebinar from '../pages/adminAddDataWebinar';
import AdminAddDataPodcast from '../pages/adminAddDataPodcast';
// import Layout from '../components/Layout';
// import LoginRoute from '../components/LoginRoute';
import RegisterRoute from '../components/registerRoute';
import AdminLoginRoute from '../components/adminLoginRoute';
import AdminRoute from '../components/adminRoute';
import AdminLayout from '../components/adminLayout';
// import LayoutDashboard from '../components/LayoutDashboard';
// import DataTable from '../components/DataTable';
// import DataForm from '../components/DataForm';
// import Profile from '../components/Profile';
// import ChangePass from '../components/ChangePass';
// import Navbar from '../components/Navbar';
// import Dashboard from '../pages/Dashboard';
// import DashboardRoute from '../components/DashboardRoute';
// import DetailPage from '../pages/DetailPage';
// import Page404 from '../components/Page404';

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            {/* <Route path="*" element={<Page404 />} /> */}
            <Route
              path="/"
              element={
                // <Layout>
                <Home />
                // </Layout>
              }
            />
            {/* <Route
              path="/job/:id"
              element={
                <Layout>
                  <DetailPage />
                </Layout>
              }
            /> */}
            {/* <Route path="/login" element={<LoginRoute />} /> */}
            <Route path="/register" element={<RegisterRoute />} />
            <Route path="/adminLogin" element={<AdminLoginRoute />} />
            <Route
              path="/admin/adminDashboard"
              element={
                <AdminRoute>
                  <AdminLayout>
                    <AdminDashboard />
                  </AdminLayout>
                </AdminRoute>
              }
            />
            <Route
              path="/admin/dataWebinar"
              element={
                <AdminRoute>
                  <AdminLayout>
                    <WebinarData />
                  </AdminLayout>
                </AdminRoute>
              }
            />
            <Route
              path="/admin/InputWebinar"
              element={
                <AdminRoute>
                  <AdminLayout>
                    <AdminAddDataWebinar />
                  </AdminLayout>
                </AdminRoute>
              }
            />
            <Route
              path="/admin/InputWebinar/edit/:IdData"
              element={
                <AdminRoute>
                  <AdminLayout>
                    <AdminAddDataWebinar />
                  </AdminLayout>
                </AdminRoute>
              }
            />
            <Route
              path="/admin/dataPodcast"
              element={
                <AdminRoute>
                  <AdminLayout>
                    <PodcastData />
                  </AdminLayout>
                </AdminRoute>
              }
            />
            <Route
              path="/admin/InputPodcast"
              element={
                <AdminRoute>
                  <AdminLayout>
                    <AdminAddDataPodcast />
                  </AdminLayout>
                </AdminRoute>
              }
            />
            <Route
              path="/admin/InputPodcast/edit/:IdData"
              element={
                <AdminRoute>
                  <AdminLayout>
                    <AdminAddDataPodcast />
                  </AdminLayout>
                </AdminRoute>
              }
            />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
};

export default Routers;
