import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/info-page";

const t = "Hatflow Solutions — WhatsApp Automation Ideas by Industry";
const d = "WhatsApp API, CRM and automation solutions for ecommerce, real estate, education, clinics, travel, D2C brands, agencies and B2B exporters.";

export const Route = createFileRoute("/solutions")({
  head: () => ({ meta: [
    { title: t }, { name: "description", content: d },
    { property: "og:title", content: t }, { property: "og:description", content: d },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://hatflow.in/hatflow-social-preview.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: "https://hatflow.in/hatflow-social-preview.png" },
  ]}),
  component: () => <InfoPage eyebrow="SOLUTIONS" title="WhatsApp Solutions for Every Type of Business." intro="Practical business ideas you can run on Hatflow using the WhatsApp API, automation and CRM — each one starts with a customer trigger and ends with a real outcome." sections={sections} />,
});

const sections = [
  { eyebrow: "BY INDUSTRY", title: "Solutions by Business Type", blocks: [
    { tag: "ECOMMERCE & D2C", title: "Online stores", copy: "Connect Shopify or WooCommerce and automate the full order journey.", points: ["Order & shipping updates", "Abandoned cart recovery", "COD confirmation", "Review requests"] },
    { tag: "REAL ESTATE", title: "Property businesses", copy: "Capture portal and ad leads, qualify them and book site visits.", points: ["Facebook Lead Ads to WhatsApp", "Project brochures", "Site-visit scheduling"] },
    { tag: "EDUCATION", title: "Institutes & coaching", copy: "Handle admission enquiries, fee reminders and class updates.", points: ["Course enquiry bot", "Fee payment links", "Batch announcements"] },
    { tag: "HEALTHCARE", title: "Clinics & wellness", copy: "Automate appointment booking and reminders on WhatsApp.", points: ["Calendly / Google Calendar booking", "Appointment reminders", "Report sharing"] },
    { tag: "B2B & EXPORT", title: "Manufacturers & exporters", copy: "Route IndiaMART, TradeIndia and ExportersIndia leads straight to sales.", points: ["Instant lead reply", "Product catalogue", "Auto-assign to salesperson"] },
    { tag: "SERVICES & AGENCIES", title: "Service businesses", copy: "Qualify enquiries, send quotes and collect payments.", points: ["Lead qualification flow", "Razorpay / Cashfree / Stripe links", "Follow-up reminders"] },
  ]},
  { eyebrow: "API SOLUTIONS", title: "WhatsApp API Use Cases", copy: "Ideas built on the official WhatsApp Business API.", blocks: [
    { title: "Transactional notifications", copy: "Send OTPs, order confirmations, invoices and delivery updates automatically.", points: ["Template messages", "Shiprocket tracking", "Payment receipts"] },
    { title: "Broadcast marketing", copy: "Run offers, launches and festive campaigns to opted-in customers.", points: ["Segmented audiences", "Scheduled campaigns", "Click-to-buy buttons"] },
    { title: "API & webhooks", copy: "Connect your own software to Hatflow to send and receive WhatsApp events.", points: ["API access (Enterprise)", "Custom automation", "Google Sheets sync"] },
  ]},
  { eyebrow: "CRM SOLUTIONS", title: "CRM & Sales Use Cases", blocks: [
    { title: "Lead management", copy: "Every new WhatsApp enquiry becomes a lead with source, stage and owner.", points: ["Pipeline stages", "Lead scoring", "Tags & segments"] },
    { title: "Sales follow-ups", copy: "Never miss a follow-up with reminders and automated nudges.", points: ["Next follow-up dates", "Auto reminders", "Conversation timeline"] },
    { title: "Support desk", copy: "Turn WhatsApp into a support channel with AI replies and human handoff.", points: ["AI first response", "Chat assignment", "Resolution tracking"] },
  ]},
] as const;
