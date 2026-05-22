import { Link } from "react-router-dom";
import { 
  Award, 
  Users, 
  BookOpen, 
  ArrowRight, 
  Cpu, 
  Globe2, 
  Compass, 
  GraduationCap, 
  Bookmark, 
  HelpCircle 
} from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  const stats = [
    { value: "94%", label: "Empregabilidade dos graduados", icon: Award },
    { value: "25+", label: "Cursos superiores de excelência", icon: BookOpen },
    { value: "15k+", label: "Alunos ativos e pesquisadores", icon: Users },
    { value: "4.9/5", label: "Nota máxima de avaliação externa", icon: GraduationCap },
  ];

  const highlights = [
    {
      title: "Matriz Curricular Avançada",
      description: "Conteúdos totalmente sintonizados com as tecnologias emergentes e exigências do mercado internacional de inovação.",
      icon: Cpu,
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      title: "Conexão de Impacto Global",
      description: "Parcerias de intercâmbio acadêmico e técnico com as maiores referências internacionais em berços tecnológicos.",
      icon: Globe2,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      title: "Pesquisa & Extensão Ativas",
      description: "Estímulo permanente à iniciação científica, bolsas de estudo tecnológicas e desenvolvimento de startups de alto valor.",
      icon: Compass,
      color: "text-purple-600 bg-purple-50 border-purple-100",
    },
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* Immersive Modern Hero Section - Professional Polish Theme */}
      <section 
        id="home-hero" 
        className="relative bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mx-4 sm:mx-6 md:mx-8 flex flex-col md:flex-row items-stretch min-h-[480px]"
      >
        <div className="p-8 sm:p-12 lg:p-16 flex-1 flex flex-col justify-center relative z-10 bg-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide text-blue-700 uppercase mb-6 self-start"
          >
            <GraduationCap className="h-4 w-4 text-blue-700" />
            <span>Processo Seletivo 2026 Aberto</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 mb-4"
          >
            Lidere a Transformação <br className="hidden sm:inline" />
            <span className="text-blue-700 bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
              Tecnológica e Científica
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-sm sm:text-base max-w-xl leading-relaxed mb-8"
          >
            Na <strong>Universidade Franciscana (UFN)</strong>, em Santa Maria - RS, estimulamos o protagonismo acadêmico, a ética, a pesquisa de excelência e o compromisso ético e solidário. Junte-se a uma instituição comprometida com a ciência, com a inovação e o desenvolvimento humano.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              id="hero-explore-courses-btn"
              to="/cursos"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              Conhecer Nossos Cursos
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              id="hero-enroll-btn"
              to="/cadastro-aluno"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 px-6 py-3 rounded-lg font-semibold text-sm transition-all flex items-center justify-center cursor-pointer"
            >
              Inscrever-se no Vestibular
            </Link>
          </motion.div>
        </div>

        {/* Hero image side */}
        <div className="hidden md:block w-1/3 min-h-[400px] bg-slate-100 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
            alt="Estudantes cooperando" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section id="home-stats" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-blue-50 text-blue-700 mb-3 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-500 font-semibold mt-1 leading-snug uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Main Presentation / Institutional Vision Section */}
      <section id="home-presentation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Block */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4">
            <div className="col-span-8">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                alt="Infraestrutura Universidade Franciscana (UFN)"
                referrerPolicy="no-referrer"
                className="rounded-xl shadow-sm border border-slate-200 w-full object-cover h-64 sm:h-80 transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>
            <div className="col-span-4 flex flex-col gap-4">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&q=80"
                alt="Biblioteca Interativa"
                referrerPolicy="no-referrer"
                className="rounded-xl shadow-sm border border-slate-200 w-full object-cover h-28 sm:h-36 transition-transform duration-500 hover:scale-[1.02]"
              />
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
                alt="Alunos Integrando Projetos"
                referrerPolicy="no-referrer"
                className="rounded-xl shadow-sm border border-slate-200 w-full object-cover h-28 sm:h-38 transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Presentation Text block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">
                Nossa Universidade
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Educação Inspiradora e Orientada à Prática Científica
              </h2>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              Fundada e sediada em Santa Maria - RS, a <strong>Universidade Franciscana (UFN)</strong> consolidou-se como instituição comunitária pautada na excelência do ensino, na pesquisa rigorosa e na extensão transformadora. Com campi integrados e modernos laboratórios, oferecemos uma sólida formação integral para o mercado e para a sociedade.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Nossa abordagem pedagógica combina teoria robusta, desenvolvimento de resoluções para desafios práticos propostos por grandes corporações, e mentoria com professores integrados ativamente nos principais centros de pesquisa e indústrias produtivas globais.
            </p>

            <div className="pt-2">
              <Link
                id="presentation-about-link"
                to="/contato"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 transition-colors"
              >
                Entre em contato com a equipe de admissão e tire dúvidas
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Advantages & Key Features Block */}
      <section id="home-highlights" className="bg-slate-50/50 py-16 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">
              Inovação Contínua
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-extrabold text-slate-900 tracking-tight">
              Por que escolher a UFN?
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Conheça as vantagens competitivas que impulsionam o sucesso acadêmico e de carreira dos nossos alunos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <div className={`p-3 rounded-lg inline-block border ${item.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Quick Access Menu Cards / Interaction Calls */}
      <section id="home-quick-links" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Acesso Rápido aos Portais de Atendimento
          </h2>
          <p className="text-xs text-slate-500">
            Selecione uma das ações abaixo para interagir imediatamente com nosso ecossistema universitário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            id="quick-link-courses"
            to="/cursos"
            className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-350 group flex items-start gap-4 cursor-pointer"
          >
            <div className="p-3 bg-blue-50 text-blue-700 rounded-lg group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
              <Bookmark className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-700 transition-all">
                Cursos Ofertados
              </h3>
              <p className="text-slate-500 text-xs mt-1 leading-normal">
                Conheça a ementa, os pré-requisitos, coordenadores pedagógicos e grades de disciplinas dos nossos cursos.
              </p>
            </div>
          </Link>

          <Link
            id="quick-link-student-reg"
            to="/cadastro-aluno"
            className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-350 group flex items-start gap-4 cursor-pointer"
          >
            <div className="p-3 bg-emerald-50 text-emerald-700 rounded-lg group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition-all">
                Matrícula de Novo Aluno
              </h3>
              <p className="text-slate-500 text-xs mt-1 leading-normal">
                Portal simplificado de inscrições. Preencha seus dados cadastrais para manifestar interesse de ingresso.
              </p>
            </div>
          </Link>

          <Link
            id="quick-link-contact"
            to="/contato"
            className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-350 group flex items-start gap-4 cursor-pointer"
          >
            <div className="p-3 bg-purple-50 text-purple-700 rounded-lg group-hover:bg-purple-700 group-hover:text-white transition-colors duration-300">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 group-hover:text-purple-700 transition-all">
                Central de Contato & Redes
              </h3>
              <p className="text-slate-500 text-xs mt-1 leading-normal">
                Consulte canais oficiais do nosso suporte acadêmico ou envie mensagens com dúvidas adicionais.
              </p>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
