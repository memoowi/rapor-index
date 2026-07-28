export interface SemesterData {
  diknas?: string;
  jago_it?: string;
  pinter_ngaji?: string;
}

export interface StudentData {
  name: string;
  nis: string;
  semester_1?: SemesterData;
  semester_2?: SemesterData;
  semester_3?: SemesterData;
  semester_4?: SemesterData;
}