import { createHashRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './pages/about-me';
import HomePage from './pages/home';
import Layout from './components/layout';
import WorkExperiencePage from './pages/work-experience';

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
    errorElement: <div>Error</div>,
    children: [
      { path: Paths.root, element: <HomePage /> },
      {
        path: Paths.aboutMe,
        element: <AboutPage />
      },
      {
        path: Paths.workExperience,
        element: <WorkExperiencePage />
      }
    ]
  }
]);

export const Router = () => <RouterProvider router={router} />;
