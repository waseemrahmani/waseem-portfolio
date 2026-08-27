export type SearchCategory =
  | "page"
  | "project"
  | "work"
  | "personal"
  | "tech"
  | "resume";

export type SearchDocument = {
  id: string;
  title: string;
  category: SearchCategory;
  href: string;
  description?: string;
  content?: string;
  keywords?: readonly string[];
  section?: string;
};

export type SearchResult = {
  document: SearchDocument;
  score: number;
};
