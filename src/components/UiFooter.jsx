export const UiFooter = () => {
  return (
    <footer className="bg-orange-700 text-white p-2 text-sm">
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
  );
};
