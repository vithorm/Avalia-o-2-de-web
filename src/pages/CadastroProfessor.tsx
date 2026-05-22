import { useState, FormEvent } from "react";
import { ProfessorInput } from "../types";
import { Briefcase, CheckCircle, ArrowRight, UserCheck, BookOpen, User, CreditCard, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CadastroProfessor() {
  const initialFormState: ProfessorInput = {
    name: "",
    cpf: "",
    area: "",
    phone: "",
    email: "",
  };

  const [form, setForm] = useState<ProfessorInput>(initialFormState);
  const [successData, setSuccessData] = useState<ProfessorInput | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const academicAreas = [
    "Ciências da Saúde (Medicina, Biomedicina, Odontologia e Enfermagem)",
    "Ciências Tecnológicas (Computação, Engenharia de Software e Sistemas)",
    "Ciências Humanas (Pedagogia, Letras, História e Filosofia)",
    "Ciências Sociais Aplicadas (Direito, Administração e Finanças)",
    "Artes e Design (Comunicação, Arquitetura e Design)"
  ];

  // Helper mask functions to structure field values beautifully
  const formatCPF = (val: string) => {
    return val
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .slice(0, 14);
  };

  const formatPhone = (val: string) => {
    return val
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d)(\d{4})$/, "$1-$2")
      .slice(0, 15);
  };

  const handleInputChange = (field: keyof ProfessorInput, val: string) => {
    setErrorMsg(null);
    let formattedValue = val;
    if (field === "cpf") formattedValue = formatCPF(val);
    if (field === "phone") formattedValue = formatPhone(val);

    setForm((prev) => ({ ...prev, [field]: formattedValue }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Required fields validation
    if (!form.name.trim() || !form.cpf || !form.area || !form.phone || !form.email.trim()) {
      setErrorMsg("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (form.cpf.length < 14) {
      setErrorMsg("O formato do CPF é inválido.");
      return;
    }

    if (!form.email.includes("@")) {
      setErrorMsg("Insira um endereço de e-mail institucional válido.");
      return;
    }

    // Success registration save and form reset
    setSuccessData(form);
    setErrorMsg(null);
    setForm(initialFormState);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      
      {/* Page Header */}
      <div className="space-y-2 border-b border-slate-200 pb-6 text-center md:text-left">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
          <UserCheck className="h-3.5 w-3.5 text-blue-700" />
          <span>Portal Docentes</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Cadastro de Docente
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm">
          Ficha de adesão para novos professores, pesquisadores e mentores convidados da Universidade Franciscana (UFN).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Supporting Guidelines card */}
        <div className="md:col-span-4 bg-gradient-to-br from-slate-905 to-slate-950 text-slate-300 rounded-xl p-6 shadow-sm space-y-5 border border-slate-800 bg-[#0f172a]">
          <Briefcase className="h-8 w-8 text-blue-500" />
          <h3 className="font-extrabold text-base tracking-tight text-white">Prerrogativas do Docente</h3>
          <ul className="space-y-3.5 text-xs text-slate-400">
            <li className="flex gap-2">
              <span className="font-bold text-blue-500">✓</span>
              <span>Acesso prioritário a editais de fomento e bolsas de inovação.</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-blue-500">✓</span>
              <span>Integração com parceiros externos em projetos de pesquisa patrocinados.</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-blue-500">✓</span>
              <span>Uso integral dos laboratórios robóticos, de rede e estúdios de gravação.</span>
            </li>
          </ul>
          <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500 leading-normal">
            Por favor, finalize o preenchimento para gerar a minuta contratual inicial fictícia.
          </div>
        </div>

        {/* Form container */}
        <form onSubmit={handleSubmit} className="md:col-span-8 bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
          <h2 className="text-base font-bold text-slate-800 border-b border-slate-150 pb-3 flex items-center gap-2">
            <User className="h-5 w-5 text-blue-700" /> Identificação do Professor
          </h2>

          {/* Validation Alert */}
          {errorMsg && (
            <div className="bg-rose-50 border border-rose-150 text-rose-700 px-4 py-3 rounded-lg text-xs font-semibold">
              {errorMsg}
            </div>
          )}

          {/* Form items grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="sm:col-span-2 space-y-1.5">
              <label htmlFor="teacher-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Nome Completo do Docente <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4.5 w-4.5 text-slate-400" />
                <input
                  id="teacher-name"
                  type="text"
                  required
                  placeholder="Ex: Prof. Dr. Carlos Eduardo Nogueira"
                  value={form.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-250 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 rounded-lg text-xs sm:text-sm font-medium transition-all outline-none shadow-sm"
                />
              </div>
            </div>

            {/* CPF */}
            <div className="space-y-1.5">
              <label htmlFor="teacher-cpf" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                CPF <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-3 h-4.5 w-4.5 text-slate-400" />
                <input
                  id="teacher-cpf"
                  type="text"
                  required
                  placeholder="000.000.000-00"
                  value={form.cpf}
                  onChange={(e) => handleInputChange("cpf", e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-250 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 rounded-lg text-xs sm:text-sm font-medium transition-all outline-none shadow-sm"
                />
              </div>
            </div>

            {/* Telephone */}
            <div className="space-y-1.5">
              <label htmlFor="teacher-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Telefone de Contato <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4.5 w-4.5 text-slate-400" />
                <input
                  id="teacher-phone"
                  type="tel"
                  required
                  placeholder="(11) 98765-4321"
                  value={form.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-250 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 rounded-lg text-xs sm:text-sm font-medium transition-all outline-none shadow-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-2 space-y-1.5">
              <label htmlFor="teacher-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                E-mail Institucional / Pessoal <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4.5 w-4.5 text-slate-400" />
                <input
                  id="teacher-email"
                  type="email"
                  required
                  placeholder="nome.sobrenome@ufn.edu.br"
                  value={form.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-250 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 rounded-lg text-xs sm:text-sm font-medium transition-all outline-none shadow-sm"
                />
              </div>
            </div>

            {/* Academic Area */}
            <div className="sm:col-span-2 space-y-1.5">
              <label htmlFor="teacher-area" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Área de Atuação Acadêmica <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <BookOpen className="absolute left-3 top-3 h-4.5 w-4.5 text-slate-400 pointer-events-none" />
                <select
                  id="teacher-area"
                  required
                  value={form.area}
                  onChange={(e) => handleInputChange("area", e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-250 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 rounded-lg text-xs sm:text-sm font-medium transition-all outline-none appearance-none shadow-sm"
                >
                  <option value="">Selecione sua principal especialização...</option>
                  {academicAreas.map((a, idx) => (
                    <option key={idx} value={a}>{a}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Submit action wrapper */}
          <div className="pt-4 border-t border-slate-150">
            <button
              id="teacher-register-submit-btn"
              type="submit"
              className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              Cadastrar Professor
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {successData && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative border border-slate-200"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-emerald-50 text-emerald-700 rounded-full animate-bounce">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Cadastro Registrado com Sucesso!
                </h3>
                <p className="text-slate-500 text-xs">
                  O cadastro de corpo docente foi validado e inserido na folha fictícia de professores.
                </p>
              </div>

              {/* Registered Professor Details mapping */}
              <div className="mt-6 bg-slate-50 rounded-lg p-4 border border-slate-200 space-y-2.5 text-xs text-slate-600 text-left">
                <div>
                  <strong className="text-slate-800 font-sans">Docente:</strong> {successData.name}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <strong className="text-slate-800 font-sans">CPF:</strong> {successData.cpf}
                  </div>
                  <div>
                    <strong className="text-slate-800 font-sans">Telefone:</strong> {successData.phone}
                  </div>
                </div>
                <div>
                  <strong className="text-slate-800 font-sans">Área de Atuação:</strong> {successData.area}
                </div>
                <div>
                  <strong className="text-slate-800 font-sans">E-mail:</strong> {successData.email}
                </div>
              </div>

              <div className="mt-6">
                <button
                  id="close-teacher-success-modal"
                  onClick={() => setSuccessData(null)}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-950 text-white rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer"
                >
                  Fechar e retornar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
