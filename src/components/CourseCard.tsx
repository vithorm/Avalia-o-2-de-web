import { useState } from "react";
import { Link } from "react-router-dom";
import { Course } from "../types";
import { BookOpen, Clock, Award, ShieldAlert, ChevronDown, ChevronUp, User } from "lucide-react";
import { motion } from "motion/react";

interface CourseCardProps {
  course: Course;
  key?: string;
}

export default function CourseCard({ course }: CourseCardProps) {
  const [showCurriculum, setShowCurriculum] = useState(false);

  // Define category badge colors and icons
  const iconColors = {
    technology: "bg-blue-100 text-blue-600",
    management: "bg-emerald-100 text-emerald-600",
    design: "bg-purple-100 text-purple-600",
    health: "bg-rose-100 text-rose-600",
  };

  const categoryLabels = {
    technology: "Tecnologia",
    management: "Gestão & Sociais",
    design: "Design & Artes",
    health: "Ciências da Saúde",
  };

  return (
    <motion.div
      id={`course-card-${course.id}`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col hover:border-blue-300 hover:shadow-md transition-all duration-300 h-full"
    >
      {/* Icon Area */}
      <div className="flex justify-between items-start mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${iconColors[course.category]}`}>
          <BookOpen className="h-5 w-5" />
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
          course.category === 'technology' 
            ? 'bg-blue-50 text-blue-700 border-blue-200' 
            : course.category === 'management' 
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
              : course.category === 'design'
                ? 'bg-purple-50 text-purple-700 border-purple-200'
                : 'bg-rose-50 text-rose-700 border-rose-200'
        }`}>
          {categoryLabels[course.category]}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-700 transition-colors">
        {course.name}
      </h3>

      {/* Description */}
      <p className="text-slate-500 text-sm mb-4 line-clamp-3 leading-relaxed">
        {course.description}
      </p>

      {/* Academic Details list */}
      <div className="mt-auto pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-slate-400 shrink-0" />
          <span>
            <strong className="text-slate-800">Docente:</strong> {course.professor}
          </span>
        </div>
        <div className="flex items-start gap-2">
          <ShieldAlert className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
          <span>
            <strong className="text-slate-800 font-sans">Requisitos:</strong> {course.prerequisites}
          </span>
        </div>
      </div>

      {/* Toggle Grade Component footer */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
        <button
          id={`toggle-curriculum-${course.id}`}
          onClick={() => setShowCurriculum(!showCurriculum)}
          className="w-full py-2 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 text-slate-600 rounded-lg font-semibold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
        >
          <span>{showCurriculum ? "Ocultar Grade Letiva" : "Visualizar Grade Letiva"}</span>
          {showCurriculum ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>

        {showCurriculum && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="bg-slate-50 rounded-lg p-3 border border-slate-200 overflow-hidden text-[11px]"
          >
            <h4 className="font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1">
              <Award className="h-3.5 w-3.5 text-blue-600 shrink-0" /> Disciplinas Principais:
            </h4>
            <ul className="space-y-1 text-slate-600 list-disc list-inside">
              {course.subjects.map((subject, idx) => (
                <li key={idx} className="line-clamp-1">{subject}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>

      <div className="mt-3 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider pt-2 border-t border-slate-50">
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3 text-slate-400" />
          <span>{course.duration}</span>
        </div>
        <Link to="/cadastro-aluno" className="text-blue-700 hover:text-blue-800 transition-colors">
          Inscrever-se →
        </Link>
      </div>
    </motion.div>
  );
}
