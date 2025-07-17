import { Link } from "react-router-dom";
import cn from "classnames";
import logo from "@/assets/icons/icon-logo.svg";
import st from "./style.module.scss";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link className={cn(st.logo, className)} to="/" aria-label="HotelCats">
      <img src={logo} width="46" height="38" alt="" />
    </Link>
  );
};
