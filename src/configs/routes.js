import { lazy } from "react";

const routes = [
  {
    title: "home",
    path: "/",
    exact: true,
    component: () => lazy(() => import("../pages/home"))
  },
  {
    title: "blog",
    path: "/blog",
    exact: true,
    component: () => lazy(() => import("../pages/blog"))
  }
];
export default routes;
