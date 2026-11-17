import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Waseem Rahmani | Software Engineer × AI";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 84px",
          background: "#101014",
          color: "#f7f4ff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 99,
              background: "#b69cff",
            }}
          />
          <span style={{ fontSize: 24, color: "#c7bddb" }}>PORTFOLIO · INDIA</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3 }}>
            Waseem Rahmani
          </div>
          <div style={{ fontSize: 38, color: "#c5b5e8" }}>
            Software Engineer × AI
          </div>
          <div style={{ fontSize: 25, color: "#b7b2c2", maxWidth: 900 }}>
            Building intelligent software, agentic systems, automation, and developer tools.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 23, color: "#a9a3b5" }}>
          <span>waseemrahmani.vercel.app</span>
          <span>Projects · Experience · Engineering</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
