import { Outlet } from "react-router-dom";
// React Toastify
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Main() {
  return (
    <main className="main container m-auto relative">
      <ToastContainer transition={Slide} />
      <Outlet />
    </main>
  );
}
