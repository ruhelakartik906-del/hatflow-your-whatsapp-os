import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/info-page";

const t = "Hatflow Integrations — Shopify, WooCommerce, Razorpay, HubSpot & More";
const d = "Connect WhatsApp with Shopify, WooCommerce, Razorpay, Cashfree, Stripe, HubSpot, Zoho CRM, Google Sheets, OpenAI, Gemini, IndiaMART and more with Hatflow.";

export const Route = createFileRoute("/integrations")({
  head: () => ({ meta: [
    { title: t }, { name: "description", content: d },
    { property: "og:title", content: t }, { property: "og:description", content: d },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://hatflow.in/__l5e/assets-v1/a28b6960-bbad-4edc-b2d0-18ff7141082b/hatflow-social-preview.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: "https://hatflow.in/__l5e/assets-v1/a28b6960-bbad-4edc-b2d0-18ff7141082b/hatflow-social-preview.png" },
  ]}),
  component: () => <InfoPage eyebrow="28 INTEGRATIONS" title="Connect WhatsApp to the Tools You Already Use." intro="Hatflow links your WhatsApp conversations with commerce, CRM, payments, AI, automation and communication tools — so data moves automatically and your team works from one place." sections={sections} />,
});

const sections = [
  { eyebrow: "BY CATEGORY", title: "All Integrations", blocks: [
    { tag: "ECOMMERCE", title: "Stores & shipping", copy: "Sync orders, carts and shipments to trigger WhatsApp updates.", points: ["Shopify", "WooCommerce", "WordPress", "Shiprocket"] },
    { tag: "CRM", title: "Customer systems", copy: "Keep leads and contacts in sync with your sales tools.", points: ["HubSpot", "Zoho CRM", "Google Contacts", "Google Sheets"] },
    { tag: "PAYMENTS", title: "Payment gateways", copy: "Send payment links and confirm payments on WhatsApp.", points: ["Razorpay", "Cashfree", "Stripe"] },
    { tag: "AI", title: "AI models", copy: "Power smart replies and intent detection.", points: ["OpenAI", "Google Gemini"] },
    { tag: "LEADS & ADS", title: "Lead sources", copy: "Reply instantly to new leads from ads and B2B portals.", points: ["Facebook Lead Ads / Meta", "Google Ads", "IndiaMART", "TradeIndia", "ExportersIndia"] },
    { tag: "AUTOMATION & COMMUNICATION", title: "Workflow & messaging", copy: "Connect scheduling, meetings and automation platforms.", points: ["Make, n8n, Zapier", "Google Calendar, Calendly, Zoom", "Telegram, SMTP email"] },
  ]},
  { eyebrow: "HOW IT WORKS", title: "Connect in Three Steps", blocks: [
    { tag: "01", title: "Choose an app", copy: "Open Integrations inside Hatflow and pick the platform you want to connect." },
    { tag: "02", title: "Authorise the connection", copy: "Sign in or paste your API key — the status changes from Not Connected to Connected." },
    { tag: "03", title: "Use it in a flow", copy: "Add the integration as a trigger or action in the flow builder, or start from a template." },
  ]},
] as const;
