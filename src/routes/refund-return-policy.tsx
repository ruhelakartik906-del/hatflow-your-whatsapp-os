import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/refund-return-policy")({
  head: () => ({ meta: [
    { title: "Refund & Return Policy | HATFLOW" },
    { name: "description", content: "Read the HATFLOW policy for billing concerns and refund requests." },
    { property: "og:title", content: "Refund & Return Policy | HATFLOW" },
    { property: "og:description", content: "Read the HATFLOW policy for billing concerns and refund requests." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ]}), component: RefundPage,
});

function RefundPage() { return <LegalPage title="Refund & Return Policy"><h2>Digital service</h2><p>Hatflow is a digital subscription service, so physical returns do not apply.</p><h2>Billing concerns</h2><p>If you believe a charge was made in error, contact support promptly with the relevant account and transaction details.</p><h2>Refund review</h2><p>Eligible refund requests are reviewed individually according to the purchased plan, service usage, setup work completed and applicable law. Third-party fees already incurred may not be refundable.</p></LegalPage>; }