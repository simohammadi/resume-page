import { createHashRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './pages/about-me';
import HomePage from './pages/home';
import Layout from './components/layouts/layout';
import WorkExperiencePage from './pages/work-experience';
import { ErrorPage } from './pages/error';

export enum Paths {
  root = '/',
  aboutMe = 'about-me',
  workExperience = 'work-experience',
  projects = 'projects'
}

const router = createHashRouter([
  {
    path: Paths.root,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: Paths.root, element: <HomePage />, errorElement: <ErrorPage /> },
      {
        path: Paths.aboutMe,
        element: <AboutPage />,
        errorElement: <ErrorPage />
      },
      {
        path: Paths.workExperience,
        element: <WorkExperiencePage />,
        errorElement: <ErrorPage />
      }
    ]
  }
]);

export const Router = () => <RouterProvider router={router} />;
