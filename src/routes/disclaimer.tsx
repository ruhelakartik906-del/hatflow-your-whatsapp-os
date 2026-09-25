import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({ meta: [
    { title: "Disclaimer | HATFLOW" },
    { name: "description", content: "Important information about Hatflow, the WhatsApp Business API, third-party platforms and website content." },
    { property: "og:title", content: "Disclaimer | HATFLOW" },
    { property: "og:description", content: "Important information about Hatflow, the WhatsApp Business API, third-party platforms and website content." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ]}),
  component: DisclaimerPagePage,
});

function DisclaimerPagePage() { return <LegalPage title="Disclaimer"><h2>General information</h2><p>The content on this website is provided for general information about Hatflow, a product by UnknownHat Agency. We aim to keep it accurate but do not guarantee it is complete or always up to date.</p><h2>Trademarks</h2><p>WhatsApp, Meta, Facebook and all other product names, logos and brands shown on this website are trademarks of their respective owners. Their use is only to identify integrations and does not imply endorsement or partnership unless stated.</p><h2>WhatsApp Business API</h2><p>Hatflow uses the official WhatsApp Business Platform. Approval of business accounts, display names, green-tick verification and message templates is decided by Meta. Meta's conversation charges are separate from Hatflow plans.</p><h2>AI features</h2><p>AI-generated replies may occasionally be inaccurate. Businesses should review AI configuration and keep human handoff available for important conversations.</p><h2>No guaranteed results</h2><p>Examples of workflows, use cases and outcomes are illustrative. Results depend on your business, audience and usage.</p><h2>External links</h2><p>Our website may link to third-party websites. We are not responsible for their content or practices.</p><h2>Contact</h2><a className="legal-contact" href="https://wa.me/917055481738?text=Hello%2C%20UnknownHat%20Team!" target="_blank" rel="noreferrer">Chat with us on WhatsApp: +91 70554 81738</a></LegalPage>; }
