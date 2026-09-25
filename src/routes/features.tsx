import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/info-page";

const t = "Hatflow Features — WhatsApp API, Inbox, Chatbots & Automation";
const d = "Explore every Hatflow feature: official WhatsApp Business API, shared team inbox, no-code chatbots, broadcasts, automation, CRM, AI agent and analytics.";

export const Route = createFileRoute("/features")({
  head: () => ({ meta: [
    { title: t }, { name: "description", content: d },
    { property: "og:title", content: t }, { property: "og:description", content: d },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ]}),
  component: () => <InfoPage eyebrow="HATFLOW FEATURES" title="Everything You Need to Run WhatsApp Like a Business System." intro="Hatflow brings the official WhatsApp Business API, a team inbox, no-code automation, CRM and AI into one workspace — so every conversation leads to a clear business action." sections={sections} />,
});

const sections = [
  { eyebrow: "MESSAGING", title: "Official WhatsApp Business API", copy: "Reliable, Meta-approved messaging built for scale.", blocks: [
    { title: "WhatsApp API onboarding", copy: "Connect your business number to the official WhatsApp Business Platform with guided setup.", points: ["Business verification guidance", "Green-tick eligibility support", "Multiple WABA numbers by plan"] },
    { title: "Template messages", copy: "Create, submit and manage Meta-approved message templates from one place.", points: ["Text, media & button templates", "Approval status tracking", "Personalised variables"] },
    { title: "Rich interactive messages", copy: "Send buttons, lists, media, CTA and product messages that customers can act on instantly.", points: ["Quick-reply buttons", "List & product messages", "Images, video & documents"] },
  ]},
  { eyebrow: "TEAM", title: "Shared Team Inbox", blocks: [
    { title: "One inbox for the team", copy: "Every WhatsApp conversation in one shared workspace with full customer context.", points: ["Chat assignment", "Internal notes", "Conversation status"] },
    { title: "Multi-agent support", copy: "Distribute chats between team members and hand off smoothly between AI and humans.", points: ["Agent roles", "Human takeover", "Assignment rules"] },
    { title: "Quick replies & labels", copy: "Answer faster with saved replies and keep chats organised with tags.", points: ["Saved responses", "Custom tags", "Search & filters"] },
  ]},
  { eyebrow: "AUTOMATION", title: "No-Code Chatbots & Workflows", blocks: [
    { title: "Visual flow builder", copy: "Drag-and-drop triggers, conditions, delays and actions to design complete customer journeys.", points: ["Triggers & conditions", "Ask question & save answers", "Update CRM columns"] },
    { title: "Ready-made templates", copy: "Launch fast with flows for orders, abandoned carts, welcome messages and review requests.", points: ["Shopify order confirmation", "Abandoned cart recovery", "Review requests"] },
    { title: "AI agent", copy: "Let AI answer routine questions, detect intent and trigger connected actions — with human handoff.", points: ["Intent detection", "Order status replies", "Assign human"] },
  ]},
  { eyebrow: "GROWTH", title: "Broadcasts, CRM & Analytics", blocks: [
    { title: "Broadcast campaigns", copy: "Send targeted campaigns to segmented contacts and schedule them in advance.", points: ["Audience segments", "Campaign scheduler", "Delivery & read reports"] },
    { title: "Built-in CRM", copy: "Every contact becomes a profile with lead stage, source, owner, tags and timeline.", points: ["Lead pipeline", "Follow-up reminders", "Contact import"] },
    { title: "Analytics dashboard", copy: "Track conversations, campaigns, agents and automation performance.", points: ["Message metrics", "Agent performance", "Campaign results"] },
  ]},
] as const;
