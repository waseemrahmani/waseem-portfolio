import type { ReactNode } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ProjectArchitecture } from "./ProjectArchitecture";

const components = {
  ProjectArchitecture,
  h1: ({ children }: { children: ReactNode }) => <h1 className="mt-10 text-3xl font-semibold tracking-[-0.03em]">{children}</h1>,
  h2: ({ children }: { children: ReactNode }) => <h2 className="mt-10 text-xl font-semibold tracking-[-0.02em]">{children}</h2>,
  h3: ({ children }: { children: ReactNode }) => <h3 className="mt-8 text-base font-semibold">{children}</h3>,
  p: ({ children }: { children: ReactNode }) => <p className="mt-4 text-sm leading-7 text-secondary">{children}</p>,
  ul: ({ children }: { children: ReactNode }) => <ul className="mt-4 space-y-2 text-sm leading-7 text-secondary">{children}</ul>,
  li: ({ children }: { children: ReactNode }) => <li className="list-disc pl-2 ml-4">{children}</li>,
  a: ({ href, children }: { href?: string; children: ReactNode }) => <a className="underline decoration-border underline-offset-4 hover:decoration-foreground" href={href}>{children}</a>,
  code: ({ children }: { children: ReactNode }) => <code className="rounded bg-surface px-1.5 py-0.5 text-xs text-foreground">{children}</code>,
};

export function ProjectMdx({ source }: { source: string }) {
  return (
    <article className="prose-none">
      <MDXRemote source={source} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} components={components} />
    </article>
  );
}
