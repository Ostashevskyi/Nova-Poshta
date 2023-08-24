import React from "react";

import { createBrowserRouter } from "react-router-dom";

import SearchPage from "./pages/Home/SearchPage";
import PricePage from "./pages/PricePage/PricePage";
import TrackingPage from "./pages/TrackingPage/TrackingPage";

import App from "./App";

const router = createBrowserRouter([
  {
    path: `Nova-Poshta/:lng`,
    element: <App />,
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
]);

export default router;
