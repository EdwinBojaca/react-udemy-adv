import { LazyExoticComponent, lazy } from "react";
// import { LazyPages1, LazyPages2, LazyPages3 } from "../01-lazyload/pages";

import { NoLazy } from "../01-lazyload/pages/NoLazy";
type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  // Component: () => JSX.Element;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: Route[] = [
  {
    to: "/lazyload/*",
    path: "/lazyload/",
    // Component: LazyPages1,
    Component: LazyLayout,
    name: "LazyLayout - Dash",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    // Component: LazyPages2,
    Component: NoLazy,
    name: "No Lazy",
  },
];
