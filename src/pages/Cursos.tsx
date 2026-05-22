import { useState } from "react";
import { Course } from "../types";
import CourseCard from "../components/CourseCard";
import { BookOpen, Search, Grid, Award } from "lucide-react";
import { motion } from "motion/react";

export default function Cursos() {
  const [filter, setFilter] = useState<"all" | "technology" | "management" | "design" | "health">("all");
  const [searchTerm, setSearchTerm] = useState("");

  const coursesList: Course[] = [
    {
      id: "med",
      name: "Medicina",
      duration: "6 anos (12 semestres) — Bacharelado (Integral)",
      prerequisites: "Aprovação em Vestibular UFN específico ou ENEM. Dedicação total integral.",
      professor: "Dra. Maria Regina Ramos",
      description: "Excelência na formação médica humana e científica. Ampla estrutura hospitalar conveniada na região central do RS e laboratórios de simulação clínica de última geração.",
      category: "health",
      subjects: [
        "Anatomia e Fisiologia Humana Integral",
        "Semiologia Geral & Propedêutica Médica",
        "Farmacologia Médica Integrada",
        "Pediatria e Ginecologia Obstetrícia",
        "Cirurgia Geral e Urgência & Emergência",
        "Internato Médico em Hospitais Parceiros (HUSM/Hospital de Caridade)"
      ]
    },
    {
      id: "cc",
      name: "Ciência da Computação",
      duration: "4 anos (8 semestres) — Bacharelado",
      prerequisites: "Ensino Médio completo. Raciocínio lógico e afinidade com exatas e desenvolvimento.",
      professor: "Dr. Alcemir Rodrigues Santos",
      description: "Curso focado no desenvolvimento tecnológico avançado, inteligência artificial, engenharia de compiladores e formação profissional sólida para o ecossistema de inovação gaúcho.",
      category: "technology",
      subjects: [
        "Algoritmos e Programação Estruturada",
        "Estruturas de Dados e Teoria dos Grafos",
        "Inteligência Artificial e Data Science",
        "Arquitetura de Softwares e Sistemas Distribuídos",
        "Teoria da Computação e Linguagens Formais",
        "Segurança de Redes e Sistemas Operacionais"
      ]
    },
    {
      id: "bio",
      name: "Biomedicina",
      duration: "4 anos (8 semestres) — Bacharelado",
      prerequisites: "Ensino Médio completo. Afinidade com análises laboratoriais e ciências biológicas.",
      professor: "Dra. Denise de Almeida",
      description: "Ensino focado em diagnósticos laboratoriais, microbiologia de alimentos, toxicologia analítica e genética molecular de alta performance na atenção à saúde comunitária.",
      category: "health",
      subjects: [
        "Biologia Celular, Molecular e Tecidual",
        "Hematologia e Hematologia Clínica",
        "Imunopatologia Geral e Patologia Clínica",
        "Toxicologia Analítica e Ambiental",
        "Genética Molecular Humana",
        "Parasitologia e Virologia Aplicadas"
      ]
    },
    {
      id: "es",
      name: "Engenharia de Software",
      duration: "4 anos (8 semestres) — Bacharelado",
      prerequisites: "Ensino Médio completo. Afinidade com arquitetura de sistemas e metodologias ágeis.",
      professor: "Dr. Rogério Santoro",
      description: "Formação voltada para o ciclo completo de engenharia de software moderno, práticas de DevOps, mobile, cloud computing e gerenciamento ágil de projetos corporativos.",
      category: "technology",
      subjects: [
        "Introdução à Engenharia de Software",
        "Padrões de Projeto e Arquitetura Escalável",
        "Engenharia de Requisitos e UX/UI",
        "Sistemas na Nuvem (Cloud Architecture)",
        "DevOps, Testes Automatizados e Integração Contínua",
        "Gerenciamento de Projetos Ágeis (Scrum/Kanban)"
      ]
    },
    {
      id: "odo",
      name: "Odontologia",
      duration: "5 anos (10 semestres) — Bacharelado (Diurno/Noturno)",
      prerequisites: "Ensino Médio completo. Habilidade manual básica e forte ética profissional.",
      professor: "Dr. Carlos Eduardo Nogueira",
      description: "Sólida e reconhecida base clínica com atendimento à comunidade nos ambulatórios próprios da UFN, preparando cirurgiões-dentistas com excelência clínica e tecnológica.",
      category: "health",
      subjects: [
        "Anatomia e Histologia Craniofacial",
        "Patologia Oral e Odontopediatria",
        "Materiais Dentários e Dentística Restauradora",
        "Cirurgia Bucomaxilofacial Básica",
        "Endodontia Clínica Aplicada",
        "Prótese Dentária e Clínica Odontológica Integrada"
      ]
    },
    {
      id: "dir",
      name: "Direito",
      duration: "5 anos (10 semestres) — Bacharelado",
      prerequisites: "Ensino Médio completo. Excelente capacidade analítica, argumentativa e interpretativa.",
      professor: "Dr. Marcos Rogério",
      description: "Formação humanística sólida preparando para carreiras públicas e advocacia privada. Conta com o renomado Núcleo de Prática Jurídica próprio da UFN em Santa Maria.",
      category: "management",
      subjects: [
        "Teoria Geral do Estado e Direito Constitucional",
        "Direito Civil, Contratos e Obrigações",
        "Direito Penal e Teoria do Delito",
        "Direito Processual Civil e Penal",
        "Direito do Trabalho e Prática de Contencioso",
        "Estágio de Prática Jurídica Integrada"
      ]
    },
    {
      id: "adm",
      name: "Administração",
      duration: "4 anos (8 semestres) — Bacharelado",
      prerequisites: "Ensino Médio completo. Atitude empreendedora, foco em processos e liderança corporativa.",
      professor: "Dra. Patrícia Silveira",
      description: "Capacitação completa para atuar na liderança de corporações privadas, cooperativas regionais e startups. Foco estratégico em sustentabilidade e novos modelos econômicos.",
      category: "management",
      subjects: [
        "Fundamentos da Administração e Liderança",
        "Gestão Financeira, Custos e Controladoria",
        "Planejamento Estratégico Corporativo",
        "Gestão de Pessoas e de Comportamento Organizacional",
        "Marketing Estratégico e de Serviços",
        "Empreendedorismo de Impacto Regional"
      ]
    },
    {
      id: "dsg",
      name: "Design",
      duration: "4 anos (8 semestres) — Bacharelado",
      prerequisites: "Ensino Médio completo. Perfil criativo, sensibilidade artística e interesse em comunicação visual.",
      professor: "Msc. Mariana Kretz",
      description: "Habilitação em design de produto, design visual e projetos gráficos digitais, conectando tecnologia e estética com foco em inovação e inovação sustentável.",
      category: "design",
      subjects: [
        "Ergonomia e Antropometria Aplicada",
        "Desenho e Representação Gráfica",
        "Projeto de Design de Interfaces (UX/UI)",
        "Identidade Visual de Marca e Branding",
        "Modelagem 3D, Mockups e Protótipos",
        "Gestão de Projetos e Embalagens"
      ]
    }
  ];

  // Filtering / Search Logic
  const filteredCourses = coursesList.filter((course) => {
    const matchesCategory = filter === "all" || course.category === filter;
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.professor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Processo Seletivo UFN</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Cursos de Graduação
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl">
            Descubra as ementas, coordenadores e especificações de estudo dos cursos de excelência da Universidade Franciscana certificados com nota de destaque pelo Ministério da Educação.
          </p>
        </div>

        {/* Search Input bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
          <input
            id="course-search-input"
            type="text"
            placeholder="Buscar cursos, docentes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-250 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 outline-none shadow-sm"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 text-xs">
        <button
          id="filter-all-btn"
          onClick={() => setFilter("all")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-bold border transition-all cursor-pointer shadow-sm ${
            filter === "all"
              ? "bg-slate-900 border-slate-900 text-white"
              : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          <Grid className="h-4 w-4" />
          Todos os Cursos
        </button>
        <button
          id="filter-tech-btn"
          onClick={() => setFilter("technology")}
          className={`px-4 py-2.5 rounded-lg font-bold border transition-all cursor-pointer shadow-sm ${
            filter === "technology"
              ? "bg-blue-700 border-blue-700 text-white"
              : "bg-white border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
          }`}
        >
          Tecnologia
        </button>
        <button
          id="filter-health-btn"
          onClick={() => setFilter("health")}
          className={`px-4 py-2.5 rounded-lg font-bold border transition-all cursor-pointer shadow-sm ${
            filter === "health"
              ? "bg-rose-700 border-rose-700 text-white"
              : "bg-white border-slate-200 text-slate-600 hover:bg-rose-50 hover:text-rose-700"
          }`}
        >
          Saúde & Medicina
        </button>
        <button
          id="filter-mgmt-btn"
          onClick={() => setFilter("management")}
          className={`px-4 py-2.5 rounded-lg font-bold border transition-all cursor-pointer shadow-sm ${
            filter === "management"
              ? "bg-emerald-700 border-emerald-700 text-white"
              : "bg-white border-slate-200 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
          }`}
        >
          Gestão & Sociais
        </button>
        <button
          id="filter-design-btn"
          onClick={() => setFilter("design")}
          className={`px-4 py-2.5 rounded-lg font-bold border transition-all cursor-pointer shadow-sm ${
            filter === "design"
              ? "bg-purple-700 border-purple-700 text-white text-slate-50"
              : "bg-white border-slate-200 text-slate-600 hover:bg-purple-50 hover:text-purple-700"
          }`}
        >
          Design & Artes
        </button>
      </div>

      {/* Course Cards Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-slate-200 flex flex-col items-center justify-center p-6 shadow-sm">
          <Award className="h-10 w-10 text-slate-300 mb-2 animate-pulse" />
          <h3 className="font-bold text-slate-700 text-base">Nenhum curso encontrado</h3>
          <p className="text-slate-400 text-xs mt-1 font-sans">
            Experimente mudar os termos da busca ou redefinir a categoria selecionada.
          </p>
        </div>
      )}

    </div>
  );
}
