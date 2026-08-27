import type { ReactNode } from "react";

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
    </>
  );
}
