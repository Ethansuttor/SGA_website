/**
 * Site-wide ambient blob field. Sits fixed behind all content so the liquid-glass
 * surfaces have colored light to refract. Brand + official accent hues kept at low
 * opacity so it reads as atmosphere, not decoration — and Cardinal Red is used at
 * full strength (never tinted), just blurred and translucent via opacity.
 */
export function GlassBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-background" />
      {/* blobs */}
      <div
        className="blob blob-anim"
        style={{ background: "#AD0000", width: 520, height: 520, top: "-8%", left: "-6%", opacity: 0.28, animationDelay: "0s" }}
      />
      <div
        className="blob blob-anim"
        style={{ background: "#004E74", width: 460, height: 460, top: "18%", right: "-8%", opacity: 0.22, animationDelay: "-6s" }}
      />
      <div
        className="blob blob-anim"
        style={{ background: "#00A89D", width: 420, height: 420, top: "48%", left: "12%", opacity: 0.18, animationDelay: "-11s" }}
      />
      <div
        className="blob blob-anim"
        style={{ background: "#FEBE10", width: 360, height: 360, top: "68%", right: "6%", opacity: 0.16, animationDelay: "-3s" }}
      />
      <div
        className="blob blob-anim"
        style={{ background: "#9A1220", width: 400, height: 400, top: "88%", left: "-4%", opacity: 0.2, animationDelay: "-14s" }}
      />
      {/* subtle top sheen to lift the whole field */}
      <div
        className="absolute inset-x-0 top-0 h-[40vh]"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0))" }}
      />
    </div>
  );
}
