import { Link, useLocation } from "react-router-dom";
import backButton from "../assets/back_button.png"

export default function FloatingHomeButton() {
  const location = useLocation();

  // Home 페이지에서 버튼 숨김
  if (location.pathname === "/") return null;

  return (
    <Link
      to="/"
      className="
        fixed
        bottom-6 
        right-0
        lg:right-3
        z-50

        flex items-center justify-center
        w-18 h-18
        md:w-24 md:h-24
        md:w-32 md:h-32

        text-white
        text-xl md:text-2xl

        hover:scale-110
        hover:opacity-90
        transition
      "
      aria-label="Go to Home"
    >
      <img src={backButton} />
    </Link>
  );
}
