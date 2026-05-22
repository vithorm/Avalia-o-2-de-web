import { Link } from "react-router-dom";
import { GraduationCap, Github, Linkedin, Twitter, Instagram, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 mt-20 border-t border-slate-200 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Vision Block */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/Universidade_Franciscana_logo.jpg" 
                alt="UFN - Universidade Franciscana Logo" 
                className="h-[46px] w-auto object-contain rounded-sm"
                referrerPolicy="no-referrer"
              />
              <div className="pl-2 border-l border-slate-200">
                <span className="text-lg font-bold tracking-tight text-slate-900 block leading-none">
                  UFN
                </span>
                <span className="font-light text-slate-500 text-[10px] uppercase tracking-wider block mt-0.5">
                  Universidade Franciscana
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              Formando profissionais do futuro hoje. Inovação, excelência acadêmica e compromisso social no centro da nossa visão educacional.
            </p>
            <div className="flex gap-2.5 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors text-slate-500" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors text-slate-500" aria-label="Linkedin">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors text-slate-500" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors text-slate-500" aria-label="Github">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Site Map Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-blue-900 text-xs tracking-widest uppercase">
              Mapa do Site
            </h3>
            <ul className="space-y-2 text-xs font-medium text-slate-500">
              <li>
                <Link to="/" className="hover:text-blue-700 transition-colors">
                  Início (Home)
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="hover:text-blue-700 transition-colors">
                  Cursos Ofertados
                </Link>
              </li>
              <li>
                <Link to="/cadastro-aluno" className="hover:text-blue-700 transition-colors">
                  Matrícula de Aluno
                </Link>
              </li>
              <li>
                <Link to="/cadastro-professor" className="hover:text-blue-700 transition-colors">
                  Cadastro de Docente
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-blue-700 transition-colors">
                  Contato & Suporte
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Portal Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-blue-900 text-xs tracking-widest uppercase">
              Suporte Acadêmico
            </h3>
            <ul className="space-y-2 text-xs font-medium text-slate-500">
              <li className="hover:text-blue-700 cursor-pointer">Portal do Aluno</li>
              <li className="hover:text-blue-700 cursor-pointer">Portal do Docente</li>
              <li className="hover:text-blue-700 cursor-pointer">Biblioteca Digital</li>
              <li className="hover:text-blue-700 cursor-pointer">Calendário Acadêmico</li>
              <li className="hover:text-blue-700 cursor-pointer">Trabalhe Conosco</li>
            </ul>
          </div>

          {/* Contact Details info */}
          <div className="space-y-4">
            <h3 className="font-bold text-blue-900 text-xs tracking-widest uppercase">
              Atendimento
            </h3>
            <ul className="space-y-3 text-xs text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  Rua Silva Jardim, 1175 - N. Sra. do Rosário<br />
                  Santa Maria - RS, CEP 97010-491
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-600 shrink-0" />
                <span>(55) 3220-1200</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-600 shrink-0" />
                <span className="break-all">centraldeatendimento@ufn.edu.br</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal bar */}
        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-400 gap-4">
          <div>
            &copy; {currentYear} <span className="font-semibold text-slate-600">Universidade Franciscana (UFN)</span> - Todos os direitos reservados.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-700">Políticas de Privacidade</a>
            <a href="#" className="hover:text-blue-700">Regulamento Interno</a>
            <a href="#" className="hover:text-blue-700">Trabalhe Conosco</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
