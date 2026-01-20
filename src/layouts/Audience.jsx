import { Outlet } from "react-router";
import { BiMenu } from "@react-icons/all-files/bi/BiMenu";

export const AudienceLayout = () => {
  return (
    <>
      <main className="max-w-dvw overflow-hidden bg-neutral-300">
        <Outlet />
      </main>
      <footer className="bg-orange-600 text-white p-2 text-sm">
        <div className="mb-5">
          <h2 className="text-base font-semibold mb-2">Sosial Media</h2>
          <div className="space-y-3 pl-3 border-l border-white ml-3">
            <div>
              <h2 className="font-bold">Whatsapp</h2>
              <p>0890 1234 5678</p>
            </div>
            <div>
              <h2 className="font-bold">Instagram</h2>
              <p>@orangefood_</p>
            </div>
            <div>
              <h2 className="font-bold">Email</h2>
              <p>orangefood.gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <h2 className="text-base font-semibold mb-2">Link Terkait</h2>
          <div className="space-y-3 pl-3 border-l border-white ml-3">
            <div>
              <p>Home</p>
            </div>
            <div>
              <p>Favorite Menu</p>
            </div>
            <div>
              <p>Fasilitas dan Tempat</p>
            </div>
            <div>
              <p>Testimoni</p>
            </div>
            <div>
              <p>Booking</p>
            </div>
            <div>
              <p>Lokasi</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const Header = () => {
  return (
    <header className="h-12 bg-white/10 backdrop-blur text-orange-500 fixed z-100 top-0 left-0 right-0">
      <div className="px-3 flex items-center justify-between h-full">
        <h1 className="font-semibold text-2xl [text-shadow:.5px_.5px_.5px_black]">
          OrangeBox
        </h1>
        <button className="text-2xl">
          <BiMenu />
        </button>
        <nav className="gap-x-10 hidden">
          <a href="">Home</a>
          <a href="">FnB</a>
          <a href="">Testimoni</a>
          <a href="">Booking</a>
          <a href="">QnA</a>
        </nav>
      </div>
    </header>
  );
};
