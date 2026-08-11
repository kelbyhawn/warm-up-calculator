import type { Metadata } from "next";
import { Inclusive_Sans } from "next/font/google";
import "./page.scss";

const inclusiveSans = Inclusive_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Warm-Up Calculator",
  description: "Calculate basic weightlifting warm-up sets.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inclusiveSans.className}>
      <body>{children}</body>
    </html>
  );
}
