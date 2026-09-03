"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#onososon", label: "O Noso Son" },
  { href: "#musica", label: "Música" },
  { href: "#contacto", label: "Contacto" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="absolute top-0 w-full p-6 z-50 flex justify-between items-center">
        {/* Logo */}
        <div className="font-display text-2xl tracking-tighter uppercase">
          <span className="text-brand-blue">Tapa</span> D&apos;Orella
        </div>

        <div className="flex items-center gap-6">
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold uppercase tracking-wider hover:text-brand-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-brand-blue transition-colors"
            aria-label={isOpen ? "Pechar menú" : "Abrir menú"}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-neutral-950/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-3xl font-display uppercase tracking-wider hover:text-brand-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
