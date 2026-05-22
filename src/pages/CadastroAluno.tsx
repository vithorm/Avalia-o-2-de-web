import { useState, FormEvent } from "react";
import { StudentInput } from "../types";
import { UserPlus, CheckCircle, ArrowRight, BookOpen, Smile, User, CreditCard, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CadastroAluno() {
  const initialFormState: StudentInput = {
    name: "",
    cpf: "",
    rg: "",
    phone: "",
    address: "",
    course: "",
  };

  const [form, setForm] = useState<StudentInput>(initialFormState);
  const [successData, setSuccessData] = useState<StudentInput | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const availableCourses = [
    "Medicina",
    "Ciência da Computação",
    "Biomedicina",
    "Engenharia de Software",
    "Odontologia",
    "Direito",
    "Administração",
    "Design"
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

  const formatRG = (val: string) => {
    return val
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .slice(0, 12);
  };

  const formatPhone = (val: string) => {
    return val
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d)(\d{4})$/, "$1-$2")
      .slice(0, 15);
  };

  const handleInputChange = (field: keyof StudentInput, val: string) => {
    setErrorMsg(null);
    let formattedValue = val;
    if (field === "cpf") formattedValue = formatCPF(val);
    if (field === "rg") formattedValue = formatRG(val);
    if (field === "phone") formattedValue = formatPhone(val);

    setForm((prev) => ({ ...prev, [field]: formattedValue }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Simple robust validation
    if (!form.name.trim() || !form.cpf || !form.rg || !form.phone || !form.address.trim() || !form.course) {
      setErrorMsg("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (form.cpf.length < 14) {
      setErrorMsg("Formato de CPF incompleto ou inválido.");
      return;
    }

    // Save success information to present in elegant success modal
    setSuccessData(form);
    setErrorMsg(null);

    // Prompt specifies: "Exibir alerta ao cadastrar" - let's trigger a nice visual overlay
    // Reset form states
    setForm(initialFormState);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      
      {/* Page Header */}
      <div className="space-y-2 border-b border-slate-200 pb-6 text-center md:text-left">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
          <UserPlus className="h-3.5 w-3.5" />
          <span>Matrículas e Ingressos</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Matrícula de Aluno
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm">
          Preencha a ficha cadastral abaixo para dar início ao seu processo de ingresso na Universidade Franciscana (UFN).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Support Side Card */}
        <div className="md:col-span-4 bg-gradient-to-br from-blue-700 to-indigo-800 text-white rounded-xl p-6 shadow-sm space-y-5">
          <BookOpen className="h-8 w-8 text-blue-200" />
          <h3 className="font-extrabold text-base tracking-tight">O que acontece agora?</h3>
          <ul className="space-y-3.5 text-xs text-blue-100">
            <li className="flex gap-2">
              <span className="font-bold bg-white/20 h-5 w-5 rounded-full flex items-center justify-center shrink-0">1</span>
              <span>Seus dados cadastrais básicos são coletados via portal seguro.</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold bg-white/20 h-5 w-5 rounded-full flex items-center justify-center shrink-0">2</span>
              <span>Nossa equipe pedagógica realiza a verificação de documentos.</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold bg-white/20 h-5 w-5 rounded-full flex items-center justify-center shrink-0">3</span>
              <span>Você receberá por correio eletrônico ou telefone as instruções para assinatura do contrato.</span>
            </li>
          </ul>
          <div className="pt-3 border-t border-white/10 text-[11px] text-blue-200 leading-normal">
            Dúvidas adicionais? Acesse nossa aba de <a href="/contato" className="underline font-bold hover:text-white">Contato</a>.
          </div>
        </div>

        {/* Input Form Card */}
        <form onSubmit={handleSubmit} className="md:col-span-8 bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
          <h2 className="text-base font-bold text-slate-800 border-b border-slate-150 pb-3 flex items-center gap-2">
            <Smile className="h-5 w-5 text-blue-700" /> Ficha de Identificação do Aluno
          </h2>

          {/* Validation Banner */}
          {errorMsg && (
            <div className="bg-rose-50 border border-rose-150 text-rose-700 px-4 py-3 rounded-lg text-xs font-semibold">
              {errorMsg}
            </div>
          )}

          {/* Form grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name input */}
            <div className="sm:col-span-2 space-y-1.5">
              <label htmlFor="student-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Nome Completo <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4.5 w-4.5 text-slate-400" />
                <input
                  id="student-name"
                  type="text"
                  required
                  placeholder="Ex: João da Silva Santos"
                  value={form.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-250 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 rounded-lg text-xs sm:text-sm font-medium transition-all outline-none shadow-sm"
                />
              </div>
            </div>

            {/* CPF input */}
            <div className="space-y-1.5">
              <label htmlFor="student-cpf" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                CPF <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-3 h-4.5 w-4.5 text-slate-400" />
                <input
                  id="student-cpf"
                  type="text"
                  required
                  placeholder="000.000.000-00"
                  value={form.cpf}
                  onChange={(e) => handleInputChange("cpf", e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-250 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 rounded-lg text-xs sm:text-sm font-medium transition-all outline-none shadow-sm"
                />
              </div>
            </div>

            {/* RG input */}
            <div className="space-y-1.5">
              <label htmlFor="student-rg" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                RG (Registro Geral) <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-3 h-4.5 w-4.5 text-slate-400" />
                <input
                  id="student-rg"
                  type="text"
                  required
                  placeholder="00.000.000-0"
                  value={form.rg}
                  onChange={(e) => handleInputChange("rg", e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-250 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 rounded-lg text-xs sm:text-sm font-medium transition-all outline-none shadow-sm"
                />
              </div>
            </div>

            {/* Phone input */}
            <div className="space-y-1.5">
              <label htmlFor="student-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Telefone Celular <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4.5 w-4.5 text-slate-400" />
                <input
                  id="student-phone"
                  type="tel"
                  required
                  placeholder="(11) 98765-4321"
                  value={form.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-250 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 rounded-lg text-xs sm:text-sm font-medium transition-all outline-none shadow-sm"
                />
              </div>
            </div>

            {/* Course dropdown */}
            <div className="space-y-1.5">
              <label htmlFor="student-course" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Curso Pretendido <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <BookOpen className="absolute left-3 top-3 h-4.5 w-4.5 text-slate-400 pointer-events-none" />
                <select
                  id="student-course"
                  required
                  value={form.course}
                  onChange={(e) => handleInputChange("course", e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-250 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 rounded-lg text-xs sm:text-sm font-medium transition-all outline-none appearance-none shadow-sm"
                >
                  <option value="">Selecione um curso...</option>
                  {availableCourses.map((c, idx) => (
                    <option key={idx} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Address input */}
            <div className="sm:col-span-2 space-y-1.5">
              <label htmlFor="student-address" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Endereço Residencial Completo <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4.5 w-4.5 text-slate-400" />
                <input
                  id="student-address"
                  type="text"
                  required
                  placeholder="Rua, Número, Bairro, CEP, Cidade - UF"
                  value={form.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-250 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 rounded-lg text-xs sm:text-sm font-medium transition-all outline-none shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Submit button wrapper */}
          <div className="pt-4 border-t border-slate-150">
            <button
              id="student-register-submit-btn"
              type="submit"
              className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              Matricular Aluno
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
                  Matrícula Registrada com Sucesso!
                </h3>
                <p className="text-slate-500 text-xs">
                  A inscrição básica de interesse de matrícula foi consolidada nos nossos servidores locais fictícios.
                </p>
              </div>

              {/* Displaying Registered Student Credentials */}
              <div className="mt-6 bg-slate-50 rounded-lg p-4 border border-slate-200 space-y-2.5 text-xs text-slate-600 text-left">
                <div>
                  <strong className="text-slate-800 font-sans">Estudante:</strong> {successData.name}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <strong className="text-slate-800 font-sans">CPF:</strong> {successData.cpf}
                  </div>
                  <div>
                    <strong className="text-slate-800 font-sans">RG:</strong> {successData.rg}
                  </div>
                </div>
                <div>
                  <strong className="text-slate-800 font-sans">Curso Escolhido:</strong> {successData.course}
                </div>
                <div>
                  <strong className="text-slate-800 font-sans">Telefone:</strong> {successData.phone}
                </div>
                <div>
                  <strong className="text-slate-800 font-sans">Endereço:</strong> {successData.address}
                </div>
              </div>

              <div className="mt-6">
                <button
                  id="close-student-success-modal"
                  onClick={() => setSuccessData(null)}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-950 text-white rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer"
                >
                  Entendido, fechar portal
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
