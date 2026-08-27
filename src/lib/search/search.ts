import type { SearchDocument, SearchResult } from "./types";
import { normalizeQuery } from "./normalize";

const MAX_RESULTS = 12;

function scoreDocument(doc: SearchDocument, query: string): number {
  const nq = normalizeQuery(query);
  if (!nq) return 0;

  const titleNorm = normalizeQuery(doc.title);
  const descNorm = doc.description ? normalizeQuery(doc.description) : "";
  const contentNorm = doc.content ? normalizeQuery(doc.content) : "";
  const keywordsNorm = doc.keywords ? doc.keywords.map(normalizeQuery) : [];

  if (titleNorm === nq) return 100;
  if (titleNorm.startsWith(nq)) return 90;
  if (titleNorm.includes(nq)) return 80;

  for (const kw of keywordsNorm) {
    if (kw === nq) return 70;
    if (kw.startsWith(nq)) return 65;
    if (kw.includes(nq)) return 60;
  }

  if (descNorm.includes(nq)) return 40;
  if (contentNorm.includes(nq)) return 30;

  const queryWords = nq.split(" ");
  for (const word of queryWords) {
    if (word.length < 2) continue;
    if (titleNorm.includes(word)) return 50;
    if (keywordsNorm.some((kw) => kw.includes(word))) return 45;
    if (descNorm.includes(word)) return 35;
    if (contentNorm.includes(word)) return 25;
  }

  return 0;
}

export function searchSite(
  index: readonly SearchDocument[],
  query: string,
): SearchResult[] {
  const nq = normalizeQuery(query);
  if (!nq) return [];

  const results: SearchResult[] = [];
  for (const doc of index) {
    const score = scoreDocument(doc, nq);
    if (score > 0) {
      results.push({ document: doc, score });
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, MAX_RESULTS);
}

export function getDefaultResults(index: readonly SearchDocument[]): SearchResult[] {
  return index
    .filter((doc) => doc.category === "page")
    .map((doc) => ({ document: doc, score: 0 }));
}
