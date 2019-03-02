import { lazy } from "react";

const routes = [
  {
    title: "home",
    path: "/",
    exact: true,
    visibleIn: ["header", "footer"],
    component: () => lazy(() => import("../pages/home"))
  },
  {
    title: "blog",
    path: "/blog",
    exact: true,
    visibleIn: ["header", "footer"],
    component: () => lazy(() => import("../pages/blog"))
  },
  {
    title: "",
    path: "/blog/:slug",
    exact: true,
    visibleIn: [],
    component: () => lazy(() => import("../pages/single-article"))
  }
];
export default routes;

export const visibleRoutes = ({ visibleIn } = {}) =>
  routes.filter(route => {
    if (visibleIn) {
      return route.visibleIn.find(visible => visible === visibleIn[0]);
    } else {
      return route.visibleIn.length > 0;
    }
  });
