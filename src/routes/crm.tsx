import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/info-page";

const t = "Hatflow CRM — WhatsApp CRM & Lead Management";
const d = "Hatflow's built-in WhatsApp CRM gives every customer one profile with lead score, source, owner, tags, orders, timeline and follow-ups.";

export const Route = createFileRoute("/crm")({
  head: () => ({ meta: [
    { title: t }, { name: "description", content: d },
    { property: "og:title", content: t }, { property: "og:description", content: d },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ]}),
  component: () => <InfoPage eyebrow="CRM & LEAD MANAGEMENT" title="Every Customer Conversation. One Customer Profile." intro="Give your team the complete context behind every lead, message, order and follow-up — directly next to the WhatsApp chat." sections={sections} />,
});

const sections = [
  { eyebrow: "CUSTOMER PROFILE", title: "Everything About a Customer in One View", blocks: [
    { title: "Customer profile", copy: "Name, number, business details and custom fields captured from chats and forms.", points: ["Custom columns", "Auto-updated from flows", "Import & export"] },
    { title: "Lead score & source", copy: "Know where every lead came from and how warm it is.", points: ["Ads, portals, website, store", "Lead scoring", "Tags & segments"] },
    { title: "Orders & timeline", copy: "See order information and the full conversation history together.", points: ["Order details", "Conversation timeline", "Last activity"] },
  ]},
  { eyebrow: "PIPELINE", title: "Manage Leads From New to Won", blocks: [
    { title: "Visual lead board", copy: "Move leads through New, Contacted, Qualified, Proposal and Negotiation stages." },
    { title: "Team assignment", copy: "Assign each lead to a team member and route chats automatically." },
    { title: "Next follow-up", copy: "Set follow-up dates and let automations send reminders on time." },
  ]},
  { eyebrow: "CONNECTED", title: "Works With Your Existing CRM", blocks: [
    { title: "HubSpot & Zoho CRM", copy: "Sync WhatsApp leads and contacts to your existing CRM." },
    { title: "Google Sheets & Contacts", copy: "Push lead data to sheets or contacts for simple reporting." },
    { title: "Automation-ready", copy: "Update CRM columns from any chatbot or workflow step." },
  ]},
] as const;
