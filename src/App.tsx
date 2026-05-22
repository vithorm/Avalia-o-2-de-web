import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import CadastroAluno from "./pages/CadastroAluno";
import CadastroProfessor from "./pages/CadastroProfessor";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        
        {/* Sticky Global Top Header */}
        <Navbar />

        {/* Major Content Segment wrapper with top padding for sticky Navbar spacing */}
        <main className="flex-grow pt-24 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cursos" element={<Cursos />} />
              <Route path="/cadastro-aluno" element={<CadastroAluno />} />
              <Route path="/cadastro-professor" element={<CadastroProfessor />} />
              <Route path="/contato" element={<Contato />} />
              
              {/* Fallback routing */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>

        {/* Global Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}
