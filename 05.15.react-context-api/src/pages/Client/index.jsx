import { Outlet } from "react-router-dom";
import Header from "../../layouts/Client/Header";

const ClientLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default ClientLayout;
