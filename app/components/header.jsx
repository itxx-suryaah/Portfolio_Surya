"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

import { cn } from "../lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet"

const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#tools", label: "Tools" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
]

export function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [activeHash, setActiveHash] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            if (pathname === '/') {
                const sections = navLinks
                    .map(link => link.href.startsWith('/#') ? document.getElementById(link.href.substring(2)) : null)
                    .filter(section => section !== null);
                
                let currentHash = '';
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
        if (link.href.startsWith('/#')) {
            const linkHash = link.href.substring(1);
            if (activeHash === '' && link.href === '/#home') return true;
            return activeHash === linkHash;
        }
        return pathname === link.href;
    }

    return (
        <header className={cn(
            "py-3 fixed top-0 w-full z-50 transition-all duration-300",
            scrolled ? "bg-background/30 backdrop-blur-sm border-b" : "bg-transparent border-b border-transparent"
        )}>
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-2xl font-bold font-headline transition-colors hover:text-primary" aria-label="Home">
                    <span className="inline-block w-10 h-10 rounded-full bg-primary text-background flex items-center justify-center text-2xl font-extrabold not-italic tracking-tight shadow-lg font-headline">
                        S
                    </span>
                </Link>
                
                <nav className="hidden md:flex gap-1 items-center bg-muted/50 p-1 rounded-full">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors px-4 py-2 rounded-full",
                                isLinkActive(link) ? "bg-background text-primary shadow-sm" : "text-foreground/60 hover:text-foreground"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <div className="p-4">
                                    <nav className="flex flex-col gap-4 items-start mt-8">
                                        {navLinks.map((link) => (
                                            <SheetClose asChild key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className="text-lg font-medium transition-colors hover:text-primary text-foreground/80 w-full p-2 rounded-md hover:bg-muted"
                                                >
                                                    {link.label}
                                                </Link>
                                            </SheetClose>
                                        ))}
                                    </nav>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
