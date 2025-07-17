import { useState } from "react";
import cn from "classnames";
import { HeaderContacts } from "../HeaderContacts";
import st from "./style.module.scss";
import { Socials } from "../Socials";
import { Menu } from "../Menu";

export const Navigation = () => {
  const [menuState, setMenuState] = useState(false);

  const menuToggle = () => {
    setMenuState((prev) => !prev);
  };

  return (
    <nav className={cn(st.nav, { [st.navOpened]: menuState })}>
      <button className={st.navToggleButton} onClick={menuToggle} type="button">
        <span>Открыть меню</span>
      </button>
      <div className={st.navInner}>
        <div className={st.container}>
          <Menu />
          <HeaderContacts />
          <Socials />
        </div>
      </div>
    </nav>
  );
};
