import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Courses from "./pages/courses/Courses.tsx";
import Error from "./pages/error/Error.tsx";
import Alocation from "./pages/alocation-partner/Modules.tsx";
import AlocationDetails from "./pages/alocation-partner/alocations/components/home-components/ModuleDetails.tsx";
import Initiatives from "./pages/initiatives/Initiatives.tsx";
import './index.css';
import LoginPage from "./pages/login/LoginPage.tsx";
import PartnerRegistration from "./pages/partner/partner-registration/partner-registration.tsx";
import HomePartner from "./pages/partner/home-partner/HomePartner.tsx";
import ProjectRegistration from "./pages/partner/project-registration/project-registration.tsx";
import ProjectsPage from "./pages/partner/projects-page/ProjectsPage.tsx";
import ProfileEdit from "./pages/partner/profile-partner/ProfileEdit.tsx";
import InitiativeDetails from "./pages/initiatives/components/InitiativeDetails.tsx";
import SprintsPage from "./pages/partner/sprints-page/SprintsPage.tsx";
import AnalystRegistration from "./pages/analyst-registration/analyst-registration.tsx";
import InfoInitiative from "./pages/partner/alocation-partner/alocations/InfoInitiative.tsx";
import InfoModule from "./pages/alocation-partner/alocations/components/status-components/InfoModule.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <LoginPage/>,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/alocation",
        element: <Alocation />,
      },
      {
        path: "/alocation/:id",
        element: <AlocationDetails />,
      },
      {
        path: "/status-module/:id",
        element: <InfoModule />,
      },
      {
        path: "/initiatives",
        element: <Initiatives />,
      },
      {
        path: "/initiatives/:id",
        element: <InitiativeDetails />,
      },
      {
        path: "/analyst-registration",
        element: <AnalystRegistration />,
      },
      {
        path: "/partner-registration",
        element: <PartnerRegistration />,
      },
      {
        path: "/home-partner",
        element: <HomePartner />,
      },
      {
        path: "/project-registration",
        element: <ProjectRegistration />,
      },
      {
        path: "/profile-partner",
        element: <ProfileEdit />,
      },
      {
        path: "/projects-page",
        element: <ProjectsPage />,
      },
      {
        path: "/status-initiative",
        element: <InfoInitiative />,
      },
      {
        path: "/initiatives/:id",
        element: <InitiativeDetails />,
      },
      {
        path: "/sprints",
        element: <SprintsPage />,
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);