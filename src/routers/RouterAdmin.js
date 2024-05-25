import Category from "../pages/backend/category";
import Product from "../pages/backend/Product";
import Orderdetail from "../pages/backend/Orderdetail";
import Order from "../pages/backend/Order";
const RouterAdmin = [
  {
    path: "Product",
    element: <Product />,
  },
  {
    path: "category",
    element: <Category />,
  },
  {
    path: "orderdetail",
    element: <Orderdetail />,
  },
  {
    path: "order",
    element: <Order />,
  },
  {
    path: "orderdetail",
    element: <Orderdetail />,
  },
];
export default RouterAdmin;
