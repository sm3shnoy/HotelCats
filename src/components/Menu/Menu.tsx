import st from "./style.module.scss";

export const Menu = ({ isFooter }: { isFooter?: boolean }) => {
  const navListClasses = isFooter ? st.footerNavList : st.navList;
  const navItemClasses = isFooter ? st.footerNavItem : st.navItem;

  return (
    <ul className={navListClasses}>
      <li className={navItemClasses}>
        <a href="#">Почему мы?</a>
      </li>
      <li className={navItemClasses}>
        <a href="#">Номера</a>
      </li>
      <li className={navItemClasses}>
        <a href="#">Отзывы</a>
      </li>
      <li className={navItemClasses}>
        <a href="#">Как нас найти</a>
      </li>
    </ul>
  );
};
