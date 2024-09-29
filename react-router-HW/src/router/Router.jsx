import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Desert from "../pages/Desert";
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
        element: <App/>,
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