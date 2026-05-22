import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GraduationCap, Menu, X, BookOpen, UserPlus, UserCheck, Mail, Home } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Cursos Ofertados", path: "/cursos", icon: BookOpen },
    { name: "Matrícula Aluno", path: "/cadastro-aluno", icon: UserPlus },
    { name: "Cadastro Docente", path: "/cadastro-professor", icon: UserCheck },
    { name: "Contato & Suporte", path: "/contato", icon: Mail },
  ];

  const currentPath = location.pathname;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <Link 
            id="nav-logo-link"
            to="/" 
            className="flex items-center gap-2 group"
            onClick={() => setIsOpen(false)}
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/Universidade_Franciscana_logo.jpg" 
              alt="UFN - Universidade Franciscana Logo" 
              className="h-[42px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
            <div className="hidden sm:block pl-2 border-l border-slate-200">
              <span className="text-xl font-bold tracking-tight text-slate-900 block leading-none">
                UFN
              </span>
              <span className="font-light text-slate-500 text-[11px] uppercase tracking-wider block mt-0.5">
                Universidade Franciscana
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-600 h-full items-center">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <Link
                  id={`nav-link-${link.path.replace("/", "root")}`}
                  key={link.path}
                  to={link.path}
                  className={`h-full flex items-center border-b-2 transition-all duration-200 ${
                    isActive
                      ? "text-blue-700 border-blue-700 font-semibold"
                      : "text-slate-600 border-transparent hover:text-blue-700 hover:border-blue-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <Link
                  id={`nav-mobile-${link.path.replace("/", "root")}`}
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-700 text-white font-semibold shadow-md"
                      : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
