import { Logo } from "../Logo";
import { Menu } from "../Menu";
import st from "./style.module.scss";

export const Footer = () => {
  return (
    <footer className={st.footer}>
      <div className={st.container}>
        <div className={st.footerTop}>
          <Logo className={st.logo} />
          <Menu isFooter />
        </div>
        <div className={st.footerBottom}>
          <span className={st.copyright}>&copy; 2019 Все права защищены</span>
          <a className={st.policy} href="#">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
};
