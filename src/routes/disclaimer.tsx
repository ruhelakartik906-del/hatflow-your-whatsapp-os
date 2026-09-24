import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({ meta: [
    { title: "Disclaimer | HATFLOW" },
    { name: "description", content: "Important information about HATFLOW and connected third-party services." },
    { property: "og:title", content: "Disclaimer | HATFLOW" },
    { property: "og:description", content: "Important information about HATFLOW and connected third-party services." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ]}), component: DisclaimerPage,
});

function DisclaimerPage() { return <LegalPage title="Disclaimer"><h2>Platform information</h2><p>Product information is provided for general guidance and may change as Hatflow and connected services evolve.</p><h2>Third-party services</h2><p>WhatsApp, Meta and other referenced brands are owned by their respective companies. Their availability, approvals, policies and fees are outside Hatflow’s control.</p><h2>Business outcomes</h2><p>Automation, messaging and integration results depend on account configuration, customer behavior and third-party service availability. No specific commercial outcome is guaranteed.</p></LegalPage>; }