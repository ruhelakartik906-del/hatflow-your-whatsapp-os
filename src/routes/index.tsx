import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowRight, Bot, Boxes, Braces, CalendarCheck, Check, ChevronDown,
  CircleCheck, Clock3, Contact, CreditCard, Filter, GitBranch, Headphones, HeartPulse,
  Inbox, LayoutDashboard, MessageCircle, MessagesSquare, PackageCheck, Plus,
  Radio, RefreshCw, Rocket, Search, Send, ShoppingBag, Sparkles, Target, TrendingUp,
  UserRound, UsersRound, WandSparkles, Webhook, X, Zap,
} from "lucide-react";
import {
  siCalendly, siFacebook, siGoogleads, siGooglecalendar, siGooglegemini, siGooglesheets,
  siHubspot, siMake, siMeta, siN8n, siRazorpay, siShopify, siStripe, siTelegram,
  siWhatsapp, siWoocommerce, siWordpress, siZapier, siZoho, siZoom,
} from "simple-icons";

import { Button } from "@/components/ui/button";
import { PartnershipSection, SiteFooter } from "@/components/site-sections";
import unknownHatLogo from "@/assets/unknownhat-logo.png.asset.json";

const WHATSAPP_URL="https://wa.me/917055481738?text=Hello%2C%20UnknownHat%20Team!";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Hatflow – WhatsApp Business API, Automation, CRM & AI Platform" },
    { name: "description", content: "Hatflow is an official WhatsApp Business API platform with no-code automation, chatbot flows, built-in CRM, team inbox, AI agent and 28 integrations like Shopify, Razorpay and HubSpot." },
    { name: "keywords", content: "WhatsApp Business API, WhatsApp automation, WhatsApp CRM, WhatsApp chatbot, WhatsApp marketing India, team inbox, broadcast messaging, Shopify WhatsApp, Hatflow" },
    { property: "og:title", content: "Hatflow – Turn WhatsApp Into Your Business Operating System" },
    { property: "og:description", content: "Official WhatsApp Business API with no-code automation, CRM, team inbox and AI agent. Plans from ₹799/month." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "/" },
    { property: "og:site_name", content: "Hatflow" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Hatflow – WhatsApp Business Automation Platform" },
    { name: "twitter:description", content: "WhatsApp Business API, automation, CRM and AI in one platform." },
  ],
  links: [{ rel: "canonical", href: "/" }],
  scripts: [
    { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Hatflow", applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "WhatsApp Business API platform with automation, CRM, team inbox and AI agent.", publisher: { "@type": "Organization", name: "UnknownHat Agency", url: "https://unknowhat.com" }, offers: [["Starter","799"],["Growth","1499"],["Enterprise","1999"]].map(([name,price])=>({ "@type": "Offer", name, price, priceCurrency: "INR" })) }) },
    { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q,a])=>({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }) },
  ]}), component: Index,
});

const features = [
  [Radio,"WhatsApp Business API","Connect through the official WhatsApp infrastructure.","API connected"],
  [GitBranch,"Chatbot / Flow Builder","Build visual customer journeys without code.","Trigger → action"],
  [Bot,"AI Agent","Handle common customer conversations with AI.","AI reply ready"],
  [Contact,"CRM & Lead Management","Capture, organize and progress every lead.","Qualified lead"],
  [Inbox,"Multi-Agent Inbox","Give teams one place to manage conversations.","3 agents online"],
  [Send,"Broadcast Campaigns","Plan and send approved customer campaigns.","Campaign scheduled"],
  [MessagesSquare,"Template Management","Create and organize approved message templates.","Template approved"],
  [ShoppingBag,"Ecommerce Automation","Connect store events to WhatsApp journeys.","Order confirmed"],
  [RefreshCw,"Cart Recovery","Follow up when customers leave checkout.","Recovery sent"],
  [UsersRound,"Human Handoff","Transfer conversations to the right teammate.","Assigned to Riya"],
  [TrendingUp,"Analytics & Reports","Track conversations, leads and team activity.","+18% responses"],
  [Webhook,"Webhooks & APIs","Connect Hatflow to your business systems.","Webhook active"],
] as const;

type BrandIcon = { title: string; hex: string; path: string };
type Integration = { name: string; logo?: BrandIcon; wordmark?: string; status: "Connected" | "Available" };

const integrationGroups: Record<string, readonly Integration[]> = {
  Ecommerce: [
    {name:"WooCommerce",logo:siWoocommerce,status:"Available"},{name:"Shopify",logo:siShopify,status:"Connected"},
    {name:"WordPress",logo:siWordpress,status:"Available"},{name:"Shiprocket",wordmark:"shiprocket",status:"Available"},
  ],
  CRM: [
    {name:"HubSpot",logo:siHubspot,status:"Connected"},{name:"Zoho CRM",logo:siZoho,status:"Available"},
    {name:"IndiaMART",wordmark:"IndiaMART",status:"Available"},{name:"TradeIndia",wordmark:"tradeindia",status:"Available"},
    {name:"ExportersIndia",wordmark:"ExportersIndia",status:"Available"},{name:"Google Contacts",wordmark:"G",status:"Available"},
  ],
  Payments: [
    {name:"Razorpay",logo:siRazorpay,status:"Connected"},{name:"Cashfree",wordmark:"cashfree",status:"Available"},
    {name:"Stripe",logo:siStripe,status:"Available"},
  ],
  AI: [
    {name:"Google Gemini",logo:siGooglegemini,status:"Connected"},{name:"OpenAI",wordmark:"OpenAI",status:"Available"},
  ],
  Automation: [
    {name:"Google Sheets",logo:siGooglesheets,status:"Connected"},{name:"Google Calendar",logo:siGooglecalendar,status:"Available"},
    {name:"Calendly",logo:siCalendly,status:"Available"},{name:"Make",logo:siMake,status:"Available"},
    {name:"n8n",logo:siN8n,status:"Available"},{name:"Zapier",logo:siZapier,status:"Available"},{name:"Google Ads",logo:siGoogleads,status:"Available"},
  ],
  Communication: [
    {name:"WhatsApp Business",logo:siWhatsapp,status:"Connected"},{name:"Facebook Lead Ads",logo:siFacebook,status:"Available"},
    {name:"Telegram",logo:siTelegram,status:"Available"},{name:"Meta",logo:siMeta,status:"Available"},
    {name:"SMTP",wordmark:"SMTP",status:"Available"},{name:"Zoom",logo:siZoom,status:"Available"},
  ],
};

const automationCases = [
  [ShoppingBag,"Ecommerce","Cart Created","Recovery Workflow","Customer Returns"],
  [Target,"Lead Generation","New Inquiry","Qualify → Assign Sales","Sales-ready Lead"],
  [Headphones,"Customer Support","Support Question","AI → Human Handoff","Issue Routed"],
  [PackageCheck,"Order Tracking","Order Query","Check Status","Tracking Sent"],
  [CalendarCheck,"Appointment Booking","Booking Request","Check Availability","Confirmation Sent"],
  [RefreshCw,"Cart Recovery","Checkout Incomplete","Reminder Workflow","Recovery"],
] as const;

type PricingPlan = {
  name: string;
  price: string;
  period: string;
  sub: string;
  features: readonly string[];
  equivalent?: string;
  note?: string;
  popular?: boolean;
  expert?: boolean;
};

const planData: Record<"monthly" | "yearly", readonly PricingPlan[]> = {
  monthly: [
    {name:"Starter",price:"₹799",period:"/ month",sub:"For individuals and small teams",features:["5,000 Contacts","1 Team Member","1 Workflow","1 Chatbot","1 WABA Number","Broadcast Messaging","Basic Automation","Campaign Scheduling","Template Approval","Basic Analytics","Email Support"]},
    {name:"Growth",price:"₹1,499",period:"/ month",sub:"For growing sales and support teams",features:["15,000 Contacts","3 Team Members","3 Workflows","3 Chatbots","2 WABA Numbers","Everything in Starter","Advanced Automation","Campaign Scheduler","Lead Management","Chat Assignment","Analytics Dashboard","Priority Support"],popular:true},
    {name:"Enterprise",price:"₹1,999",period:"/ month",sub:"For Larger Teams / Custom Requirements",note:"Custom setup based on your business requirements.",features:["Unlimited Contacts*","5 Team Members","5 Workflows","5 Chatbots","3 WABA Numbers","Everything in Growth","Advanced Chatbot","Multi-Agent Support","API Access","Custom Automation","Priority Support","Advanced Analytics"],expert:true},
  ],
  yearly: [
    {name:"Starter",price:"₹6,999",period:"/ year",equivalent:"≈ ₹583 / month",sub:"For individuals and small teams",features:["5,000 Contacts","1 Team Member","1 Workflow","1 Chatbot","1 WABA Number","Broadcast Messaging","Basic Automation","Campaign Scheduling","Template Approval","Basic Analytics","Email Support"]},
    {name:"Growth",price:"₹12,999",period:"/ year",equivalent:"≈ ₹1,083 / month",sub:"For growing sales and support teams",features:["15,000 Contacts","3 Team Members","3 Workflows","3 Chatbots","2 WABA Numbers","Everything in Starter","Advanced Automation","Campaign Scheduler","Lead Management","Chat Assignment","Analytics Dashboard","Priority Support"],popular:true},
    {name:"Enterprise",price:"₹17,999",period:"/ year",equivalent:"≈ ₹1,499 / month",sub:"For Larger Teams / Custom Requirements",note:"Custom setup based on your business requirements.",features:["Unlimited Contacts*","5 Team Members","5 Workflows","5 Chatbots","3 WABA Numbers","Everything in Growth","Advanced Chatbot","Multi-Agent Support","API Access","Custom Automation","Priority Support","Advanced Analytics"],expert:true},
  ],
} as const;

const faqs = [
  ["What is Hatflow?","Hatflow is a complete WhatsApp Business operating system for conversations, CRM, automation, campaigns and AI-assisted workflows."],
  ["Is Hatflow based on the official WhatsApp Business API?","Yes. Hatflow is designed around the official WhatsApp Business API for secure, policy-compliant business messaging."],
  ["Can I connect my existing WhatsApp Business number?","Number eligibility depends on its current setup. Our team can review your number and guide the migration process."],
  ["Do I need coding knowledge?","No. The visual flow builder lets teams create triggers, conditions and actions without writing code."],
  ["Can I create my own chatbot flows?","Yes. Build and update flows for sales, support, order tracking, bookings and more."],
  ["Can I connect Shopify or WooCommerce?","Yes. Hatflow supports ecommerce workflows for customer messages, orders and cart recovery."],
  ["Can Hatflow connect with CRM systems?","Yes. Use built-in CRM tools or connect supported external CRM systems and APIs."],
  ["Can AI conversations be transferred to humans?","Yes. Conversations can hand off to a team member with context when human attention is needed."],
  ["What integrations are available?","Hatflow connects with the ecommerce, CRM, payment, AI, automation and communication tools shown above."],
  ["Does Meta charge separately for WhatsApp messaging?","Meta messaging charges and third-party platform fees may apply separately where applicable."],
  ["Can I upgrade my plan later?","Yes. You can discuss changing your plan as your workflows, team and integration needs grow."],
] as const;

function SectionTitle({eyebrow,title,copy,light=false}:{eyebrow:string;title:React.ReactNode;copy?:string;light?:boolean}) { return <div className="section-heading reveal"><span className="eyebrow">{eyebrow}</span><h2 className={light?"text-ivory":""}>{title}</h2>{copy&&<p className={light?"text-ivory/65":"text-muted-foreground"}>{copy}</p>}</div>; }
function BrandMark({item}:{item:Integration}) { return <div className={`brand-mark brand-${item.name.toLowerCase().replaceAll(" ","-")}`} aria-hidden="true">{item.logo?<svg viewBox="0 0 24 24" role="img" aria-label={`${item.name} logo`} fill={`#${item.logo.hex}`}><path d={item.logo.path}/></svg>:<span>{item.wordmark}</span>}</div>; }

function DashboardMockup() {
  const [tab,setTab]=useState<"Inbox"|"CRM"|"Analytics">("Inbox");
  return <div className="dashboard-wrap"><div className="dashboard-glow"/><div className="dashboard">
    <aside className="dash-rail"><div className="dash-symbol"><MessageCircle size={18}/></div>{[LayoutDashboard,Inbox,Contact,GitBranch,TrendingUp].map((Icon,i)=><div key={i} className={`rail-icon ${i===1?"active":""}`}><Icon size={16}/></div>)}</aside>
    <div className="dash-main"><div className="dash-top"><div><b>Live conversations</b><span>Customer operations workspace</span></div><div className="live"><i/> 3 agents online</div></div><div className="dash-tabs">{(["Inbox","CRM","Analytics"] as const).map(item=><Button key={item} variant="ghost" size="sm" onClick={()=>setTab(item)} className={tab===item?"selected":""}>{item}</Button>)}</div>
      {tab==="Inbox"&&<div className="inbox-grid"><div className="conversation-list"><div className="mini-title"><span>Conversations</span><b>12 new</b></div>{["Aarav Mehta","Nisha Kapoor","Vikram Shah","Priya Nair"].map((name,i)=><div className={`contact-row ${i===0?"selected":""}`} key={name}><div className="avatar">{name[0]}</div><div><b>{name}</b><span>{["Do you have this in blue?","Where is my order?","Book a demo","Payment complete"][i]}</span></div><time>{["now","4m","12m","21m"][i]}</time></div>)}</div><div className="chat-pane"><div className="chat-head"><div className="avatar">A</div><div><b>Aarav Mehta</b><span>Online • Product inquiry</span></div><Bot size={18}/></div><div className="messages"><span className="message customer">Do you have this in blue?</span><span className="message agent">Yes, it’s available. I’ve shared the product below.</span><div className="product-chip"><div/><span><b>Classic Travel Bag</b><small>In stock • ₹2,499</small></span></div></div><div className="reply"><Sparkles size={14}/> AI reply ready <Send size={14}/></div></div><div className="profile-pane"><div className="profile-avatar">AM</div><b>Aarav Mehta</b><span>Qualified lead</span><div className="score"><span>Lead score</span><b>86</b></div><dl><div><dt>Source</dt><dd>Meta Ads</dd></div><div><dt>Owner</dt><dd>Riya</dd></div><div><dt>Last order</dt><dd>₹4,980</dd></div></dl><div className="tag-row"><span>VIP</span><span>Product interest</span></div></div></div>}
      {tab==="CRM"&&<div className="metric-view"><div><Contact/><b>248</b><span>Active contacts</span></div><div><Target/><b>64</b><span>Open leads</span></div><div><CalendarCheck/><b>18</b><span>Follow-ups</span></div></div>}
      {tab==="Analytics"&&<div className="chart-view"><div className="chart-label"><b>Conversation activity</b><span>Last 7 days</span></div><div className="bars">{[42,64,48,78,57,88,72,94,68,82].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div></div>}
    </div></div>
    <div className="float-card fc-one"><CircleCheck/>New Lead Created</div><div className="float-card fc-two"><CreditCard/>Payment Received</div><div className="float-card fc-three"><Clock3/>Follow-up Scheduled</div><div className="float-card fc-four"><Sparkles/>AI Reply Sent</div><div className="float-card fc-five"><PackageCheck/>Order Tracked</div>
  </div>;
}

function LeadBoard(){const columns=[{name:"New",cards:["Meera Joshi","Rohan Verma"]},{name:"Contacted",cards:["Ananya Shah"]},{name:"Qualified",cards:["Sana Khan","Dev Patel"]},{name:"Proposal",cards:["Kavya Rao"]},{name:"Negotiation",cards:["Arjun Nair"]}];return <div className="crm-product"><div className="crm-window-bar"><div><b>Leads</b><span>Pipeline overview</span></div><div className="crm-controls"><span><Search/>Search leads</span><span><Filter/>Filter</span><Button size="sm"><Plus/>Add lead</Button></div></div><div className="lead-board">{columns.map((col,i)=><div className="lead-column" key={col.name}><div className="lead-column-head"><b>{col.name}</b><span>{col.cards.length}</span></div>{col.cards.map((name,j)=><div className={`lead-card ${i===2&&j===0?"selected":""}`} key={name}><div><i>{name[0]}</i><b>{name}</b></div><span>{["Meta Ads","WhatsApp","Instagram","Website","Facebook"][i]}</span><small>{i<2?"Follow up today":i===2?"High intent":"Last activity 2h ago"}</small></div>)}</div>)}</div><div className="crm-context"><div><span>CUSTOMER PROFILE</span><b>Sana Khan</b><small>Qualified lead • Score 92</small></div><dl><div><dt>Source</dt><dd>Instagram</dd></div><div><dt>Assigned team member</dt><dd>Rohan</dd></div><div><dt>Tags</dt><dd>High intent</dd></div><div><dt>Last activity</dt><dd>10:42 today</dd></div><div><dt>Order information</dt><dd>₹18,400 lifetime</dd></div><div><dt>Next follow-up</dt><dd>Tomorrow, 11:00</dd></div></dl><div className="context-timeline"><b>Conversation timeline</b><span><MessageCircle/>Customer replied</span><span><ShoppingBag/>Product shared</span><span><CalendarCheck/>Follow-up scheduled</span></div></div></div>}

type InquiryKind = "started" | "expert";

const requirementOptions = ["WhatsApp API","Chatbot","Automation","CRM","Broadcast","AI Agent","Ecommerce Automation","Other"] as const;

function InquiryModal({kind,onClose}:{kind:InquiryKind;onClose:()=>void}) {
  const [submitted,setSubmitted]=useState(false);
  const firstField=useRef<HTMLInputElement>(null);
  const isStarted=kind==="started";
  useEffect(()=>{
    const previousOverflow=document.body.style.overflow;
    document.body.style.overflow="hidden";
    firstField.current?.focus();
    const onKeyDown=(event:KeyboardEvent)=>{if(event.key==="Escape")onClose()};
    window.addEventListener("keydown",onKeyDown);
    return()=>{document.body.style.overflow=previousOverflow;window.removeEventListener("keydown",onKeyDown)};
  },[onClose]);
  const submit=(event:FormEvent<HTMLFormElement>)=>{event.preventDefault();setSubmitted(true)};
  return <div className="form-modal" role="presentation" onMouseDown={event=>{if(event.target===event.currentTarget)onClose()}}><section role="dialog" aria-modal="true" aria-labelledby="inquiry-title" className="form-dialog">
    <Button variant="ghost" size="icon" className="modal-close" aria-label="Close form" onClick={onClose}><X/></Button>
    {submitted?<div className="form-success"><span><CircleCheck/></span><h2>Thank you. We’ll be in touch.</h2><p>Your details have been received by the Hatflow team.</p><Button onClick={onClose}>Done</Button></div>:<><span className="eyebrow">{isStarted?"GET STARTED":"TALK TO AN EXPERT"}</span><h2 id="inquiry-title">{isStarted?"Start Building With Hatflow":"Tell Us What You Need"}</h2><p>{isStarted?"Share a few details and our team will help you choose the right setup.":"Share your requirements and a Hatflow expert will help plan the right solution."}</p><form onSubmit={submit}>
      <label>Full Name<input ref={firstField} name="fullName" autoComplete="name" required/></label>
      <label>Business Name<input name="businessName" autoComplete="organization" required/></label>
      <label>Work Email<input name="email" type="email" autoComplete="email" required/></label>
      <label>Phone / WhatsApp Number<input name="phone" type="tel" autoComplete="tel" required/></label>
      {isStarted&&<label>Business Type<input name="businessType" required/></label>}
      <label>Requirement<select name="requirement" defaultValue="" required><option value="" disabled>Select Requirement</option>{requirementOptions.map(option=><option key={option}>{option}</option>)}</select><ChevronDown/></label>
      <label className="form-wide">{isStarted?"What do you want to automate?":"Message"}<textarea name="message" rows={3} required/></label>
      <Button type="submit" className="form-submit">{isStarted?"Get Started":"Talk to an Expert"} <ArrowRight/></Button>
    </form></>}
  </section></div>;
}

function Index(){
  const [annual,setAnnual]=useState(false); const [inquiry,setInquiry]=useState<InquiryKind|null>(null); const plans=annual?planData.yearly:planData.monthly;
  const closeInquiry=()=>setInquiry(null);
  return <main className="overflow-hidden bg-background text-foreground">
    <section className="hero hero-centered" id="top"><div className="hero-grid"/><div className="hero-copy"><div className="brand-kicker"><MessageCircle/>WHATSAPP BUSINESS AUTOMATION PLATFORM</div><h1>Turn WhatsApp Into<br/>Your <span>Business Operating System.</span></h1><p>Connect WhatsApp, manage conversations, capture leads, automate customer journeys and connect your business tools — all from one platform.</p><div className="hero-actions"><Button size="lg" asChild><a href="https://app.hatflow.in/signup">Get Started <ArrowRight/></a></Button><Button variant="outline" size="lg" onClick={()=>window.open(WHATSAPP_URL,"_blank","noopener")}>Talk to an Expert</Button></div><div className="trust-row">{["Official WhatsApp API","No-Code Automation","AI-Powered Conversations","Built-in CRM","Team Inbox"].map(x=><span key={x}><Check/>{x}</span>)}</div><a className="powered-by" href="https://unknowhat.com" target="_blank" rel="noreferrer"><img src={unknownHatLogo.url} alt="UnknownHat Agency"/><span>Powered by <b>UnknownHat Agency</b></span></a></div></section>

    <section className="logic-section section" id="how-it-works"><SectionTitle eyebrow="HOW HATFLOW WORKS" title={<>One Message In.<br/><span className="gradient-text">The Right Business Action Out.</span></>} copy="Hatflow connects every customer message to the right automation, system and next step."/><div className="logic-map reveal reveal-scale"><div className="logic-main">{([[MessageCircle,"Customer Message"],[Zap,"Hatflow"],[Bot,"AI / Automation"],[Braces,"CRM / Integration"],[Rocket,"Business Action"]] as const).map(([Icon,label],i)=><div className="logic-step" key={label}><div><Icon size={21}/></div><span>{label}</span>{i<4&&<ArrowRight/>}</div>)}</div><div className="logic-branches">{([[Target,"Create Lead"],[ShoppingBag,"Send Product"],[PackageCheck,"Track Order"],[RefreshCw,"Recover Cart"],[Clock3,"Schedule Follow-up"],[UsersRound,"Assign Agent"]] as const).map(([Icon,label])=><div key={label}><span><Icon size={17}/></span>{label}</div>)}</div></div></section>

    <section className="section features-section" id="product"><SectionTitle eyebrow="A COMPLETE PRODUCT TOOLKIT" title="Everything You Need to Run WhatsApp Better." copy="Each capability is part of the same operating workspace — not a collection of disconnected tools."/><div className="section-cta"><Button asChild variant="outline"><Link to="/features">Explore Features <ArrowRight/></Link></Button></div><div className="feature-grid">{features.map(([Icon,title,copy,preview],i)=><article className="feature-card reveal" key={title} style={{["--rd" as string]:`${Math.min(i*0.05,0.3)}s`}}><span className="feature-number">{String(i+1).padStart(2,"0")}</span><div className="feature-icon"><Icon/></div><h3>{title}</h3><p>{copy}</p><div className="feature-preview"><i/><span>{preview}</span><CircleCheck/></div><Link to="/features">Explore feature <ArrowRight/></Link></article>)}</div></section>

    <section className="section integrations-section" id="integrations"><SectionTitle eyebrow="28 INTEGRATIONS" title="Your Existing Tools. One Connected Workflow." copy="Hatflow connects to the tools you already use across commerce, CRM, payments, AI, automation and communication."/><div className="integration-grid">{Object.entries(integrationGroups).map(([group,items],gi)=><div className="integration-group reveal" style={{["--rd" as string]:`${Math.min(gi*0.06,0.3)}s`}} key={group}><span>{group}</span><div>{items.map(item=><article className="integration-item" key={item.name}><BrandMark item={item}/><b>{item.name}</b><small>{group}</small><em className={item.status==="Connected"?"connected":""}>{item.status}</em></article>)}</div></div>)}</div><div className="integration-cta"><Button asChild variant="outline"><Link to="/integrations">View All Integrations <ArrowRight/></Link></Button></div></section>

    <section className="section automation-section" id="automations"><SectionTitle eyebrow="VISUAL AUTOMATION BUILDER" light title={<>Build Powerful WhatsApp Automations.<br/><span className="gradient-text">Without Code.</span></>} copy="Combine customer triggers, decision conditions and business actions in one visual canvas."/><div className="automation-layout"><div className="automation-copy reveal reveal-left"><div className="automation-steps"><div><strong>01</strong><span><b>Choose a trigger</b><small>Start when a customer sends a message or takes an action.</small></span></div><div><strong>02</strong><span><b>Add smart conditions</b><small>Route each conversation by intent, status or customer data.</small></span></div><div><strong>03</strong><span><b>Connect the outcome</b><small>Reply, update your CRM, recover a cart or assign an agent.</small></span></div></div><div className="builder-palette">{["Trigger","Conditions","Delay","Template Message","Text Message","Button Message","List Message","Media Message","CTA Message","Product Message","Ask Question","Update Columns"].map(x=><span key={x}>{x}</span>)}</div><Button asChild><a href="https://app.hatflow.in/signup">Build Your First Flow <ArrowRight/></a></Button></div><div className="automation-preview reveal reveal-right"><div className="flow-builder"><div className="flow-toolbar"><span><i/><i/><i/></span><b>Intent routing workflow</b><em>LIVE</em></div><div className="flow-canvas"><div className="node trigger"><MessageCircle/><span><small>TRIGGER</small><b>New Message</b></span></div><div className="flow-line l1"/><div className="node ai"><Bot/><span><small>AI</small><b>Detect Intent</b></span></div><div className="flow-line l2"/><div className="branch-node"><GitBranch/></div><div className="flow-line branch"/>{([[ShoppingBag,"PRODUCT INQUIRY","Send Catalog","one"],[PackageCheck,"ORDER QUERY","Send Tracking","two"],[Target,"LEAD INQUIRY","Create CRM Lead","three"],[UsersRound,"SUPPORT","Assign Agent","four"],[RefreshCw,"ABANDONED CART","Recovery Message","five"]] as const).map(([Icon,label,action,pos])=><div className={`node branch-card ${pos}`} key={label}><Icon/><span><small>{label}</small><b>{action}</b></span></div>)}</div></div><div className="flow-templates"><b>Ready-to-use flow templates</b>{["Shopify — New Order Confirmation","Abandoned Cart","Contact Welcome","Abandoned Checkout","Order Confirmation","Review Request"].map(x=><span key={x}>{x}<ArrowRight/></span>)}</div></div></div></section>

    <section className="section use-cases" id="solutions"><SectionTitle eyebrow="REAL WORKFLOWS" title="Automation That Actually Does the Work." copy="Clear triggers, connected automation and practical outcomes your team can use."/><div className="section-cta"><Button asChild variant="outline"><Link to="/solutions">Explore Solutions <ArrowRight/></Link></Button></div><div className="case-grid">{automationCases.map(([Icon,title,trigger,steps,result],i)=><article className="case-card reveal" style={{["--rd" as string]:`${Math.min(i*0.06,0.3)}s`}} key={title}><div className="case-head"><Icon/><h3>{title}</h3></div><div className="case-flow"><span><small>TRIGGER</small>{trigger}</span><ArrowRight/><span><small>AUTOMATION</small>{steps}</span><ArrowRight/><span className="case-result"><small>OUTCOME</small>{result}</span></div></article>)}</div></section>

    <section className="section crm-section" id="crm"><SectionTitle eyebrow="CRM & LEAD MANAGEMENT" title={<>Every Customer Conversation.<br/><span className="gradient-text">One Customer Profile.</span></>} copy="Give your team the complete context behind every lead, message, order and follow-up."/><div className="crm-cta"><Button asChild variant="outline"><Link to="/crm">Explore CRM <ArrowRight/></Link></Button></div><LeadBoard/></section>

    <section className="section ai-section" id="ai"><SectionTitle eyebrow="HATFLOW AI AGENT" light title={<>Let AI Handle the Conversations.<br/><span className="gradient-text">Let Your Team Handle the Important Ones.</span></>} copy="Use AI for routine customer questions and connected actions, with human handoff always available."/><div className="section-cta ai-cta"><Button variant="outline" onClick={()=>window.open(WHATSAPP_URL,"_blank","noopener")}>Talk to an Expert <ArrowRight/></Button></div><div className="ai-panel reveal reveal-scale"><div className="ai-copy"><div className="ai-capabilities">{["Check Order","Send Tracking","Create Lead","Assign Human"].map(x=><span key={x}><Sparkles/>{x}</span>)}</div></div><div className="ai-chat"><div className="ai-chat-head"><div><Bot/></div><span><b>Hatflow AI</b><small>Connected to order data</small></span><i>LIVE</i></div><div className="chat-label">CUSTOMER</div><div className="ai-message customer">Where is my order?</div><div className="ai-thinking"><Sparkles/>Checking order status</div><div className="chat-label right">AI</div><div className="ai-message agent">Your order is in transit and is expected tomorrow.</div><div className="ai-action-row">{[PackageCheck,Send,Target,UsersRound].map((Icon,i)=><span key={i}><Icon/>{["Check Order","Send Tracking","Create Lead","Assign Human"][i]}</span>)}</div></div></div></section>

    <section className="section industries"><SectionTitle eyebrow="MADE FOR CONVERSATIONAL BUSINESS" title="Built for Businesses That Run on Conversations."/><div className="industry-grid">{([[ShoppingBag,"Ecommerce","Recommend products, recover carts and update orders."],[Boxes,"Education","Qualify enquiries and guide admissions follow-ups."],[HeartPulse,"Healthcare","Coordinate appointments and routine patient queries."],[LayoutDashboard,"Real Estate","Capture property interest and assign agents."],[Headphones,"Service Businesses","Manage bookings, reminders and support."],[Rocket,"D2C Brands","Connect campaigns, customers and order journeys."],[WandSparkles,"Agencies","Manage client workflows from one platform."],[MessageCircle,"Local Businesses","Turn daily enquiries into organized follow-ups."]] as const).map(([Icon,title,copy],i)=><article className="reveal" key={title} style={{["--rd" as string]:`${Math.min(i*0.05,0.35)}s`}}><Icon/><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="section why-section"><SectionTitle eyebrow="THE HATFLOW DIFFERENCE" title="Why Businesses Choose Hatflow." copy="A focused operating layer for teams that use WhatsApp to sell, support and grow."/><div className="why-list">{[["01","WhatsApp-first infrastructure"],["02","No-code automation"],["03","Built-in customer CRM"],["04","AI + human collaboration"],["05","Deep integrations"],["06","Centralized communication"]].map(([n,x])=><div key={x}><span>{n}</span><h3>{x}</h3><CircleCheck/></div>)}</div></section>

    <section className="comparison-section"><div className="section comparison-inner"><SectionTitle eyebrow="PLATFORM COMPARISON" title="WhatsApp App vs Hatflow API" copy="See what changes when your business moves from the regular WhatsApp app to a business automation platform."/><div className="comparison-table"><div className="comparison-row comparison-head"><b>Feature</b><b>WhatsApp App</b><b><span>BEST VALUE</span>Hatflow API</b></div>{[["Broadcast Limit","256/day","Higher-volume*"],["Multiuser","5 Devices","Scales by plan*"],["Chatbot","No","Yes"],["Automation","No","Yes"],["Green Tick","No","Eligibility-based"],["Analytics","No","Yes"],["CRM Integration","No","Yes"]].map(([feature,app,api])=><div className="comparison-row" key={feature}><b>{feature}</b><span>{app}</span><span><CircleCheck/>{api}</span></div>)}</div><p className="comparison-note">* Capacity depends on the selected Hatflow plan, Meta limits and approved account configuration.</p></div></section>

    <section className="section pricing-section" id="pricing"><SectionTitle eyebrow="PRICING" title="Simple, Transparent Pricing." copy="Choose the setup that fits your current team, then scale as your workflows grow."/><div className="billing-wrap"><div className="billing-toggle"><span className={!annual?"active":""}>Monthly</span><Button variant="ghost" size="icon" role="switch" aria-label="Toggle yearly billing" aria-checked={annual} onClick={()=>setAnnual(!annual)}><i className={annual?"annual":""}/></Button><span className={annual?"active":""}>Yearly</span></div>{annual&&<span className="yearly-save">Save with Yearly</span>}</div><div className="pricing-grid">{plans.map(plan=><article className={`price-card ${plan.popular?"featured":""}`} key={plan.name}>{plan.popular&&<span className="popular">MOST POPULAR</span>}<span className="plan-label">{plan.name.toUpperCase()}</span><h3>{plan.sub}</h3><div className="price"><b>{plan.price}</b><span>{plan.period}</span></div>{"equivalent" in plan&&<div className="price-equivalent">{plan.equivalent}</div>}{"note" in plan&&<p className="enterprise-note">{plan.note}</p>}<div className="plan-features">{plan.features.map(x=><span className="price-feature" key={x}><Check/>{x}</span>)}</div>{plan.expert?<Button variant={plan.popular?"default":"outline"} onClick={()=>window.open(WHATSAPP_URL,"_blank","noopener")}>Talk to an Expert <ArrowRight/></Button>:<Button variant={plan.popular?"default":"outline"} asChild><a href="https://app.hatflow.in/signup">Get Started <ArrowRight/></a></Button>}</article>)}</div><p className="price-note">* Enterprise contact capacity and custom configuration are confirmed during setup. Meta messaging charges and third-party platform fees may apply separately.</p></section>

    <section className="section feedback"><SectionTitle eyebrow="CUSTOMER FEEDBACK" title="What Businesses Say About Hatflow."/><div className="feedback-placeholder reveal"><MessagesSquare/><div><h3>Verified customer stories are coming soon.</h3><p>Approved customer quotes and company details will appear here as they become available.</p></div><span>VERIFIED STORIES ONLY</span></div></section>

    <PartnershipSection/>

    <section className="section faq-section" id="faq"><SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" copy="Straight answers about setup, integrations, pricing and how Hatflow works."/><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}</div></section>
    <section className="final-cta reveal" id="contact"><div className="cta-grid"/><span className="eyebrow">START WITH HATFLOW</span><h2>Ready to Turn WhatsApp Into Your Business Operating System?</h2><p>Automate conversations. Capture leads. Manage customers. Connect your tools.</p><div><Button size="lg" asChild><a href="https://app.hatflow.in/signup">Get Started Now <ArrowRight/></a></Button><Button size="lg" variant="outline" onClick={()=>window.open(WHATSAPP_URL,"_blank","noopener")}>Talk to an Expert</Button></div></section>
    <SiteFooter/>
    <a className="floating-contact" aria-label="Chat with HATFLOW on WhatsApp" href="https://wa.me/917055481738?text=Hello%2C%20UnknownHat%20Team!" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d={siWhatsapp.path}/></svg></a>
    {inquiry&&<InquiryModal kind={inquiry} onClose={closeInquiry}/>} 
  </main>;
}
