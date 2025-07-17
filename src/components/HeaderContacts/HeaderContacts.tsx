import st from "./style.module.scss";

export const HeaderContacts = () => {
  return (
    <div className={st.contacts}>
      <a className={st.phone} href="tel:88003335599">
        8 (800) 333-55-99
      </a>
    </div>
  );
};
