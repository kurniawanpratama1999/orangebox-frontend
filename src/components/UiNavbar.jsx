import { Link, useLocation } from "react-router";
import { BiMenu } from "@react-icons/all-files/bi/BiMenu";
import { useState } from "react";
import { createPortal } from "react-dom";

const CurrentLocation = ({ to, children }) => {
  const location = useLocation();
  const linkStyle =
    "font-montserrat hover:font-semibold hover:italic transition-all";
  return (
    <Link
      to={to}
      className={[
        location.pathname == to ? "font-bold" : "font-normal",
        linkStyle,
      ].join(" ")}>
      {children}
    </Link>
  );
};

const Nav = ({ isMenuActive, menus = [] }) => {
  return createPortal(
    <div
      className={[
        isMenuActive ? "top-12" : "-top-full z-9",
        "fixed left-0 right-0 transition-all",
      ].join(" ")}>
      <nav className="flex flex-col gap-y-2 bg-orange-300 p-3 text-black">
        {menus.map((v, i) => (
          <CurrentLocation key={`menu-${i}-${v.label}`} to={v.to}>
            {v.label}
          </CurrentLocation>
        ))}
      </nav>
    </div>,
    document.body
  );
};

export const UiNavbarGeneral = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const handleMenu = () => {
    setMenuActive(() => !isMenuActive);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-orange-500 z-10">
      <div className="h-12 px-2 flex items-center justify-between">
        <h1
          style={{ textShadow: "1px 1px 1px var(--color-amber-950)" }}
          className="font-google text-xl font-extrabold text-amber-100">
          OrangeBox
        </h1>
        <button onClick={handleMenu}>
          <BiMenu className="text-3xl text-white" />
        </button>
      </div>
      <Nav
        isMenuActive={isMenuActive}
        menus={[
          { to: "/", label: "Home" },
          { to: "/", label: "Products" },
          { to: "/", label: "Testimoni" },
          { to: "/", label: "Address" },
          { to: "/", label: "Booking" },
        ]}
      />
    </header>
  );
};

export const UiNavbarDashboard = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const handleMenu = () => {
    setMenuActive(() => !isMenuActive);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-orange-500 z-10">
      <div className="h-12 px-2 flex items-center justify-between">
        <h1
          style={{ textShadow: "1px 1px 1px var(--color-amber-950)" }}
          className="font-google text-xl font-extrabold text-amber-100">
          Dashboard
        </h1>
        <button onClick={handleMenu}>
          <BiMenu className="text-3xl text-white" />
        </button>
      </div>
      <Nav
        isMenuActive={isMenuActive}
        menus={[
          { to: "/admin/user", label: "User Active" },
          { to: "/", label: "Product Categories" },
          { to: "/", label: "Product Items" },
          { to: "/", label: "Profile Owner" },
          { to: "/", label: "Profile UMKM" },
          { to: "/", label: "Merchants" },
          { to: "/", label: "Testimoni" },
        ]}
      />
    </header>
  );
};
