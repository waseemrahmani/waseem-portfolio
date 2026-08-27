"use client";

import { useCallback, useMemo, useState } from "react";
import { buildSearchIndex, searchSite, getDefaultResults } from "@/lib/search";
import type { SearchResult } from "@/lib/search";

const index = buildSearchIndex();

export function useSiteSearch() {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const results: SearchResult[] = useMemo(() => {
    if (!query.trim()) return getDefaultResults(index);
    return searchSite(index, query);
  }, [query]);

  const reset = useCallback(() => {
    setQuery("");
    setSelectedIndex(0);
  }, []);

  return { query, setQuery, results, selectedIndex, setSelectedIndex, reset };
}
