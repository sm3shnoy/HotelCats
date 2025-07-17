import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import st from "./style.module.scss";

export const Header = () => {
  return (
    <header className={st.header}>
      <div className={st.container}>
        <Logo className={st.logo} />
        <Navigation />
      </div>
    </header>
  );
};
