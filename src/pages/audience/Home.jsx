export const Home = () => {
  return (
    <>
      <HeroSection />
      <FavoriteMenu />
      <Fasilitas />
      <CTA />
      <Testimoni />
      <Address />
    </>
  );
};

const Address = () => {
  return (
    <section className="bg-neutral-300 pb-5">
      <div className="w-full h-42 bg-black/5"></div>
      <div className="px-2 mt-1">
        <h2 className="font-bold text-lg">Lokasi kami ada di:</h2>
        <p className="text-sm">
          Jalan Peninggaran Barat II, Kebayoran Lama Utara, Kebayoran Lama,
          Jakarta Selatan.
        </p>
      </div>

      <div className="mt-3 px-2 flex gap-x-3">
        <button className="px-4 py-1 text-sm rounded bg-orange-600 text-white">
          Arahkan
        </button>
        <button className="px-4 py-1 text-sm rounded border border-orange-600 text-orange-700 font-semibold bg-orange-200">
          Hubungi Kami
        </button>
      </div>
    </section>
  );
};

const Testimoni = () => {
  const list = [
    {
      name: "Abdul Khodir",
      said: "Tempatnya nyaman banget, cocok kalau mau nugas.",
    },
    {
      name: "Nabilla Pradisa",
      said: "Makananya enak dan murah, apalagi cemilannya.",
    },
    {
      name: "Kurniawan Pratama",
      said: "Kopinya bikin nagih, pengennya nambah terus.",
    },
    {
      name: "Riyan Artha",
      said: "ada wifi dan colokan, jadi bisa sambil bawa laptop untuk ngerjain tugas",
    },
  ];
  return (
    <section className="py-5 bg-neutral-300">
      <div className="px-2">
        <h2 className="font-bold text-2xl leading-none">Apa Kata Mereka?</h2>
        <span className="text-xs text-orange-700">
          (Geser untuk lihat lainnya)
        </span>
      </div>

      <div className="mt-3 px-2 py-4 flex gap-x-3 overflow-x-auto ">
        {list.map((item, index) => {
          return (
            <div
              key={"testimoni-" + index}
              className="min-w-4xs max-w-xs bg-black/5 shadow rounded pt-5 pb-3">
              <div className="px-5">
                <div className="w-full aspect-square rounded-full bg-white/20"></div>
              </div>
              <div className="px-2 mt-2 text-center text-neutral-800">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-sm italic">"{item.said}"</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="pb-5 bg-black/5">
      <div className="bg-black/10 h-42 flex-center">Gambar</div>
      <div className="px-2 mt-2">
        <h2 className="text-xl font-bold text-center">
          Kamu juga bisa booking tempat untuk acara loh
        </h2>
        <button className="block w-fit mx-auto mt-3 text-sm px-4 py-1 rounded bg-orange-600 text-white">
          Beritahu Kami
        </button>
      </div>
    </section>
  );
};

const Fasilitas = () => {
  const list = [
    { name: "Live Music", src: "" },
    { name: "Toilet", src: "" },
    { name: "Stop Kontak", src: "" },
    { name: "Meja Panjang", src: "" },
    { name: "Musholah", src: "" },
    { name: "Roof Top", src: "" },
  ];
  return (
    <section className="py-5 px-2 container mx-auto bg-linear-180 from-neutral-300 to-black/5">
      <div>
        <h2 className="text-2xl font-bold leading-none">Fasilitas & Tempat</h2>
        <span className="text-xs italic">(Scroll sampai bawah)</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-5">
        {list.map(({ name }, i) => {
          return (
            <div
              key={"fasilitas" + i}
              className="relative w-full h-44 bg-neutral-200 rounded shadow">
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/5">
                <p className="text-shadow-2xs text-shadow-white">{name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const FavoriteMenu = () => {
  const menu = [
    { name: "Coffee", list: [1, 2, 3, 4, 5] },
    { name: "Snacks", list: [1, 2, 3, 4, 5] },
    { name: "Foods", list: [1, 2, 3, 4, 5] },
  ];
  return (
    <section className="py-5 px-2 container mx-auto">
      <div className="text-center">
        <h2 className="font-bold text-2xl leading-none">Favorite Menu</h2>
        <span className="text-xs italic text-orange-600">
          (Geser untuk lihat lainnya.)
        </span>
      </div>

      {menu.map(({ name, list }, i) => {
        return (
          <div
            key={"parent-" + i}
            className="p-2 bg-neutral-200 rounded mt-3 shadow">
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <div className="overflow-x-auto flex gap-x-3">
              {list.map((v, iList) => {
                return (
                  <div
                    key={name + iList}
                    className="min-w-4xs w-full max-w-xs bg-black/5 rounded p-2 shadow">
                    <div className="w-full aspect-square bg-black/5 rounded mb-2"></div>
                    <div className="text-xs">
                      <h4 className="text-sm font-semibold">
                        {name} {v}
                      </h4>
                      <p className="line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto, ducimus!
                      </p>
                      <p className="text-orange-600 text-base mt-3 font-semibold text-end">
                        Rp 20.000
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <button className="px-4 py-1 rounded mt-5 block w-fit mx-auto font-semibold hover:underline text-sm bg-orange-600 text-white shadow">
        Lihat Menu Lengkap
      </button>
    </section>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative bg-neutral-300 min-h-dvh">
      <div className="w-full h-dvh relative">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-180 from-neutral-300/30 from-60% to-neutral-300"></div>
        <img
          src="/images/hero-image.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <div className="max-w-sm mx-auto px-2 py-5">
          <h1 className="inline text-xl">Satu Tempat, Semua Rasa Favoritmu.</h1>
          <h2 className="inline ml-2 text-xl font-extrabold">
            Ngopi santai, Makan Puas...
          </h2>
          <p className="font-google">
            Dari aroma kopi yang menggugah selera hingga hidangan favorit yang
            siap menemani waktu santai atau kerja.
          </p>

          <div className="mt-3">
            <button className="px-4 py-1 rounded bg-orange-500 shadow text-white text-shadow-2xs text-shadow-orange-800">
              Lihat Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
