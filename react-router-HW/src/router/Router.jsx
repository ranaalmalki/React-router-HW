import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Desert from "../pages/Desert";
import Forest from "../pages/Forest";
import Mountains from "../pages/Mountains";
import Sea from "../pages/Sea";
import Valley from "../pages/valley";
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
        path: "/mountains",
        element: <Mountains/>,
      },
      {
        path: "/sea",
        element: <Sea/>,
      },
      {
        path: "/valley",
        element: <Valley/>,
      },
  ]);
  export default Router