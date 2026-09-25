import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/support")({
  head: () => ({ meta: [
    { title: "Support | HATFLOW" },
    { name: "description", content: "Get help with your Hatflow account, WhatsApp API setup, billing, integrations and automations." },
    { property: "og:title", content: "Support | HATFLOW" },
    { property: "og:description", content: "Get help with your Hatflow account, WhatsApp API setup, billing, integrations and automations." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ]}),
  component: SupportPagePage,
});

function SupportPagePage() { return <LegalPage title="Support"><h2>How can we help?</h2><p>The Hatflow team, powered by UnknownHat Agency, helps you with account setup, WhatsApp Business API onboarding, template approvals, chatbot flows, integrations and billing.</p><a className="legal-contact" href="https://wa.me/917055481738?text=Hello%2C%20UnknownHat%20Team!" target="_blank" rel="noreferrer">Chat with us on WhatsApp: +91 70554 81738</a><h2>What we support</h2><ul><li>WhatsApp Business API connection and number setup</li><li>Message template creation and approval guidance</li><li>Chatbot, flow builder and automation questions</li><li>Integrations such as Shopify, WooCommerce, Razorpay, HubSpot and Google Sheets</li><li>Plans, invoices, upgrades and renewals</li><li>Team inbox, CRM and analytics usage</li></ul><h2>Support by plan</h2><p>Starter plans include email support. Growth and Enterprise plans include priority support.</p><h2>Before you contact us</h2><p>Please share your registered email, business name and a short description or screenshot of the issue. Never share passwords, OTPs or payment card details with anyone, including our team.</p><h2>Account access</h2><p>Log in at app.hatflow.in/login. New users can create an account at app.hatflow.in/signup.</p></LegalPage>; }
