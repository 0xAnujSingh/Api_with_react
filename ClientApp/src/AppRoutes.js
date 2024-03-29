import { Counter } from "./components/Update";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/PostDealer";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
