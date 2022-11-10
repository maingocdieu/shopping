import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { GlobalCss } from "./page/globalcss/global";
import { Login } from "./page/login/Login";
import { Slide } from "./page/slides/Slide";
import { Main } from "./page/user/main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path: "/home",
    element: <Main />
  }
  ,
  {
    path: "/slide",
    element: <Slide />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalCss>
      <RouterProvider router={router} />
    </GlobalCss>
    {/* <App /> */}
  </React.StrictMode>
);
