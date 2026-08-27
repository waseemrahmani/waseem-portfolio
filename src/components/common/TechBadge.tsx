import type { ReactNode } from "react";

const iconSlugs: Record<string, string> = {
  Python: "python",
  React: "react",
  "Tailwind CSS": "tailwindcss",
  Docker: "docker",
  Kubernetes: "kubernetes",
  Git: "git",
  GitHub: "github",
  Postman: "postman",
  Grafana: "grafana",
  Prometheus: "prometheus",
  Django: "django",
  FastAPI: "fastapi",
  Java: "openjdk",
  TypeScript: "typescript",
  "C++": "cplusplus",
  C: "c",
  SQL: "databricks",
  Android: "android",
  iOS: "apple",
  "Objective-C": "apple",
  Express: "express",
  "REST APIs": "fastapi",
  LangChain: "langchain",
  LangGraph: "langgraph",
};

const lightIcons = new Set(["apple", "openjdk"]);

export function TechBadge({ children, expandable }: { children: ReactNode; expandable?: boolean }) {
  const label = typeof children === "string" ? children : "";
  const slug = iconSlugs[label];
  const isDarkIcon = slug !== undefined && lightIcons.has(slug);
  const iconUrl = slug
    ? `https://cdn.simpleicons.org/${slug}${isDarkIcon ? "/CCCCCC" : ""}`
    : undefined;

  return (
    <span
      className={`tech-badge${expandable ? " tech-badge--expandable" : ""}`}
      title={label}
    >
      {iconUrl ? (
        <img
          src={iconUrl}
          alt=""
          className="tech-badge-icon"
          loading="lazy"
          referrerPolicy="no-referrer"
          {...(isDarkIcon ? { "data-dark-icon": "true" } : {})}
        />
      ) : null}
      {expandable ? (
        <span className="tech-badge-label" aria-hidden="true">
          {children}
        </span>
      ) : (
        <span>{children}</span>
      )}
      {expandable && <span className="sr-only">{label}</span>}
    </span>
  );
}
