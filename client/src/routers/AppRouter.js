import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AccountPage from '../pages/AccountPage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectPage from '../pages/ProjectPage';
import UsersPage from '../pages/admin/UsersPage';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../components/layouts/Layout';
import PrivateRoute from './PrivateRoute';
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route element={<PrivateRoute />}>
            <Route exact path="/account" element={<AccountPage />} />
            <Route exact path="/projects" element={<ProjectsPage />} />
            <Route exact path="/project/:projectId" element={<ProjectPage />} />
            <Route exact path="/admin/:projectId" element={<UsersPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
