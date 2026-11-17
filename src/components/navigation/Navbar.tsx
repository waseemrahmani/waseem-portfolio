"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { CommandPalette } from "./CommandPalette";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setSearchOpen(true);
    window.addEventListener("portfolio:open-search", handler);
    return () => window.removeEventListener("portfolio:open-search", handler);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 701px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="site-container nav-inner">
          <nav className="nav-links" aria-label="Primary navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="search-trigger" onClick={() => setSearchOpen(true)} aria-label="Open search">
              <Search size={13} />
              <span className="search-key">Ctrl</span>
              <span className="search-key">K</span>
            </button>
            <ThemeToggle />
          </div>
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav site-container" aria-label="Mobile navigation">
            <div className="mobile-nav-inner">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
      <CommandPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
