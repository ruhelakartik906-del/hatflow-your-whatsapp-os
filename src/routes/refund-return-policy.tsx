import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/refund-return-policy")({
  head: () => ({ meta: [
    { title: "Refund & Return Policy | HATFLOW" },
    { name: "description", content: "Refund, cancellation and renewal policy for Hatflow subscription plans." },
    { property: "og:title", content: "Refund & Return Policy | HATFLOW" },
    { property: "og:description", content: "Refund, cancellation and renewal policy for Hatflow subscription plans." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ]}),
  component: RefundPagePage,
});

function RefundPagePage() { return <LegalPage title="Refund & Return Policy"><p>Hatflow is a digital software subscription. As no physical goods are delivered, returns do not apply. This policy explains cancellations and refunds.</p><h2>1. Subscription plans</h2><p>Plans are billed in advance on a monthly or yearly basis. Your plan stays active until the end of the paid period.</p><h2>2. Cancellation</h2><p>You can cancel auto-renewal at any time before your next billing date. Cancellation stops future charges; access continues until the current period ends.</p><h2>3. Refunds</h2><ul><li>Subscription fees for a billing period already started are generally non-refundable.</li><li>If you were charged twice or incorrectly, contact us within 7 days and we will refund the extra amount after verification.</li><li>If the service could not be activated due to a technical issue on our side, you may request a refund within 7 days of purchase.</li></ul><h2>4. Non-refundable charges</h2><p>WhatsApp conversation charges paid to Meta, setup or custom development work already delivered, and third-party fees are not refundable.</p><h2>5. How to request</h2><p>Send your registered email, invoice details and reason for the request. Approved refunds are processed to the original payment method within 7–10 working days.</p><a className="legal-contact" href="https://wa.me/917055481738?text=Hello%2C%20UnknownHat%20Team!" target="_blank" rel="noreferrer">Chat with us on WhatsApp: +91 70554 81738</a></LegalPage>; }
