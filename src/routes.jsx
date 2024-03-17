import React from "react";

import { createBrowserRouter } from "react-router-dom";

import SearchPage from "./pages/Home/SearchPage";
import PricePage from "./pages/PricePage/PricePage";
import TrackingPage from "./pages/TrackingPage/TrackingPage";

import App from "./App";

const headerRoutes = [
  {
    path: `/`,
    element: <App />,
    children: [
      {
        index: true,
        element: <SearchPage />,
      },
    ],
  },
];

const appRoutes = [
  {
    path: `/`,
    element: <App />,
    children: [
      {
        path: `:lng`,
        children: [
          {
            index: true,
            element: <SearchPage />,
          },
          {
            path: `delivery-price`,
            element: <PricePage />,
          },
          {
            path: `delivery-tracking`,
            element: <TrackingPage />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter([...headerRoutes, ...appRoutes]);

export default router;
