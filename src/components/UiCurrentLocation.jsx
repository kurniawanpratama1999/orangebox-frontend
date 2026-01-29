import { NavLink } from "react-router";
import { tv } from "tailwind-variants";

export const UiCurrentLocation = ({ to, children, onClick }) => {
  const navlink = tv({
    base: "font-montserrat hover:font-semibold hover:italic transition-all",
    variants: {
      isActive: {
        true: "font-bold",
        false: "font-normal",
      },
    },
  });

  return (
    <NavLink
      to={to}
      className={({ isActive }) => navlink({ isActive })}
      onClick={onClick}>
      {children}
    </NavLink>
  );
};
