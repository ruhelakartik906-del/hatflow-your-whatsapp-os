import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [
    { title: "Privacy Policy | HATFLOW" },
    { name: "description", content: "Learn how HATFLOW handles and protects personal information." },
    { property: "og:title", content: "Privacy Policy | HATFLOW" },
    { property: "og:description", content: "Learn how HATFLOW handles and protects personal information." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ]}), component: PrivacyPage,
});

function PrivacyPage() { return <LegalPage title="Privacy Policy"><h2>Information we collect</h2><p>We may collect account, contact, billing and product usage information needed to provide and improve Hatflow.</p><h2>How information is used</h2><p>Information is used to operate the service, provide support, maintain security, process requests and communicate essential service updates.</p><h2>Service providers</h2><p>Hatflow may use trusted infrastructure, communication and payment providers. Their handling of information is governed by their respective terms and privacy practices.</p><h2>Your choices</h2><p>You may request access, correction or deletion of eligible personal information by contacting support.</p></LegalPage>; }