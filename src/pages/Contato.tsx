import { useState, FormEvent } from "react";
import { ContactInput } from "../types";
import { Mail, Phone, MapPin, Send, HelpCircle, CheckCircle, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contato() {
  const initialFormState: ContactInput = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [form, setForm] = useState<ContactInput>(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleInputChange = (field: keyof ContactInput, val: string) => {
    setErrorMsg(null);
    setForm((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.subject || !form.message.trim()) {
      setErrorMsg("Todos os campos do formulário são obrigatórios.");
      return;
    }

    if (!form.email.includes("@")) {
      setErrorMsg("Insira um endereço de e-mail válido.");
      return;
    }

    // Success response setup
    setSubmitted(true);
    setErrorMsg(null);
    setForm(initialFormState);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-12">
      
      {/* Page Header */}
      <div className="space-y-2 border-b border-slate-200 pb-6 text-center md:text-left">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>Fale Conosco</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Contato & Suporte Acadêmico
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm">
          Estamos prontos para atender suas solicitações comerciais ou acadêmicas. Envie uma mensagem fictícia.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Contact Information Dashboard Card (Left) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-8">
          
          <div className="space-y-6">
            <h2 className="text-xl font-extrabold tracking-tight">
              Canais de Atendimento
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
              Consulte nossos endereços e telefones fictícios ou venha nos visitar para conhecer nosso campus tecnológico e laboratórios avançados.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white/10 text-white shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-blue-200">Endereço</h3>
                  <p className="text-xs text-slate-100 leading-relaxed mt-1">
                    Rua Silva Jardim, 1175<br />
                    N. Sra. do Rosário, Santa Maria - RS<br />
                    CEP: 97010-491
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white/10 text-white shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-blue-200">Central Telefônica</h3>
                  <p className="text-xs text-slate-100 mt-1">
                    (55) 3220-1200
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white/10 text-white shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-blue-200">E-mail de Suporte</h3>
                  <p className="text-xs text-slate-100 break-all mt-1">
                    centraldeatendimento@ufn.edu.br
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex items-center gap-3 text-xs text-blue-200">
            <Clock className="h-5 w-5 shrink-0" />
            <span>
              <strong>Atendimento:</strong> Segunda a Sexta, das 08:00 às 21:00 • Sábado das 09:00 às 13:00.
            </span>
          </div>

        </div>

        {/* Contact Message Form (Right) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-base font-bold text-slate-800">Enviar Mensagem Acadêmica</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Nossa equipe fictícia responderá em até 24h úteis.
                  </p>
                </div>

                {errorMsg && (
                  <div className="bg-rose-50 border border-rose-150 text-rose-700 px-4 py-3 rounded-lg text-xs font-semibold">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Seu Nome Completo *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Ex: Clara Mendes"
                      value={form.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-250 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 rounded-lg text-xs sm:text-sm font-medium transition-all outline-none shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Seu E-mail de Contato *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="Ex: clara.mendes@gmail.com"
                      value={form.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-250 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 rounded-lg text-xs sm:text-sm font-medium transition-all outline-none shadow-sm"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Assunto Principal *
                    </label>
                    <select
                      id="contact-subject"
                      required
                      value={form.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-250 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 rounded-lg text-xs sm:text-sm font-medium transition-all outline-none appearance-none shadow-sm"
                    >
                      <option value="">Selecione o setor de atendimento...</option>
                      <option value="ingressos">Ingresso & Vestibulares</option>
                      <option value="financeiro">Secretaria Acadêmica & Financeiro</option>
                      <option value="parcerias">Estágios & Parcerias Empresariais</option>
                      <option value="imprensa">Comunicação & Assessoria de Imprensa</option>
                      <option value="outros">Outras dúvidas ou sugestões</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Escreva sua Mensagem / Dúvida *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Quais são as suas principais dúvidas acadêmicas?"
                      value={form.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-250 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 rounded-lg text-xs sm:text-sm font-medium transition-all outline-none resize-none shadow-sm"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Enviar Mensagem
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="contact-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="p-4 bg-emerald-50 text-emerald-700 rounded-full animate-bounce">
                  <CheckCircle className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Mensagem Enviada com Sucesso!
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm max-w-sm leading-relaxed font-sans">
                  Agradecemos seu contato. Sua mensagem foi capturada com sucesso no portal fictício da Universidade Franciscana (UFN).
                </p>
                <div className="pt-4">
                  <button
                    id="reset-contact-success-btn"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-slate-950 hover:bg-slate-900 text-white rounded-lg text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

    </div>
  );
}
