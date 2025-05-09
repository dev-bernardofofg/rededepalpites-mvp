"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Importar usePathname
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, Newspaper, BarChart2, BookOpen, Brain, Search } from 'lucide-react'; // Ícones relevantes, adicionei Search

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/noticias", label: "Notícias", icon: Newspaper },
  { href: "/palpites", label: "Palpites", icon: BarChart2 }, // Simplifiquei o label para melhor UX mobile
  { href: "/guias", label: "Guias de Apostas", icon: BookOpen },
  { href: "/analise-tatica", label: "Análise Tática", icon: Brain },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // Obter o caminho atual

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  // Função para verificar se o item é o ativo
  const isActive = (href: string) => {
    // Lógica para home exata, para outras seções verifica o início do path
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg sticky top-0 z-50 print:hidden" ref={navRef} aria-label="Navegação Principal">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-bold">
          <Link href="/" className="hover:text-blue-400 transition-colors duration-300 flex items-center" aria-label="Página Inicial RedeDePalpites">
            <img src="/images/logo_concept2.png" alt="Logotipo RedeDePalpites" className="h-8 sm:h-10 w-auto mr-2 sm:mr-3" /> 
            <span className="hidden sm:inline">RedeDePalpites</span>
            <span className="sm:hidden">RDP</span> {/* Nome mais curto para mobile */} 
          </Link>
        </div>

        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"} 
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-1 lg:space-x-2 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className={`flex items-center px-2 py-2 lg:px-3 rounded-md text-sm font-medium transition-colors duration-300 ${isActive(item.href) ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-gray-700 hover:text-blue-300'}`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                <item.icon className="mr-2 h-5 w-5" aria-hidden="true" />
                {item.label}
              </Link>
            </li>
          ))}
          {/* Item de busca - pode ser um link para uma página de busca ou um pop-up */}
          {/*<li>
            <Link href="/busca" className={`flex items-center px-2 py-2 lg:px-3 rounded-md text-sm font-medium transition-colors duration-300 ${isActive("/busca") ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-gray-700 hover:text-blue-300'}" aria-label="Buscar no site">
                <Search className="mr-2 h-5 w-5" aria-hidden="true" />
                Buscar
            </Link>
          </li>*/}
        </ul>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden mt-3 absolute left-0 right-0 bg-gray-800 shadow-lg rounded-b-md overflow-hidden">
          <ul className="flex flex-col items-start p-2 space-y-1" role="menu">
            {navItems.map((item) => (
              <li key={item.href} className="w-full" role="none">
                <Link 
                  href={item.href} 
                  className={`flex items-center w-full px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 ${isActive(item.href) ? 'bg-blue-600 text-white' : 'hover:bg-gray-700 hover:text-blue-300'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  role="menuitem"
                >
                  <item.icon className="mr-3 h-6 w-6" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            ))}
            {/* Item de busca mobile */}
            {/*<li className="w-full" role="none">
                <Link 
                  href="/busca" 
                  className={`flex items-center w-full px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 ${isActive("/busca") ? 'bg-blue-600 text-white' : 'hover:bg-gray-700 hover:text-blue-300'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={isActive("/busca") ? "page" : undefined}
                  role="menuitem"
                >
                  <Search className="mr-3 h-6 w-6" aria-hidden="true" />
                  Buscar
                </Link>
            </li>*/}
          </ul>
        </div>
      )}
    </nav>
  );
}

