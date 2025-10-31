import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-background shadow-lg transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}
        hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50`}
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
} 