import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Card } from "./page/card/card";
import { GlobalCss } from "./page/globalcss/global";
import { Login } from "./page/login/Login";
import { Slide } from "./page/slides/Slide";
import { DemoUseMemo } from "./page/learning/useMemo/DemoUseMemo";
import { Main } from "./page/user/main";
import { DemoMemo } from "./page/learning/memo/DemoMemo";
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
  },
  {
    path: "/card",
    element: <Card />
  },
  {
    path: "/useMemo",
    element: <DemoUseMemo />
  },
  {
    path: "/demomemo",
    element: <DemoMemo />
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
