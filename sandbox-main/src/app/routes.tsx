import React from 'react';
import {Navigate, Outlet, Route, Routes} from 'react-router-dom';
import {Layout} from "../components/layout";
import {Users} from "../pages/users";
import {UserCard} from "../pages/user-card";
import {News} from "../pages/news";
import { AuthGuard } from '../pages/AuthGuard/AuthGuard';
import { LoginForm } from '../pages/Login/LoginForm';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthGuard privateFallback={<LoginForm />}>
            <Layout>
              <Outlet />
            </Layout>
            </AuthGuard>
        }
      >
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserCard />} />
        <Route path="news" element={<News />} />
        <Route path="about_us" element={<>О нас</>} />
        <Route index element={<Navigate to="/users" />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
