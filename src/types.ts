export interface Course {
  id: string;
  name: string;
  duration: string;
  prerequisites: string;
  professor: string;
  description: string;
  subjects: string[];
  category: "technology" | "management" | "design" | "health";
}

export interface StudentInput {
  name: string;
  cpf: string;
  rg: string;
  phone: string;
  address: string;
  course: string;
}

export interface ProfessorInput {
  name: string;
  cpf: string;
  area: string;
  phone: string;
  email: string;
}

export interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}
