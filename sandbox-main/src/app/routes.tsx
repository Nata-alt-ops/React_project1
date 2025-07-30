import React from 'react';
import {Navigate, Outlet, Route, Routes} from 'react-router-dom';
import {Layout} from "../components/layout";
import {Users} from "../pages/users";
import {UserCard} from "../pages/user-card";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <Layout>
              <Outlet />
            </Layout>
        }
      >
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserCard />} />
        <Route path="news" element={<>Новости</>} />
        <Route path="about_us" element={<>О нас</>} />
        <Route index element={<Navigate to="/users" />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
