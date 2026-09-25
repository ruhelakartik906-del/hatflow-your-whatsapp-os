import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/site-sections";
import { Button } from "@/components/ui/button";
import hatflowLogo from "@/assets/hatflow-logo.webp.asset.json";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return <main className="legal-page"><header><Link to="/" aria-label="HATFLOW home"><img src={hatflowLogo.url} alt="HATFLOW"/></Link><Button asChild variant="outline" size="sm"><Link to="/"><ArrowLeft/>Back to home</Link></Button></header><article><span>HATFLOW</span><h1>{title}</h1><p className="legal-updated">Last updated: September 24, 2026</p>{children}</article><SiteFooter/></main>;
}