import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// The preview card people see when the link is shared on Messenger / Facebook.
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const svg = await readFile(join(process.cwd(), "public/brand/pianoforte-logo-light.svg"));
  const logo = `data:image/svg+xml;base64,${svg.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", background: "#faf8f4", color: "#0e0d0c", padding: "0 80px", position: "relative" }}>
        <div style={{ position: "absolute", top: 28, left: 28, right: 28, bottom: 28, border: "2px solid #7a5a34", display: "flex" }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={420} height={420} alt="" />
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 56, fontFamily: "serif" }}>
          <div style={{ fontSize: 26, letterSpacing: 8, color: "#7a5a34" }}>11 SHOWROOMS NATIONWIDE</div>
          <div style={{ fontSize: 62, lineHeight: 1.1, marginTop: 18, fontStyle: "italic" }}>Every piano.</div>
          <div style={{ fontSize: 62, lineHeight: 1.1, fontStyle: "italic" }}>Every branch.</div>
          <div style={{ fontSize: 62, lineHeight: 1.1, fontStyle: "italic" }}>One place.</div>
          <div style={{ fontSize: 22, marginTop: 26, letterSpacing: 5, color: "#4a453e" }}>GRAND · UPRIGHT · DIGITAL · STRINGS</div>
        </div>
      </div>
    ),
    size,
  );
}