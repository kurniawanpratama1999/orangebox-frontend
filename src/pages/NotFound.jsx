import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="p-3">
      <h1>404</h1>
      <p>Halaman tidak ditemukan</p>
      <Link to="/">Kembali ke Home</Link>
    </div>
  );
}
