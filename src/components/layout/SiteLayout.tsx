import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BackToTop } from "@/components/site/BackToTop";
import "@/i18n";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grain flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}