// "use client";

// import Link from "next/link";
// import { Menu, X, Sun, Moon } from "lucide-react";
// import { usePathname } from "next/navigation";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import { cn } from "../lib/utils";
// import { Button } from "./ui/button";

// const navLinks = [
//   { href: "/#home", label: "Home" },
//   { href: "/#about", label: "About" },
//   { href: "/#tools", label: "Tools" },
//   { href: "/#projects", label: "Projects" },
//   { href: "/#contact", label: "Contact" },
// ];

// export default function Header() {
//   const pathname = usePathname();
//   const { theme, setTheme } = useTheme();
//   const [scrolled, setScrolled] = useState(false);
//   const [activeHash, setActiveHash] = useState("");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Prevent background scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
//   }, [isMobileMenuOpen]);

//   // Scroll tracking for active section
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);

//       if (pathname === "/") {
//         const sections = navLinks
//           .map((link) =>
//             link.href.startsWith("/#")
//               ? document.getElementById(link.href.substring(2))
//               : null
//           )
//           .filter(Boolean);

//         let currentHash = "";
//         for (const section of sections) {
//           if (section && section.offsetTop <= window.scrollY + 80) {
//             currentHash = `#${section.id}`;
//           }
//         }
//         setActiveHash(currentHash);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [pathname]);

//   const isLinkActive = (link) => {
//     if (link.href.startsWith("/#")) {
//       const linkHash = link.href.substring(1);
//       if (activeHash === "" && link.href === "/#home") return true;
//       return activeHash === linkHash;
//     }
//     return pathname === link.href;
//   };

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 w-full py-3 z-50 transition-all duration-300",
//         scrolled
//           ? "bg-background/30 backdrop-blur-sm border-b"
//           : "bg-transparent border-b border-transparent"
//       )}
//     >
//       <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
//         {/* ===== Logo ===== */}
//         <Link
//           href="/"
//           className="text-2xl font-bold font-headline transition-colors hover:text-primary"
//           aria-label="Home"
//         >
//           <span className="inline-block w-10 h-10 rounded-full bg-primary text-background flex items-center justify-center text-2xl font-extrabold shadow-lg">
//             S
//           </span>
//         </Link>

//         {/* ===== Desktop Navigation (centered) ===== */}
//         <div className="hidden md:flex flex-1 justify-center">
//           <nav className="flex gap-1 items-center bg-muted/50 p-1 rounded-full">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={cn(
//                   "text-sm font-medium transition-colors px-4 py-2 rounded-full",
//                   isLinkActive(link)
//                     ? "bg-background text-primary shadow-sm"
//                     : "text-foreground/60 hover:text-foreground"
//                 )}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>
//         </div>

//         {/* ===== Desktop Theme Toggle + Menu Button ===== */}
//         <div className="hidden md:flex items-center gap-4">
//           {/* Theme Slider Toggle */}
//           <div
//             onClick={() =>
//               setTheme(theme === "light" ? "dark" : "light")
//             }
//             className="relative flex items-center w-14 h-7 bg-muted rounded-full cursor-pointer transition-all duration-300 border border-border"
//           >
//             <div
//               className={cn(
//                 "absolute top-[2px] left-[2px] w-6 h-6 rounded-full flex items-center justify-center bg-primary text-background shadow-sm transition-all duration-300",
//                 theme === "dark" && "translate-x-7"
//               )}
//             >
//               {/* Render both icons and let CSS (.dark) control visibility to avoid SSR/CSR mismatch */}
//               <Sun className="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//               <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//             </div>
//           </div>

//           {/* Hidden Menu Button placeholder (keeps layout aligned) */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsMobileMenuOpen(true)}
//             >
//               <Menu className="h-5 w-5" />
//               <span className="sr-only">Open menu</span>
//             </Button>
//           </div>
//         </div>

//         {/* ===== Mobile Menu Button ===== */}
//         <div className="md:hidden flex items-center">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setIsMobileMenuOpen(true)}
//           >
//             <Menu className="h-5 w-5" />
//             <span className="sr-only">Open menu</span>
//           </Button>
//         </div>
//       </div>

//       {/* ===== Mobile Popup Menu ===== */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn">
//           <div className="relative bg-background text-foreground rounded-3xl shadow-xl w-[85%] max-w-sm p-6 border border-border flex flex-col">
//             {/* Header (Logo + Close) */}
//             <div className="flex justify-between items-center mb-6">
//               <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
//                 S
//               </div>
//               <button
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="bg-primary text-white p-2 rounded-full hover:opacity-90 transition"
//               >
//                 <X className="h-4 w-4" />
//               </button>
//             </div>

//             {/* Navigation Links (mobile) */}
//             <nav className="flex flex-col gap-3">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className={cn(
//                     "text-sm font-medium transition-colors px-4 py-2 rounded-full",
//                     isLinkActive(link)
//                       ? "bg-background text-primary shadow-sm"
//                       : "text-foreground/60 hover:text-foreground"
//                   )}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </nav>

//             {/* Theme Toggle (mobile same as before) */}
//             <div className="mt-8">
//               <p className="text-sm text-center mb-3 font-medium text-foreground/70">
//                 Theme Mode
//               </p>
//               <div className="flex justify-center gap-3">
//                 <button
//                   onClick={() => setTheme("light")}
//                   className={cn(
//                     "p-3 rounded-full border transition flex items-center justify-center",
//                     theme === "light"
//                       ? "bg-primary text-white border-primary"
//                       : "hover:bg-muted"
//                   )}
//                 >
//                   <Sun className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => setTheme("dark")}
//                   className={cn(
//                     "p-3 rounded-full border transition flex items-center justify-center",
//                     theme === "dark"
//                       ? "bg-primary text-white border-primary"
//                       : "hover:bg-muted"
//                   )}
//                 >
//                   <Moon className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }



"use client";

import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#tools", label: "Tools" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  // Scroll tracking for active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = navLinks
          .map((link) =>
            link.href.startsWith("/#")
              ? document.getElementById(link.href.substring(2))
              : null
          )
          .filter(Boolean);

        let currentHash = "";
        for (const section of sections) {
          if (section && section.offsetTop <= window.scrollY + 80) {
            currentHash = `#${section.id}`;
          }
        }
        setActiveHash(currentHash);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isLinkActive = (link) => {
    if (link.href.startsWith("/#")) {
      const linkHash = link.href.substring(1);
      if (activeHash === "" && link.href === "/#home") return true;
      return activeHash === linkHash;
    }
    return pathname === link.href;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full py-3 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/30 backdrop-blur-sm border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* ===== Logo ===== */}
        <Link
          href="/"
          className="text-2xl font-bold font-headline transition-colors hover:text-primary"
          aria-label="Home"
        >
          <span className="inline-block w-10 h-10 rounded-full bg-primary text-background flex items-center justify-center text-2xl font-extrabold shadow-lg">
            S
          </span>
        </Link>

        {/* ===== Desktop Navigation ===== */}
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex gap-1 items-center bg-muted/50 p-1 rounded-full">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors px-4 py-2 rounded-full",
                  isLinkActive(link)
                    ? "bg-background text-primary shadow-sm"
                    : "text-foreground/60 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ===== Desktop Theme Toggle ===== */}
        <div className="hidden md:flex items-center gap-4">
          <div
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
            className="relative flex items-center w-14 h-7 bg-muted rounded-full cursor-pointer transition-all duration-300 border border-border"
          >
                        <div
                          className={cn(
                            "absolute top-[2px] left-[2px] w-6 h-6 rounded-full flex items-center justify-center bg-primary text-background shadow-sm transition-all duration-300 translate-x-0 dark:translate-x-7"
                          )}
                        >
              <Sun className="w-4 h-4 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100" />
            </div>
          </div>
        </div>

        {/* ===== Mobile Menu Button ===== */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      {isMobileMenuOpen && (
        <div className="sticky h-screen -top-10 left-0 inset-0 z-[999] bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative bg-background text-foreground rounded-3xl shadow-xl w-full max-w-xs sm:max-w-sm p-6 border border-border flex flex-col max-h-[85vh] overflow-y-auto animate-fadeIn">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                S
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white p-2 rounded-full hover:opacity-90 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors px-4 py-2 rounded-full text-center",
                    isLinkActive(link)
                      ? "bg-muted text-primary font-semibold"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle */}
            <div className="mt-8">
              <p className="text-sm text-center mb-3 font-medium text-foreground/70">
                Theme Mode
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setTheme("light")}
                  className={cn(
                    "p-3 rounded-full border transition flex items-center justify-center",
                    theme === "light"
                      ? "bg-primary text-white border-primary"
                      : "hover:bg-muted"
                  )}
                >
                  <Sun className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={cn(
                    "p-3 rounded-full border transition flex items-center justify-center",
                    theme === "dark"
                      ? "bg-primary text-white border-primary"
                      : "hover:bg-muted"
                  )}
                >
                  <Moon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
