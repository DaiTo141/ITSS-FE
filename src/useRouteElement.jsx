import { useRoutes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Food from "./pages/Food";
import User from "./pages/User";
import Review from "./pages/Review";
import Info from "./pages/Info";

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: "/",
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      ),
    },
    {
      path: "/info",
      element: (
        <MainLayout>
          <Info></Info>
        </MainLayout>
      ),
    },
    {
      path: "/restaurant",
      index: true,
      element: (
        <MainLayout>
          <Restaurant />
        </MainLayout>
      ),
    },
    {
      path: "/food",
      element: (
        <MainLayout>
          <Food />
        </MainLayout>
      ),
    },
    {
      path: "/user",
      element: (
        <MainLayout>
          <User />
        </MainLayout>
      ),
    },
    {
      path: "/review",
      element: (
        <MainLayout>
          <Review />
        </MainLayout>
      ),
    },
  ]);
  return routeElement;
}
