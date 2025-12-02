export interface VocabItem {
  it: string;
  pron: string;
  es: string;
  context: string;
  fraseIt?: string;
  fraseEs?: string;
  frasePron?: string;
  icon?: string;
  color?: string;
  text?: string;
  border?: boolean;
}

export interface Category {
  title: string;
  desc: string;
  items: VocabItem[];
}

export type CategoryKey = 
  | 'saludos'
  | 'presentacion'
  | 'numeros'
  | 'colores'
  | 'animales'
  | 'viajes'
  | 'clima';

export type ViewType = 'home' | 'quiz' | CategoryKey;

export interface QuizQuestion {
  question: string;
  correctAnswer: string;
  options: string[];
}