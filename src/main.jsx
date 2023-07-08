import React, { Suspense } from "react";

import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import store from "./store";

import router from "./routes.jsx";

import "./utils/n18.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
);
