import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import hatflowLogo from "@/assets/hatflow-logo.webp.asset.json";
import unknownHatLogo from "@/assets/unknownhat-logo.png.asset.json";
import founderPhoto from "@/assets/unknownhat-founder.png.asset.json";

const NAV_LINKS = [["Product", "product"], ["Solutions", "solutions"], ["Integrations", "integrations"], ["Automations", "automations"], ["Pricing", "pricing"], ["Resources", "faq"]] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="site-nav"><Link to="/" hash="top" className="nav-brand" aria-label="HATFLOW home"><img src={hatflowLogo.url} alt="HATFLOW" className="h-10 w-auto object-contain" /><span>by UnknownHat Agency</span></Link><nav className="desktop-nav">{NAV_LINKS.map(([label, id]) => <Link key={id} to="/" hash={id}>{label}</Link>)}</nav><div className="nav-actions"><a href="https://app.hatflow.in/login" className="login-link">Login</a><Button size="sm" asChild><a href="https://app.hatflow.in/signup">Get Started <ArrowRight /></a></Button></div><Button variant="ghost" size="icon" className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>{menuOpen && <div className="mobile-nav">{NAV_LINKS.map(([label, id]) => <Link key={id} to="/" hash={id} onClick={() => setMenuOpen(false)}>{label}</Link>)}<Button asChild><a href="https://app.hatflow.in/signup" onClick={() => setMenuOpen(false)}>Get Started <ArrowRight /></a></Button></div>}</header>;
}

export function PartnershipSection() {
  return <section className="partnership-band"><div className="section partnership-heading"><img src={unknownHatLogo.url} alt="UnknownHat Agency" loading="lazy" decoding="async"/><div className="section-heading"><span className="eyebrow">OUR PARTNERSHIP</span><h2 className="text-ivory">Hatflow × UnknownHat Agency</h2><p className="text-ivory/65">Technology built by UnknownHat Agency.</p></div></div><div className="section partnership"><div className="founder-wrap"><img src={founderPhoto.url} alt="Founder of UnknownHat Agency at a technology summit" loading="lazy" decoding="async"/><div className="founder-caption"><span>Technology Partner</span><b>UnknownHat Agency</b></div></div><div className="partner-copy"><p>Hatflow is a product built and supported by UnknownHat Agency — combining WhatsApp infrastructure, automation, AI and digital product development.</p><div className="partner-points">{["Product Development","Automation Expertise","Continuous Innovation","Dedicated Support"].map(x=><span key={x}><Check/>{x}</span>)}</div><Button asChild variant="outline"><a href="https://unknowhat.com" target="_blank" rel="noreferrer">Visit UnknownHat Agency <ArrowRight/></a></Button></div></div></section>;
}

export function SiteFooter() {
  return <footer><div className="footer-main"><div className="footer-brand"><img src={hatflowLogo.url} alt="HATFLOW" loading="lazy" decoding="async" className="h-10 w-auto object-contain brightness-0 invert"/><p>WhatsApp Business. Automated.</p><span>A product by <a href="https://unknowhat.com" target="_blank" rel="noreferrer">UnknownHat Agency</a></span></div><nav className="footer-legal" aria-label="Support and legal"><Link to="/support">Support</Link><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms-and-conditions">Terms &amp; Conditions</Link><Link to="/disclaimer">Disclaimer</Link><Link to="/refund-return-policy">Refund &amp; Return Policy</Link></nav></div><div className="footer-bottom"><span>© 2026 Hatflow. All rights reserved.</span></div></footer>;
}
