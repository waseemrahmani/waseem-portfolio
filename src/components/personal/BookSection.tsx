"use client";

import { useState } from "react";
import { BookOpen, ChevronRight } from "lucide-react";
import { type BookSection, type BookStatus } from "@/config/personal";

type Props = {
  sections: readonly BookSection[];
};

const statusLabels: Record<BookStatus, string> = {
  read: "Read",
  "re-reading": "Re-reading",
  "to-read": "To Read",
};

export default function BookSectionAccordion({ sections }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);

  function toggle(slug: string) {
    setExpanded((prev) => (prev === slug ? null : slug));
  }

  return (
    <div className="book-categories">
      {sections.map((section) => {
        const isOpen = expanded === section.slug;
        const count = section.books.length;

        return (
          <div key={section.slug} className="book-category">
            <button
              type="button"
              className={`book-category-card${isOpen ? " book-category-card--open" : ""}`}
              onClick={() => toggle(section.slug)}
              aria-expanded={isOpen}
            >
              <div className="book-category-top">
                <BookOpen size={18} className="book-category-icon" />
                <div className="book-category-info">
                  <h2 className="book-category-title">{section.title}</h2>
                  <p className="book-category-desc">{section.description}</p>
                </div>
                <span className="book-category-count">
                  {count > 0 ? `${count} book${count !== 1 ? "s" : ""}` : "Empty"}
                </span>
                <ChevronRight
                  size={16}
                  className={`book-category-arrow${isOpen ? " book-category-arrow--open" : ""}`}
                />
              </div>
            </button>

            <div
              className={`book-category-panel${isOpen ? " book-category-panel--open" : ""}`}
              aria-hidden={!isOpen}
            >
              {count > 0 ? (
                <div className="book-grid">
                  {section.books.map((book) => (
                    <article key={book.title} className="book-card">
                      <div className="book-card-inner">
                        <div className="book-card-body">
                          <h3 className="book-card-title">{book.title}</h3>
                          {book.author && (
                            <p className="book-card-author">{book.author}</p>
                          )}
                        </div>
                        <span className={`book-status book-status--${book.status}`}>
                          {statusLabels[book.status]}
                        </span>
                      </div>
                      {book.image && (
                        <div className="book-card-cover">
                          <img src={book.image} alt={`${book.title} cover`} />
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              ) : (
                <p className="book-empty">Fiction shelf coming soon.</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
