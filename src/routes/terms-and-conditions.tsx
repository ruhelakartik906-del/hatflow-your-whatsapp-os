import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({ meta: [
    { title: "Terms & Conditions | HATFLOW" },
    { name: "description", content: "The terms that govern your use of the Hatflow WhatsApp Business automation platform." },
    { property: "og:title", content: "Terms & Conditions | HATFLOW" },
    { property: "og:description", content: "The terms that govern your use of the Hatflow WhatsApp Business automation platform." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ]}),
  component: TermsPagePage,
});

function TermsPagePage() { return <LegalPage title="Terms & Conditions"><p>By creating an account or using Hatflow, a product by UnknownHat Agency, you agree to these Terms & Conditions.</p><h2>1. The service</h2><p>Hatflow provides software for WhatsApp Business API messaging, team inbox, chatbots, automation, CRM, AI features and integrations.</p><h2>2. Accounts</h2><p>You must provide accurate information and keep your login credentials secure. You are responsible for all activity under your account and team members.</p><h2>3. WhatsApp and Meta policies</h2><p>You must comply with the WhatsApp Business Policy, Commerce Policy and Meta terms. Message templates are subject to Meta approval. Accounts or numbers restricted by Meta are outside our control.</p><h2>4. Acceptable use</h2><ul><li>No spam or messaging without customer opt-in</li><li>No illegal, misleading, abusive or harmful content</li><li>No attempts to disrupt, reverse engineer or misuse the platform</li></ul><h2>5. Plans and payments</h2><p>Subscriptions are billed monthly or yearly as selected. Plan limits (contacts, team members, workflows, chatbots, numbers) apply as described on the pricing page. WhatsApp conversation charges from Meta are billed separately.</p><h2>6. Upgrades and cancellation</h2><p>You may upgrade at any time. You may cancel renewal before the next billing cycle. Refunds follow our Return &amp; Refund Policy.</p><h2>7. Your data</h2><p>You own your content and customer data. You grant us permission to process it only to provide the service.</p><h2>8. Suspension</h2><p>We may suspend or terminate accounts that violate these terms or Meta policies, or that pose a security risk.</p><h2>9. Limitation of liability</h2><p>The service is provided "as is". To the extent permitted by law, we are not liable for indirect or consequential losses, or for outages caused by third-party platforms including Meta.</p><h2>10. Governing law</h2><p>These terms are governed by the laws of India.</p><h2>11. Contact</h2><a className="legal-contact" href="https://wa.me/917055481738?text=Hello%2C%20UnknownHat%20Team!" target="_blank" rel="noreferrer">Chat with us on WhatsApp: +91 70554 81738</a></LegalPage>; }
