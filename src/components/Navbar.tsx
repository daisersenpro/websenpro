import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Música', href: '#music' },
    { label: 'Videos', href: '#videos' },
    { label: 'Tour', href: '#tour' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-3xl font-black text-white">
            SEN<span className="text-red-600">PRO</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-red-600 font-semibold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all">
              Contacto
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-900">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-gray-300 hover:text-red-600 font-semibold transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold transition-all">
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
