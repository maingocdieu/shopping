import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { GlobalCss } from "./page/globalcss/global";
import { Login } from "./page/login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalCss>
      <RouterProvider router={router} />
    </GlobalCss>
    {/* <App /> */}
  </React.StrictMode>
);
