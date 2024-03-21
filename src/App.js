import HomePage from "./Components/Pages/HomePage";
import RootPage from "./Components/Pages/RootPage";
import ServicePage, { loader } from "./Components/Pages/ServicePage";
import ContactUsPage from "./Components/Pages/ContactUsPage";
import AboutUsPage from "./Components/Pages/AboutUsPage";
import LocationsPage from "./Components/Pages/LocationsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";
import React from "react";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          index: true,
          path: "/Multi_Page_Website",
          element: <HomePage />,
        },
        {
          path: `/Multi_Page_Website/:service`,
          element: <ServicePage />,
          loader: loader,
        },
        {
          path: "/Multi_Page_Website/aboutus",
          element: <AboutUsPage />,
        },
        {
          path: "/Multi_Page_Website/contactus",
          element: <ContactUsPage />,
        },
        {
          path: "/Multi_Page_Website/locations",
          element: <LocationsPage />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
