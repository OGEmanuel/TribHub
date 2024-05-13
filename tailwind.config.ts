import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        neutralN0: "rgba(var(--neutral-n0), <alpha-value>)",
        neutralN10: "rgba(var(--neutral-n10), <alpha-value>)",
        neutralN20: "rgba(var(--neutral-n20), <alpha-value>)",
        neutralN30: "rgba(var(--neutral-n30), <alpha-value>)",
        neutralN40: "rgba(var(--neutral-n40), <alpha-value>)",
        neutralN50: "rgba(var(--neutral-n50), <alpha-value>)",
        neutralN60: "rgba(var(--neutral-n60), <alpha-value>)",
        neutralN70: "rgba(var(--neutral-n70), <alpha-value>)",
        neutralN80: "rgba(var(--neutral-n80), <alpha-value>)",
        neutralN90: "rgba(var(--neutral-n90), <alpha-value>)",
        neutralN100: "rgba(var(--neutral-n100), <alpha-value>)",
        neutralN200: "rgba(var(--neutral-n200), <alpha-value>)",
        neutralN300: "rgba(var(--neutral-n300), <alpha-value>)",
        neutralN400: "rgba(var(--neutral-n400), <alpha-value>)",
        neutralN500: "rgba(var(--neutral-n500), <alpha-value>)",
        neutralN600: "rgba(var(--neutral-n600), <alpha-value>)",
        neutralN700: "rgba(var(--neutral-n700), <alpha-value>)",
        neutralN800: "rgba(var(--neutral-n800), <alpha-value>)",
        neutralN900: "rgba(var(--neutral-n900), <alpha-value>)",
        purple01: "rgba(var(--purple-01), <alpha-value>)",
        purple02: "rgba(var(--purple-02), <alpha-value>)",
        purple03: "rgba(var(--purple-03), <alpha-value>)",
        primarys50: "rgba(var(--primary-s50), <alpha-value>)",
        primarys75: "rgba(var(--primary-s75), <alpha-value>)",
        primarys100: "rgba(var(--primary-s100), <alpha-value>)",
        primarys200: "rgba(var(--primary-s200), <alpha-value>)",
        primarys300: "rgba(var(--primary-s300), <alpha-value>)",
        primarys400: "rgba(var(--primary-s400), <alpha-value>)",
        primarys500: "rgba(var(--primary-s500), <alpha-value>)",
        green01: "rgba(var(--green-01), <alpha-value>)",
        green02: "rgba(var(--green-02), <alpha-value>)",
        green03: "rgba(var(--green-03), <alpha-value>)",
        orange01: "rgba(var(--orange-01), <alpha-value>)",
        orange02: "rgba(var(--orange-02), <alpha-value>)",
        orange03: "rgba(var(--orange-03), <alpha-value>)",
        red01: "rgba(var(--red-01), <alpha-value>)",
        red02: "rgba(var(--red-02), <alpha-value>)",
        red03: "rgba(var(--red-03), <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "shadow-01": "0px 8px 8px 0px rgba(42, 49, 63, 0.08)",
        "shadow-015": "0px 4px 16px 0px rgba(42, 49, 63, 0.03)",
        "shadow-02": "0px 2px 4px 0px rgba(42, 49, 63, 0.05)",
        "shadow-03": "0px 8px 24px 0px rgba(42, 49, 63, 0.05)",
        "shadow-035": "0px 4px 16px 0px rgba(42, 49, 63, 0.03)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
