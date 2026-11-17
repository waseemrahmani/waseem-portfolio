import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { projects } from "@/config/projects";

export const runtime = "edge";
export const alt = "Project by Waseem Rahmani";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ProjectOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  return new ImageResponse(
    (
      <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "76px 84px",
        background: "#101014",
        color: "#f7f4ff",
        fontFamily: "Arial, sans-serif",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 14, height: 14, borderRadius: 99, background: "#b69cff" }} />
          <span style={{ fontSize: 24, color: "#c7bddb" }}>PROJECT · WASEEM RAHMANI</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 66, fontWeight: 700, letterSpacing: -2, maxWidth: 1000 }}>
            {project.title}
          </div>
          <div style={{ fontSize: 30, color: "#c5b5e8", maxWidth: 1000, lineHeight: 1.35 }}>
            {project.shortDescription}
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {project.technologies.slice(0, 5).map((technology) => (
              <span key={technology} style={{
                border: "1px solid #494052",
                borderRadius: 20,
                padding: "9px 16px",
                color: "#d8c9f4",
                fontSize: 18,
              }}>
                {technology}
              </span>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#a9a3b5" }}>
          <span>Waseem Rahmani</span>
          <span>waseemrahmani.vercel.app</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
