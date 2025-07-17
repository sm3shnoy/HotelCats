import fbIcon from "@/assets/icons/icon-fb.svg";
import instaIcon from "@/assets/icons/icon-insta.svg";
import vkIcon from "@/assets/icons/icon-vk.svg";
import st from "./style.module.scss";

export const Socials = () => {
  return (
    <ul className={st.list}>
      <li className={st.item}>
        <a
          className={(st.link, st.linkFb)}
          href="#"
          target="_blank"
          rel="noopener"
        >
          <span className={st.visuallyHidden}>Мы в Фейсбуке</span>
          <img src={fbIcon} width="22" height="22" alt="Фейсбук" />
        </a>
      </li>
      <li className={st.item}>
        <a
          className={(st.link, st.linkInsta)}
          href="#"
          target="_blank"
          rel="noopener"
        >
          <span className={st.visuallyHidden}>Мы в Инстаграме</span>
          <img src={instaIcon} width="22" height="22" alt="Инстаграм" />
        </a>
      </li>
      <li className={st.item}>
        <a
          className={(st.link, st.linkVk)}
          href="#"
          target="_blank"
          rel="noopener"
        >
          <span className={st.visuallyHidden}>Мы в ВКонтакте</span>
          <img src={vkIcon} width="22" height="22" alt="ВКонтакте" />
        </a>
      </li>
    </ul>
  );
};
