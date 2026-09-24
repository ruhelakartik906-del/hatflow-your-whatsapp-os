import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/support")({
  head: () => ({ meta: [
    { title: "Support | HATFLOW" },
    { name: "description", content: "Get support for your HATFLOW WhatsApp Business automation account." },
    { property: "og:title", content: "Support | HATFLOW" },
    { property: "og:description", content: "Get support for your HATFLOW WhatsApp Business automation account." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ]}),
  component: SupportPage,
});

function SupportPage() { return <LegalPage title="Support"><h2>How can we help?</h2><p>For help with your account, WhatsApp connection, billing, integrations or automations, contact the Hatflow team.</p><a className="legal-contact" href="/#contact">Talk to the Hatflow team</a><h2>When you contact us</h2><p>Please include your account email and a short description of the issue. Do not share passwords, verification codes or payment credentials.</p></LegalPage>; }