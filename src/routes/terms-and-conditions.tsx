import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({ meta: [
    { title: "Terms & Conditions | HATFLOW" },
    { name: "description", content: "Terms governing access to and use of the HATFLOW platform." },
    { property: "og:title", content: "Terms & Conditions | HATFLOW" },
    { property: "og:description", content: "Terms governing access to and use of the HATFLOW platform." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ]}), component: TermsPage,
});

function TermsPage() { return <LegalPage title="Terms & Conditions"><h2>Using Hatflow</h2><p>You are responsible for lawful use of the platform, your account security and the accuracy of information supplied to Hatflow.</p><h2>WhatsApp and third-party services</h2><p>Use of WhatsApp and connected services remains subject to their policies, approvals, availability and applicable charges.</p><h2>Plans and billing</h2><p>Plan limits, billing periods and included capabilities are shown during purchase. Third-party messaging or platform fees may be billed separately.</p><h2>Acceptable use</h2><p>You must not use Hatflow for unlawful, deceptive, abusive or unauthorized messaging.</p></LegalPage>; }