import type { Config } from "tailwindcss";

/**
 * Tokens mapped 1:1 from the Stitch "Academic Governance System" design system
 * (project 13492716766619343241). Do not tint uofl-red / uofl-black — brand rule.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand primaries — full strength only, never tinted
        "uofl-red": "#AD0000",
        "uofl-black": "#000000",
        // Design-system surface + role tokens
        primary: "#810000",
        "primary-container": "#AD0000",
        "on-primary": "#ffffff",
        "on-primary-container": "#ffb7ac",
        "primary-fixed": "#ffdad4",
        "primary-fixed-dim": "#ffb4a8",
        secondary: "#5e5e5e",
        "secondary-container": "#e2e2e2",
        "on-secondary-container": "#646464",
        background: "#FBF9F4",
        "off-white": "#F7F5F0",
        surface: "#fbf9f4",
        "surface-bright": "#fbf9f4",
        "surface-dim": "#dbdad5",
        "surface-gray": "#E5E5E5",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f5f3ee",
        "surface-container": "#f0eee9",
        "surface-container-high": "#eae8e3",
        "surface-container-highest": "#e4e2dd",
        "surface-variant": "#e4e2dd",
        "on-surface": "#1b1c19",
        "on-surface-variant": "#5c403b",
        "on-background": "#1b1c19",
        "inverse-surface": "#30312e",
        "inverse-on-surface": "#f2f1ec",
        outline: "#916f6a",
        "outline-variant": "#e5bdb7",
        "border-subtle": "#D1D1D1",
        error: "#ba1a1a",
        // Official UofL secondary accents — category tags / branch color-coding only
        "accent-loyalty": "#004E74", // navy — Legislative
        "accent-progress": "#00A89D", // teal — sustainability / SLCE
        "accent-courage": "#FEBE10", // gold — Student of the Month
        "accent-innovation": "#AAB43A", // olive
        "accent-patterson": "#9A1220", // Judicial
        "accent-bronze": "#CA942F",
        "accent-ash": "#8B9DA1",
        "accent-laurel": "#98BD83",
      },
      fontFamily: {
        headline: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-libre-franklin)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "label-sm": ["12px", { lineHeight: "14px", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", fontWeight: "700" }],
        "headline-xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
      },
      borderRadius: {
        none: "0",
        DEFAULT: "0.25rem", // buttons / inputs
        md: "0.375rem",
        lg: "0.5rem", // cards
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        "stack-sm": "8px",
        "stack-md": "16px",
        "stack-lg": "32px",
        gutter: "24px",
        "margin-mobile": "16px",
        "section-padding": "64px",
      },
      maxWidth: {
        "container-max": "1200px",
      },
      boxShadow: {
        // Soft ambient hover — the only shadow the system permits
        ambient: "0 8px 16px rgba(0,0,0,0.10)",
      },
      keyframes: {
        "underline-in": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
