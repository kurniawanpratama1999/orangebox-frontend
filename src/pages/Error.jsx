import { Link } from "react-router";

export function ErrorPage() {
  return (
    <div className="p-3">
      <h1>500</h1>
      <p>Terjadi Kesalahan</p>
      <Link to="/">Kembali ke Home</Link>
    </div>
  );
}
