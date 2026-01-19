import { BiCurrentLocation } from "@react-icons/all-files/bi/BiCurrentLocation";
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill";

const Hero = () => {
  return (
    <section id="hero" className="h-[80dvh] relative overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="hero"
        className="absolute -z-1 top-0 right-0 h-full object-center object-cover"
      />

      <div className="h-full w-full flex flex-col justify-end bg-linear-0 from-orange-900/60 px-3 py-2">
        <h2 className="text-2xl font-extrabold text-orange-50 text-shadow-[.5px_.5px_.5px_black] py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <div className="text-orange-100 flex items-center gap-x-1">
          <BiCurrentLocation />
          <h3 className="font-semibold">Our Location :</h3>
        </div>
        <p className="text-xs text-white">
          Jl. Peninggaran Barat II, Keboyoran Lama Utara, Jakarta Selatan,
          Jakarta
        </p>
      </div>
    </section>
  );
};

const Facilities = () => {
  return (
    <section id="location" className="px-2 text-black bg-orange-700/5 py-5">
      <h2 className="font-semibold text-lg bg-orange-600 text-white px-7 py-px rounded-full w-fit mx-auto mb-4">
        Fasilitas
      </h2>
      <div className="grid grid-cols-3 gap-x-3 gap-y-5">
        {[
          { img: "restaurant.png", name: "Roof top" },
          { img: "mosque.png", name: "Mushola" },
          { img: "toilets.png", name: "Toilet" },
          { img: "wifi-signal.png", name: "Wi-Fi" },
          { img: "live-music.png", name: "Live Music" },
          { img: "phone-charger.png", name: "Charging" },
        ].map((v, i) => (
          <div key={i} className="w-full text-center">
            <div className="w-full aspect-square text-xs font-bold p-2">
              <img
                src={"/images/" + v.img}
                alt={v.img}
                className="w-full h-full"
              />
            </div>
            <p className="font-semibold">{v.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
const Recommended = () => {
  return (
    <section className="py-5 ">
      <h4 className="text-lg font-semibold text-white bg-orange-600 px-7 py-px w-fit rounded-full mx-auto mb-4">
        Our Best Seller
      </h4>

      <div className="space-y-5 px-3 py-2">
        <div className="">
          <h5 className="px-2 font-semibold mb-1">Coffee</h5>
          <div className="w-full h-32 flex overflow-x-auto gap-x-3">
            {[1, 2, 3, 4, 5].map((v, i) => {
              return (
                <div
                  key={"coffee-" + i}
                  className="h-full min-w-4/5 shadow bg-orange-300 flex-center">
                  <span className="font-bold text-2xl">{v}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="">
          <h5 className="px-2 font-semibold mb-1">Snacks</h5>
          <div className="w-full h-32 flex overflow-x-auto gap-x-3">
            {[1, 2, 3, 4, 5].map((v, i) => {
              return (
                <div
                  key={"snacks-" + i}
                  className="h-full min-w-4/5 shadow bg-orange-300 flex-center">
                  <span className="font-bold text-2xl">{v}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="">
          <h5 className="px-2 font-semibold mb-1">Food</h5>
          <div className="w-full h-32 flex overflow-x-auto gap-x-3">
            {[1, 2, 3, 4, 5].map((v, i) => {
              return (
                <div
                  key={"food-" + i}
                  className="h-full min-w-4/5 shadow bg-orange-300 flex-center">
                  <span className="font-bold text-2xl">{v}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
const MoreCTA = () => {
  return (
    <section className="w-full max-w-dvw bg-orange-700/5">
      <div className="overflow-hidden">
        <img
          src="/images/cta.png"
          className="drop-shadow-lg drop-shadow-black"
        />
      </div>

      <div className="relative px-3 grid pb-5">
        <h5 className="text-left font-semibold text-lg text-orange-800">
          Kenapa harus OrangeBox ?
        </h5>
        <p className="text-sm text-left">
          Kami memiliki lebih dari 30 menu yang siap untuk menemani kegiatan
          anda. Kami menawarkan harga yang terjangkau untuk Gen-Z sampai
          Gen-Boomers.
        </p>

        <button className="px-7 py-1 rounded-full bg-orange-600 shadow w-fit text-xs mt-5 text-white">
          Kunjungi kami
        </button>
      </div>
    </section>
  );
};

const PlaceCollection = () => {
  return (
    <section className="py-5 ">
      <h6 className="px-3 text-lg font-semibold text-orange-800 mb-1">
        Our Place
      </h6>
      <div className="grid gap-4">
        <div className="relative w-full h-32 bg-orange-300 row-start-1 col-span-2 shadow">
          <span className="absolute font-semibold bottom-0 left-0 right-0 italic bg-black/5 px-2 py-1 text-sm text-white text-shadow-[.5px_.5px_0px_black]">
            ROOF TOP
          </span>
        </div>
        <div className="relative w-full h-32 bg-orange-300 row-start-2 col-start-1 shadow">
          <span className="absolute font-semibold bottom-0 left-0 right-0 italic bg-black/5 px-2 py-1 text-sm text-white text-shadow-[.5px_.5px_0px_black]">
            LIVE MUSIC
          </span>
        </div>
        <div className="relative w-full h-32 bg-orange-300 row-start-2 col-start-2 shadow">
          <span className="absolute font-semibold bottom-0 left-0 right-0 italic bg-black/5 px-2 py-1 text-sm text-white text-shadow-[.5px_.5px_0px_black]">
            LONG TABLE
          </span>
        </div>
        <div className="relative w-full h-32 bg-orange-300 row-start-3 col-span-2 shadow">
          <span className="absolute font-semibold bottom-0 left-0 right-0 italic bg-black/5 px-2 py-1 text-sm text-white text-shadow-[.5px_.5px_0px_black]">
            CLEAN KITCHEN
          </span>
        </div>
      </div>
    </section>
  );
};

const Testimoni = () => {
  return (
    <section className="py-5">
      <h4 className="text-center font-semibold text-lg text-orange-800">
        Apa Kata Mereka ?
      </h4>
      <div className="px-3 py-2">
        <div className="w-full flex overflow-x-auto gap-x-3">
          {[
            { name: "Kurniawan", desc: "Makanannya enak dan murah.", star: 5 },
            { name: "Nabilla", desc: "Kopinya paling nagih.", star: 5 },
            {
              name: "Riyan",
              desc: "Ada nasi goreng, jadi gak cuma ngopi aja.",
              star: 5,
            },
            { name: "Fajar", desc: "Cocok untuk bawa keluarga juga.", star: 5 },
            {
              name: "Rizky",
              desc: "Tempatnya bersih dan enak, kadang ada Live Musik juga.",
              star: 5,
            },
          ].map((v, i) => {
            return (
              <div key={"coffee-" + i} className="min-w-full p-5 rounded">
                <div className="w-52 h-52 bg-orange-300 mx-auto rounded-full shadow"></div>
                <div className="text-orange-800 mt-4">
                  <div className="text-2xl flex gap-1 justify-center mb-2">
                    {Array.from({ length: v.star }, (_, iStar) => (
                      <BsStarFill key={"star" + iStar} />
                    ))}
                  </div>
                  <p className="italic text-center max-w-xs mx-auto">
                    "{v.desc}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  return (
    <section className="py-5">
      <div className="flex-center flex-col bg-orange-200 min-h-32 text-orange-800">
        <h5 className="font-semibold">Booking Tempat untuk Keperluan Acara</h5>
        <p className="text-sm text-black/80">Kami selalu siap!</p>
        <button className="px-7 py-px bg-orange-600 text-white shadow rounded-full mt-4">
          Hubungi Kami
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="text-orange-50">
      <h5 className="text-orange-800 px-3 font-semibold text-lg"># Penutup</h5>
      <div className="w-full h-32 bg-orange-200"></div>

      <div className="text-sm px-3 space-y-3 text-center py-3 bg-orange-600">
        <div>
          <h6 className="font-semibold">Alamat:</h6>
          <p className="text-xs">
            Jl. Peninggaran Barat II, Keboyoran Lama Utara, Jakarta Selatan,
            Jakarta
          </p>
        </div>
        <div>
          <h6 className="font-semibold">Whatsapp:</h6>
          <p className="text-xs">0863 1234 5678</p>
        </div>
        <div>
          <h6 className="font-semibold">Instagram:</h6>
          <p className="text-xs">@orangebox_</p>
        </div>
      </div>

      <div className="flex item-center justify-center gap-x-2 flex-wrap text-xs px-3 bg-black/10 py-2">
        <a href="#">Home</a>
        <span>|</span>
        <a href="#">Fasilitas</a>
        <span>|</span>
        <a href="#">Best Seller</a>
        <span>|</span>
        <a href="#">Place Collection</a>
      </div>
    </footer>
  );
};

const Merchant = () => {};

export const Home = () => {
  return (
    <>
      <Hero />
      <Facilities />
      <Recommended />
      <MoreCTA />
      <PlaceCollection />
      <Testimoni />
      <Booking />
      <Footer />
    </>
  );
};
