import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PartnershipSection, SiteFooter } from "@/components/site-sections";

export const WHATSAPP_URL = "https://wa.me/917055481738?text=Hello%2C%20UnknownHat%20Team!";

export type InfoBlock = { title: string; copy: string; points?: readonly string[]; tag?: string };
export type InfoSection = { eyebrow: string; title: string; copy?: string; blocks: readonly InfoBlock[] };

export function InfoPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: readonly InfoSection[] }) {
  return (
    <main className="info-page">
      <section className="info-hero reveal">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
        <div className="info-actions">
          <Button asChild size="lg"><a href="https://app.hatflow.in/signup">Get Started <ArrowRight /></a></Button>
          <Button asChild size="lg" variant="outline"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Talk to an Expert</a></Button>
        </div>
      </section>
      {sections.map((s) => (
        <section className="info-section reveal" key={s.title}>
          <div className="info-head"><span className="eyebrow">{s.eyebrow}</span><h2>{s.title}</h2>{s.copy && <p>{s.copy}</p>}</div>
          <div className="info-grid">
            {s.blocks.map((b) => (
              <article key={b.title}>
                {b.tag && <small>{b.tag}</small>}
                <h3>{b.title}</h3>
                <p>{b.copy}</p>
                {b.points && <ul>{b.points.map((p) => <li key={p}><Check />{p}</li>)}</ul>}
              </article>
            ))}
          </div>
        </section>
      ))}
      <section className="info-cta reveal">
        <h2>Ready to put WhatsApp to work?</h2>
        <p>Start with Hatflow today or talk to the UnknownHat team about your setup.</p>
        <div className="info-actions">
          <Button asChild size="lg"><a href="https://app.hatflow.in/signup">Get Started Now <ArrowRight /></a></Button>
          <Button asChild size="lg" variant="outline"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Talk to an Expert</a></Button>
        </div>
      </section>
      <PartnershipSection />
      <SiteFooter />
    </main>
  );
}
