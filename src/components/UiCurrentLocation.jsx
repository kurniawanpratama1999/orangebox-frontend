import { NavLink } from "react-router";

export const UiCurrentLocation = ({ to, children, onClick }) => {
  const linkStyle =
    "font-montserrat hover:font-semibold hover:italic transition-all";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        (isActive ? "font-bold" : "font-normal") + " " + linkStyle
      }
      onClick={onClick}>
      {children}
    </NavLink>
  );
};
