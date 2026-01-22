import { UiFooter } from "@/components/UiFooter";
import { Link, Outlet } from "react-router";
export const MenuLayout = () => {
  return (
    <>
      <header className="bg-neutral-200 h-12 flex items-center justify-between px-3">
        <h1 className="text-2xl font-extrabold text-orange-600">List Menu</h1>
        <nav className="text-orange-700">
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main className="max-w-dvw overflow-hidden bg-neutral-300">
        <Outlet />
      </main>
      <UiFooter />
    </>
  );
};
