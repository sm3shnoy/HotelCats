import { Outlet } from "react-router";
import { Footer } from "../Footer";
import { Header } from "../Header";
import st from "./style.module.scss";

export const Layout = () => {
  return (
    <main className={st.main}>
      <Header />
      <div className={st.container}>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};
