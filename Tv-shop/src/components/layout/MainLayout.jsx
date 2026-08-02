import { Outlet } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../features/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;