import { SiteFooter } from "@/components/site-sections";

export function LegalPage({ title, updated = "September 24, 2026", children }: { title: string; updated?: string; children: React.ReactNode }) {
  return <main className="legal-page"><article className="reveal"><span>HATFLOW</span><h1>{title}</h1><p className="legal-updated">Last updated: {updated}</p>{children}</article><SiteFooter/></main>;
}