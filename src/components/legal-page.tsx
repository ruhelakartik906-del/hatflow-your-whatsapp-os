import { SiteFooter } from "@/components/site-sections";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return <main className="legal-page"><article><span>HATFLOW</span><h1>{title}</h1><p className="legal-updated">Last updated: September 24, 2026</p>{children}</article><SiteFooter/></main>;
}