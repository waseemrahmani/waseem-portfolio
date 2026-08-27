"use client";

import { Search, X } from "lucide-react";
import { useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useSiteSearch } from "@/hooks/useSiteSearch";
import type { SearchDocument, SearchResult } from "@/lib/search";

const categoryLabels: Record<string, string> = {
  page: "Pages",
  project: "Projects",
  work: "Work",
  personal: "Books",
  tech: "Tech Stack",
  resume: "Resume",
};

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const nq = query.toLowerCase().trim();
  const idx = text.toLowerCase().indexOf(nq);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="command-highlight">{text.slice(idx, idx + nq.length)}</mark>
      {text.slice(idx + nq.length)}
    </>
  );
}

function groupResults(results: SearchResult[]) {
  const groups = new Map<string, SearchResult[]>();
  for (const r of results) {
    const label = categoryLabels[r.document.category] ?? r.document.category;
    const arr = groups.get(label) ?? [];
    arr.push(r);
    groups.set(label, arr);
  }
  return groups;
}

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { query, setQuery, results, selectedIndex, setSelectedIndex, reset } = useSiteSearch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const navigate = useCallback(
    (doc: SearchDocument) => {
      onClose();
      router.push(doc.href);
    },
    [onClose, router],
  );

  useEffect(() => {
    if (!open) return;
    queueMicrotask(() => reset());
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [open, reset]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (open) onClose();
        else {
          window.dispatchEvent(new CustomEvent("portfolio:open-search"));
        }
      }
      if (event.key === "Escape" && open) {
        event.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, setSelectedIndex]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (results[selectedIndex]) navigate(results[selectedIndex].document);
      }
    },
    [results, selectedIndex, setSelectedIndex, navigate],
  );

  useEffect(() => {
    const item = listRef.current?.querySelector(`[data-index="${selectedIndex}"]`);
    item?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  if (!open) return null;

  const groups = groupResults(results);
  const hasQuery = query.trim().length > 0;

  return (
    <div className="command-backdrop" role="dialog" aria-modal="true" aria-label="Search portfolio">
      <button className="command-dismiss" onClick={onClose} aria-label="Close search" />
      <div className="command-dialog">
        <div className="command-topline">
          <Search size={16} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search portfolio..."
            className="command-input"
            aria-label="Search portfolio"
            aria-activedescendant={results[selectedIndex] ? `cmd-result-${selectedIndex}` : undefined}
            role="combobox"
            aria-expanded="true"
            aria-controls="command-results-list"
          />
          <button className="command-close" onClick={onClose} aria-label="Close search">
            <X size={16} />
          </button>
        </div>

        <div className="command-results" ref={listRef} id="command-results-list" role="listbox">
          {results.length === 0 && hasQuery ? (
            <div className="command-empty">
              <p>No results found</p>
              <p className="command-empty-hint">Try another search term.</p>
            </div>
          ) : (
            Array.from(groups.entries()).map(([label, items]) => (
              <div key={label} className="command-group">
                <p className="command-group-label">{label}</p>
                {items.map((item) => {
                  const flatIndex = results.indexOf(item);
                  const isSelected = flatIndex === selectedIndex;
                  return (
                    <button
                      key={item.document.id}
                      data-index={flatIndex}
                      id={`cmd-result-${flatIndex}`}
                      role="option"
                      aria-selected={isSelected}
                      className={`command-result${isSelected ? " command-result--selected" : ""}`}
                      onClick={() => navigate(item.document)}
                      onMouseEnter={() => setSelectedIndex(flatIndex)}
                    >
                      <div className="command-result-text">
                        <span className="command-result-title">
                          <Highlight text={item.document.title} query={query} />
                        </span>
                        {item.document.description && (
                          <span className="command-result-desc">
                            <Highlight text={item.document.description} query={query} />
                          </span>
                        )}
                      </div>
                      <span className="command-result-arrow">→</span>
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        <div className="command-footer-hint">
          <span>↑↓ Navigate</span>
          <span>↵ Open</span>
          <span>Esc Close</span>
        </div>
      </div>
    </div>
  );
}
