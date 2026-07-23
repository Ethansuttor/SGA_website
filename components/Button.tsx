import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

/**
 * Button variants map directly to the design system:
 *  - primary: solid Cardinal Red, white text, bold uppercase
 *  - secondary: solid black, white text
 *  - outline: 2px Cardinal Red border, red text
 */
type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded font-body font-bold uppercase tracking-[0.05em] text-label-md transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uofl-red";

const variants: Record<Variant, string> = {
  primary: "bg-uofl-red text-white hover:bg-[#8f0000] hover:shadow-ambient",
  secondary: "bg-uofl-black text-white hover:bg-[#2a2a2a] hover:shadow-ambient",
  outline:
    "border-2 border-uofl-red text-uofl-red bg-transparent hover:bg-uofl-red hover:text-white",
  ghost: "text-uofl-red hover:underline underline-offset-4 normal-case tracking-normal font-semibold",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5",
  lg: "px-7 py-3.5 text-body-md",
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  external?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  external,
  className = "",
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${variant === "ghost" ? "" : sizes[size]} ${className}`;
  const content = (
    <>
      {children}
      {icon && <Icon name={icon} size={18} />}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
