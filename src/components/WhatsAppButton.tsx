import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";

type Variant = "primary" | "ghost" | "floating";

interface WhatsAppButtonProps {
  variant?: Variant;
  label?: string;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400",
  ghost:
    "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20",
  floating:
    "fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-600/40 transition hover:bg-emerald-600 sm:bottom-8 sm:right-8",
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={className ?? "h-5 w-5"}
      fill="currentColor"
    >
      <path d="M19.11 17.38c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.13-.17.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.16-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.11-.55.11-.11.24-.29.36-.44.12-.15.16-.25.24-.42.08-.17.04-.32-.02-.45-.07-.13-.6-1.44-.82-1.98-.21-.51-.43-.44-.6-.45h-.51c-.18 0-.47.07-.71.33-.24.27-.94.92-.94 2.24 0 1.32.96 2.59 1.1 2.77.13.18 1.89 2.88 4.58 4.04.64.28 1.14.45 1.53.57.64.2 1.22.17 1.68.1.51-.08 1.58-.64 1.8-1.27.22-.62.22-1.16.16-1.27-.07-.11-.24-.18-.51-.31zM16.02 5.33c-5.89 0-10.67 4.78-10.67 10.67 0 1.88.49 3.73 1.42 5.35L5.33 26.67l5.5-1.41a10.62 10.62 0 0 0 5.19 1.34h.01c5.89 0 10.67-4.78 10.67-10.67 0-2.85-1.11-5.53-3.13-7.55a10.59 10.59 0 0 0-7.55-3.05zm0 19.5h-.01a8.84 8.84 0 0 1-4.5-1.23l-.32-.19-3.27.84.87-3.19-.21-.33a8.85 8.85 0 0 1-1.36-4.74c0-4.9 3.99-8.88 8.89-8.88 2.37 0 4.6.92 6.28 2.6a8.82 8.82 0 0 1 2.6 6.28c-.01 4.9-3.99 8.84-8.87 8.84z" />
    </svg>
  );
}

export function WhatsAppButton({
  variant = "primary",
  label = "WhatsApp +852 9571 5155",
  className = "",
}: WhatsAppButtonProps) {
  return (
    <Link
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Jupiter's Design on WhatsApp at +852 9571 5155"
      className={`${variantClasses[variant]} ${className}`.trim()}
    >
      <WhatsAppIcon />
      <span>{label}</span>
    </Link>
  );
}
