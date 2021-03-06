import { Outlet } from "react-router-dom";

import { categories } from "../../categories";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
