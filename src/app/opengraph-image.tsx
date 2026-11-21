import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Encendé — Una página que trabaja mientras vos trabajás.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1C3557",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "#F59E0B",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: "700",
              color: "#1C3557",
            }}
          >
            E
          </div>
          <span style={{ fontSize: "36px", fontWeight: "700", color: "#ffffff" }}>
            Encendé
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "700",
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          Una página que trabaja{" "}
          <span style={{ color: "#F59E0B" }}>mientras vos trabajás.</span>
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.65)",
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          Turnos, señas, pedidos y ventas. Sin que atiendas el teléfono.
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            fontSize: "22px",
            color: "#F59E0B",
            fontWeight: "600",
          }}
        >
          encende.click
        </div>
      </div>
    ),
    { ...size }
  );
}
