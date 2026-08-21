import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowButton(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      {showButton ? (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="cursor-pointer fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full
           bg-blue-600 text-white transition-all duration-300 hover:-translate-y-1
            hover:bg-blue-700 active:translate-y-0 active:scale-95"
        >
          <ArrowUp size={18} className="stroke-[2.5]" />
        </button>
      ) : null}
    </>
  );
}
export default ScrollToTopButton;
