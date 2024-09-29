import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Desert from "../pages/Desert";
import Forest from "../pages/Forest";
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/desert",
        element: <Desert/>,
      },
      {
        path: "/forest",
        element: <Forest/>,
      },
      {
        path: "//mountains",
        element: <App/>,
      },
      {
        path: "/sea",
        element: <App/>,
      },
      {
        path: "/valley",
        element: <App/>,
      },
  ]);
  export default Router