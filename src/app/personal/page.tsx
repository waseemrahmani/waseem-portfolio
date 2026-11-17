import type { Metadata } from "next";
import { bookSections } from "@/config/personal";
import BookSectionAccordion from "@/components/personal/BookSection";

export const metadata: Metadata = {
  title: "Personal",
  description: "A small collection of books Waseem Rahmani reads, revisits, and recommends.",
  alternates: {
    canonical: "/personal",
  },
};

export default function PersonalPage() {
  return (
    <div className="site-container page-shell">
      <header className="page-header">
        <p className="eyebrow">Personal</p>
        <h1 className="page-title">A little outside engineering.</h1>
        <p className="page-lead">
          A small collection of books I read, revisit, and recommend.
        </p>
      </header>

      <BookSectionAccordion sections={bookSections} />
    </div>
  );
}
