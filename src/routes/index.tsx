import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Bot, Boxes, Braces, CalendarCheck, Check, ChevronDown, CircleCheck,
  Clock3, Code2, Contact, CreditCard, GitBranch, Headphones, HeartPulse, Inbox,
  LayoutDashboard, Menu, MessageCircle, MessagesSquare, PackageCheck, Radio,
  RefreshCw, Rocket, Send, ShoppingBag, Sparkles, Target, TrendingUp, UserRound,
  UsersRound, WandSparkles, Webhook, X, Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import hatflowLogo from "@/assets/hatflow-logo.webp.asset.json";
import unknownHatLogo from "@/assets/unknownhat-logo.png.asset.json";
import founderPhoto from "@/assets/unknownhat-founder.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HATFLOW | WhatsApp Business Operating System" },
      { name: "description", content: "Connect WhatsApp, automate conversations, manage customers, recover leads and run AI-powered workflows from one platform." },
      { property: "og:title", content: "HATFLOW | WhatsApp Business Operating System" },
      { property: "og:description", content: "WhatsApp Business API, automation, CRM and AI in one powerful platform." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  [Radio, "WhatsApp Business API", "Official and secure WhatsApp integration."],
  [GitBranch, "Chatbot Flow Builder", "Drag-and-drop automation without coding."],
  [Bot, "AI Agent", "Intelligent customer conversations and responses."],
  [Contact, "CRM & Lead Management", "Capture, organize and track every lead."],
  [Inbox, "Multi-Agent Inbox", "Manage team conversations in one shared inbox."],
  [Send, "Broadcast Campaigns", "Send approved campaigns and notifications."],
  [MessagesSquare, "Template Management", "Create and manage WhatsApp templates."],
  [ShoppingBag, "Ecommerce Automation", "Connect store events to live workflows."],
  [RefreshCw, "Cart Recovery", "Reconnect with customers who leave checkout."],
  [UsersRound, "Human Handoff", "Transfer AI conversations to your team."],
  [TrendingUp, "Analytics & Reports", "Track engagement, leads and performance."],
  [Webhook, "Webhooks & APIs", "Connect external systems and custom workflows."],
] as const;

const integrations = {
  Ecommerce: ["Shopify", "WooCommerce", "WordPress", "Shiprocket"],
  CRM: ["HubSpot", "Zoho CRM", "Google Contacts", "IndiaMART"],
  Payments: ["Razorpay", "Payment Links", "Webhooks"],
  AI: ["OpenAI", "Google Gemini", "AI Agent"],
  Automation: ["Make", "n8n", "Zapier", "Custom API"],
  Communication: ["WhatsApp", "Telegram", "SMTP", "Calendly"],
};

const automationCases = [
  [ShoppingBag, "Ecommerce", "Cart created", "Share products → confirm payment", "Order completed"],
  [Target, "Lead Generation", "New inquiry", "Qualify → tag → assign", "Sales-ready lead"],
  [Headphones, "Customer Support", "Support question", "Detect intent → resolve or route", "Faster resolution"],
  [PackageCheck, "Order Tracking", "Order query", "Check status → send tracking", "Instant update"],
  [CalendarCheck, "Appointment Booking", "Booking request", "Show slots → confirm", "Meeting booked"],
  [RefreshCw, "Cart Recovery", "Checkout incomplete", "Wait → send reminder", "Customer returns"],
] as const;

const faqs = [
  ["What is Hatflow?", "Hatflow is a complete WhatsApp Business operating system for conversations, CRM, automation, campaigns and AI-assisted workflows."],
  ["Is Hatflow based on the official WhatsApp Business API?", "Yes. Hatflow is designed around the official WhatsApp Business API for secure, policy-compliant business messaging."],
  ["Can I connect my existing WhatsApp Business number?", "Number eligibility depends on its current setup. Our team can review your number and guide the migration process."],
  ["Do I need coding knowledge?", "No. The visual flow builder lets teams create triggers, conditions and actions without writing code."],
  ["Can I create my own chatbot flows?", "Yes. Build and update flows for sales, support, order tracking, bookings and more."],
  ["Can I connect Shopify or WooCommerce?", "Yes. Hatflow supports ecommerce workflows for customer messages, orders and cart recovery."],
  ["Can Hatflow connect with CRM systems?", "Yes. Use built-in CRM tools or connect supported external CRM systems and custom APIs."],
  ["Can AI conversations be transferred to humans?", "Yes. Conversations can hand off to a team member with context when human attention is needed."],
  ["What integrations are available?", "Hatflow connects with ecommerce, CRM, payments, AI, marketing, automation and communication tools."],
  ["Does Meta charge separately for WhatsApp messaging?", "Meta conversation charges and third-party platform fees may apply separately where applicable."],
  ["Can I upgrade my plan later?", "Yes. You can discuss changing your plan as your workflows, team and integration needs grow."],
] as const;

function Logo({ light = false }: { light?: boolean }) {
  return <img src={hatflowLogo.url} alt="HATFLOW" className={`h-10 w-auto object-contain ${light ? "brightness-0 invert" : ""}`} />;
}

function SectionTitle({ eyebrow, title, copy, light = false }: { eyebrow: string; title: React.ReactNode; copy?: string; light?: boolean }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2 className={light ? "text-ivory" : ""}>{title}</h2>
    {copy && <p className={light ? "text-ivory/65" : "text-muted-foreground"}>{copy}</p>}
  </div>;
}

function DashboardMockup() {
  const [tab, setTab] = useState<"Inbox" | "CRM" | "Analytics">("Inbox");
  return <div className="dashboard-wrap">
    <div className="dashboard-glow" />
    <div className="dashboard">
      <aside className="dash-rail">
        <div className="dash-symbol"><MessageCircle size={18} /></div>
        {[LayoutDashboard, Inbox, Contact, GitBranch, TrendingUp].map((Icon, i) => <div key={i} className={`rail-icon ${i === 1 ? "active" : ""}`}><Icon size={16} /></div>)}
      </aside>
      <div className="dash-main">
        <div className="dash-top"><div><b>Good morning, team</b><span>Here’s what’s happening today.</span></div><div className="live"><i /> All systems live</div></div>
        <div className="dash-tabs">{(["Inbox", "CRM", "Analytics"] as const).map((item) => <Button key={item} variant="ghost" size="sm" onClick={() => setTab(item)} className={tab === item ? "selected" : ""}>{item}</Button>)}</div>
        {tab === "Inbox" && <div className="inbox-grid">
          <div className="conversation-list">
            <div className="mini-title"><span>Conversations</span><b>12 new</b></div>
            {["Aarav Mehta", "Nisha Kapoor", "Vikram Shah", "Priya Nair"].map((name, i) => <div className={`contact-row ${i === 0 ? "selected" : ""}`} key={name}><div className="avatar">{name[0]}</div><div><b>{name}</b><span>{i === 0 ? "Do you have this in blue?" : ["Order tracking", "Book a demo", "Payment complete"][i-1]}</span></div><time>{["now", "4m", "12m", "21m"][i]}</time></div>)}
          </div>
          <div className="chat-pane">
            <div className="chat-head"><div className="avatar">A</div><div><b>Aarav Mehta</b><span>Online • Product inquiry</span></div><Bot size={18} /></div>
            <div className="messages"><span className="message customer">Do you have this in blue?</span><span className="message agent">Yes, it’s available. I’ve shared the product details below.</span><div className="product-chip"><div /><span><b>Classic Travel Bag</b><small>In stock • ₹2,499</small></span></div></div>
            <div className="reply"><Sparkles size={14} /> AI reply ready <Send size={14} /></div>
          </div>
          <div className="profile-pane">
            <div className="profile-avatar">AM</div><b>Aarav Mehta</b><span>Qualified lead</span>
            <div className="score"><span>Lead score</span><b>86</b></div>
            <dl><div><dt>Source</dt><dd>Meta Ads</dd></div><div><dt>Owner</dt><dd>Riya</dd></div><div><dt>Last order</dt><dd>₹4,980</dd></div></dl>
            <div className="tag-row"><span>VIP</span><span>Product interest</span></div>
          </div>
        </div>}
        {tab === "CRM" && <div className="metric-view"><div><Contact /><b>248</b><span>Active contacts</span></div><div><Target /><b>64</b><span>Open leads</span></div><div><CalendarCheck /><b>18</b><span>Follow-ups</span></div></div>}
        {tab === "Analytics" && <div className="chart-view"><div className="chart-label"><b>Conversation activity</b><span>Last 7 days</span></div><div className="bars">{[42,64,48,78,57,88,72,94,68,82].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</div></div>}
      </div>
    </div>
    <div className="float-card fc-one"><CircleCheck /> New Lead Created</div>
    <div className="float-card fc-two"><CreditCard /> Payment Received</div>
    <div className="float-card fc-three"><Sparkles /> AI Reply Sent</div>
  </div>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [annual, setAnnual] = useState(false);
  return <main className="overflow-hidden bg-background text-foreground">
    <header className="site-nav">
      <a href="#top" aria-label="HATFLOW home"><Logo /></a>
      <nav className="desktop-nav">{[["Product","product"],["Solutions","solutions"],["Integrations","integrations"],["Automations","automations"],["Pricing","pricing"],["Resources","faq"]].map(([label,id])=><a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <div className="nav-actions"><a href="#contact" className="login-link">Login</a><Button asChild size="sm"><a href="#pricing">Get Started <ArrowRight /></a></Button></div>
      <Button variant="ghost" size="icon" className="menu-button" aria-label="Toggle menu" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</Button>
      {menuOpen && <div className="mobile-nav">{[["Product","product"],["Solutions","solutions"],["Integrations","integrations"],["Automations","automations"],["Pricing","pricing"],["Resources","faq"]].map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setMenuOpen(false)}>{label}</a>)}</div>}
    </header>

    <section className="hero" id="top"><div className="hero-grid" />
      <div className="hero-copy">
        <div className="brand-kicker"><MessageCircle /> WHATSAPP BUSINESS OPERATING SYSTEM</div>
        <h1>Turn WhatsApp Into<br/>Your <span>Business<br/>Operating System.</span></h1>
        <p>Connect WhatsApp, automate conversations, manage customers, recover leads and integrate your favorite tools — all from one powerful platform.</p>
        <div className="hero-actions"><Button asChild size="lg"><a href="#pricing">Get Started <ArrowRight /></a></Button><Button asChild variant="outline" size="lg"><a href="#contact">Talk to an Expert</a></Button></div>
        <div className="trust-row">{["Official WhatsApp API","No-Code Automation","AI-Powered","Built-in CRM","Multi-Agent Inbox"].map(x=><span key={x}><Check />{x}</span>)}</div>
        <a className="powered-by" href="https://unknowhat.com" target="_blank" rel="noreferrer">Powered by <b>UnknownHat Agency</b></a>
      </div><DashboardMockup />
    </section>

    <section className="logic-section section" id="product"><SectionTitle eyebrow="THE PRODUCT LOGIC" title={<>One Conversation.<br/><span className="gradient-text">Every Business Action.</span></>} copy="Hatflow connects your WhatsApp conversations with the systems that run your business." />
      <div className="logic-map"><div className="logic-main">{[[MessageCircle,"Customer message"],[Zap,"Hatflow receives"],[Bot,"AI understands"],[Contact,"CRM updates"],[GitBranch,"Automation triggers"]].map(([Icon,label],i)=><div className="logic-step" key={String(label)}><div><Icon size={21}/></div><span>{String(label)}</span>{i<4&&<ArrowRight/>}</div>)}</div>
        <div className="logic-branches">{["Show Product","Track Order","Create CRM Lead","Confirm Payment","Recover Cart","Assign Human"].map((x,i)=><div key={x}><span>{[ShoppingBag,PackageCheck,Target,CreditCard,RefreshCw,UsersRound][i]({size:17})}</span>{x}</div>)}</div>
      </div>
    </section>

    <section className="section features-section" id="solutions"><SectionTitle eyebrow="A COMPLETE TOOLKIT" title="Everything You Need to Run WhatsApp Better." copy="From the first customer message to the final business action, Hatflow keeps every moving part connected." />
      <div className="feature-grid">{features.map(([Icon,title,copy],i)=><article className="feature-card" key={title}><span className="feature-number">{String(i+1).padStart(2,"0")}</span><div className="feature-icon"><Icon/></div><h3>{title}</h3><p>{copy}</p><a href="#contact">Explore feature <ArrowRight/></a></article>)}</div>
    </section>

    <section className="section integrations-section" id="integrations"><div className="integration-copy"><SectionTitle eyebrow="25+ INTEGRATIONS" title="Your Existing Tools. One Connected Workflow." copy="Connect Hatflow with the platforms your business already uses." /><Button asChild variant="outline"><a href="#contact">Explore All Integrations <ArrowRight/></a></Button></div>
      <div className="integration-grid">{Object.entries(integrations).map(([group,items])=><div className="integration-group" key={group}><span>{group}</span><div>{items.map(item=><b key={item}>{item}</b>)}</div></div>)}</div>
    </section>

    <section className="section automation-section" id="automations"><div className="automation-copy"><SectionTitle eyebrow="VISUAL AUTOMATION BUILDER" light title={<>Build Powerful WhatsApp Automations.<br/><span className="gradient-text">Without Code.</span></>} copy="Create workflows using triggers, conditions, AI, tags, API calls and real business events." /><div className="check-list">{["Drag & Drop Builder","Conditional Logic","AI Responses","Tags & Routing","CRM Actions","Payment Events","API / Webhook Actions","Human Handoff"].map(x=><span key={x}><Check/>{x}</span>)}</div><Button asChild><a href="#pricing">Build Your First Flow <ArrowRight/></a></Button></div>
      <div className="flow-builder"><div className="flow-toolbar"><span><i/><i/><i/></span><b>Cart recovery workflow</b><em>Live</em></div><div className="flow-canvas"><div className="node trigger"><MessageCircle/><span><small>TRIGGER</small><b>New message</b></span></div><div className="flow-line l1"/><div className="node ai"><Bot/><span><small>AI ACTION</small><b>Detect intent</b></span></div><div className="flow-line l2"/><div className="branch-node">+</div><div className="flow-line branch a"/><div className="flow-line branch b"/><div className="node branch-card one"><ShoppingBag/><span><small>PRODUCT</small><b>Send catalog</b></span></div><div className="node branch-card two"><PackageCheck/><span><small>ORDER</small><b>Send tracking</b></span></div><div className="node branch-card three"><Target/><span><small>LEAD</small><b>Create CRM lead</b></span></div><div className="node branch-card four"><UsersRound/><span><small>SUPPORT</small><b>Assign agent</b></span></div></div></div>
    </section>

    <section className="section use-cases"><SectionTitle eyebrow="REAL WORKFLOWS" title="Automation That Actually Does the Work." copy="Clear triggers, connected steps and useful outcomes your team can put to work."/><div className="case-grid">{automationCases.map(([Icon,title,trigger,steps,result])=><article className="case-card" key={title}><div className="case-head"><Icon/><h3>{title}</h3></div><div className="case-flow"><span><small>TRIGGER</small>{trigger}</span><ArrowRight/><span><small>AUTOMATION</small>{steps}</span><ArrowRight/><span className="case-result"><small>RESULT</small>{result}</span></div></article>)}</div></section>

    <section className="section crm-section"><div className="crm-copy"><SectionTitle eyebrow="BUILT-IN CRM" title={<>Every Customer Conversation.<br/><span className="gradient-text">One Customer Profile.</span></>} copy="Give your team the full context behind every lead, message, order and follow-up."/><Button asChild variant="outline"><a href="#contact">Explore CRM <ArrowRight/></a></Button></div><div className="crm-ui"><div className="crm-profile"><div className="profile-avatar large">SK</div><h3>Sana Khan</h3><span>Lead • High intent</span><div className="crm-stats"><div><small>Lead score</small><b>92</b></div><div><small>Lifetime value</small><b>₹18,400</b></div></div><dl><div><dt>Source</dt><dd>Instagram</dd></div><div><dt>Assigned</dt><dd>Rohan</dd></div><div><dt>Next follow-up</dt><dd>Tomorrow, 11:00</dd></div></dl></div><div className="timeline"><div className="timeline-head"><b>Customer activity</b><span>Today</span></div>{[[MessageCircle,"Customer replied","10:42"],[ShoppingBag,"Product shared","10:38"],[Target,"Lead created","10:35"],[Contact,"Tag added: High intent","10:35"],[CalendarCheck,"Follow-up scheduled","10:32"]].map(([Icon,label,time])=><div className="timeline-item" key={String(label)}><i><Icon size={15}/></i><span><b>{String(label)}</b><small>{String(time)}</small></span></div>)}</div></div></section>

    <section className="section ai-section"><div className="ai-panel"><div className="ai-copy"><SectionTitle eyebrow="HATFLOW AI AGENT" light title={<>Let AI Handle the Conversations.<br/><span className="gradient-text">Let Your Team Handle the Important Ones.</span></>} copy="Answer questions, capture and qualify leads, check orders, schedule appointments and trigger workflows — with human handoff always in reach."/><div className="ai-capabilities">{["Answer FAQs","Capture leads","Check orders","Share products","Book appointments","Trigger workflows"].map(x=><span key={x}><Sparkles/>{x}</span>)}</div></div><div className="ai-chat"><div className="ai-chat-head"><div><Bot/></div><span><b>Hatflow AI</b><small>Responding from your knowledge</small></span><i>LIVE</i></div><div className="ai-message customer">Can you tell me when order HF-2048 will arrive?</div><div className="ai-thinking"><Sparkles/> Checking your order system</div><div className="ai-message agent">Your order is in transit and expected tomorrow. Would you like the tracking link?</div><div className="ai-architecture">{[MessageCircle,Bot,Braces,Contact,GitBranch,UsersRound].map((Icon,i)=><span key={i}><Icon/>{i<5&&<ArrowRight/>}</span>)}</div></div></div></section>

    <section className="section industries"><SectionTitle eyebrow="MADE FOR CONVERSATIONAL BUSINESS" title="Built for Businesses That Run on Conversations."/><div className="industry-grid">{[[ShoppingBag,"Ecommerce","Recommend products, recover carts and update orders."],[Boxes,"Education","Qualify enquiries and guide admissions follow-ups."],[HeartPulse,"Healthcare","Coordinate appointments and routine patient queries."],[LayoutDashboard,"Real Estate","Capture property interest and assign agents."],[Headphones,"Service Businesses","Manage bookings, reminders and support."],[Rocket,"D2C Brands","Connect campaigns, customers and order journeys."],[WandSparkles,"Agencies","Manage client workflows from one platform."],[MessageCircle,"Local Businesses","Turn daily enquiries into organized follow-ups."]].map(([Icon,title,copy])=><article key={String(title)}><Icon/><h3>{String(title)}</h3><p>{String(copy)}</p></article>)}</div></section>

    <section className="section why-section"><div className="why-intro"><SectionTitle eyebrow="THE HATFLOW DIFFERENCE" title="Why Businesses Choose Hatflow." copy="A focused operating layer for teams that use WhatsApp to sell, support and grow."/></div><div className="why-list">{[["01","WhatsApp-first infrastructure"],["02","No-code automation"],["03","Built-in customer CRM"],["04","AI + human collaboration"],["05","Deep integrations"],["06","Centralized communication"]].map(([n,x])=><div key={x}><span>{n}</span><h3>{x}</h3><CircleCheck/></div>)}</div></section>

    <section className="section pricing-section" id="pricing"><SectionTitle eyebrow="PRICING" title="Simple, Transparent Pricing." copy="Start with the setup that matches your business. Scale with your team and workflows."/><div className="billing-toggle"><span className={!annual?"active":""}>Monthly</span><Button variant="ghost" size="icon" role="switch" aria-checked={annual} onClick={()=>setAnnual(!annual)}><i className={annual?"annual":""}/></Button><span className={annual?"active":""}>Annual</span></div><div className="pricing-grid">
      <article className="price-card"><span className="plan-label">STARTER</span><h3>Start with WhatsApp</h3><p>Essential tools for small teams beginning with structured conversations.</p><div className="price">Talk to us</div>{["Official WhatsApp setup","Shared team inbox","Basic automation flows","Contact management"].map(x=><span className="price-feature" key={x}><Check/>{x}</span>)}<Button asChild variant="outline"><a href="#contact">Talk to an Expert</a></Button></article>
      <article className="price-card featured"><span className="popular">MOST POPULAR</span><span className="plan-label">HATFLOW BUSINESS</span><h3>Full operating system</h3><div className="price"><small>₹</small>12,999<span>{annual ? "/month, billed annually" : "/month"}</span></div>{["WhatsApp Business API","No-code flow builder","AI agent workflows","Built-in CRM & lead management","Multi-agent inbox","Broadcast campaigns","Core integrations","Analytics & reports"].map(x=><span className="price-feature" key={x}><CircleCheck/>{x}</span>)}<Button asChild><a href="#contact">Get Started <ArrowRight/></a></Button></article>
      <article className="price-card"><span className="plan-label">ENTERPRISE</span><h3>Custom Pricing</h3><p>For organizations with complex systems, teams and operating requirements.</p>{["Multiple WhatsApp Numbers","Advanced Integrations","Custom Automation","Dedicated Support","Custom Requirements"].map(x=><span className="price-feature" key={x}><Check/>{x}</span>)}<Button asChild variant="outline"><a href="#contact">Contact Sales</a></Button></article>
    </div><p className="price-note">WhatsApp / Meta conversation charges and third-party platform fees may apply separately where applicable.</p></section>

    <section className="section feedback"><SectionTitle eyebrow="CUSTOMER FEEDBACK" title="What Businesses Say About Hatflow." copy="This space is ready for verified customer stories."/><div className="feedback-placeholder"><MessagesSquare/><div><h3>Customer stories are coming soon.</h3><p>Verified quotes, names and company details will appear here once approved for publication.</p></div><span>PLACEHOLDER FOR VERIFIED FEEDBACK</span></div></section>

    <section className="section partnership"><div className="founder-wrap"><img src={founderPhoto.url} alt="Founder of UnknownHat Agency at a technology summit"/><div className="founder-caption"><span>Technology Partner</span><b>UnknownHat Agency</b></div></div><div className="partner-copy"><img src={unknownHatLogo.url} alt="UnknownHat Agency"/><SectionTitle eyebrow="OUR PARTNERSHIP" title="Hatflow × UnknownHat Agency" copy="Technology built by UnknownHat Agency."/><p>Hatflow is developed and supported by UnknownHat Agency, a digital solutions company focused on websites, digital growth, automation and AI-powered business systems.</p><div className="partner-path"><span>UnknownHat Agency</span><ArrowRight/><span>Product Development</span><ArrowRight/><span>Hatflow</span><ArrowRight/><span>Businesses</span></div><div className="partner-points">{["Product Development","Continuous Innovation","Automation Expertise","Dedicated Support"].map(x=><span key={x}><Check/>{x}</span>)}</div><Button asChild variant="outline"><a href="https://unknowhat.com" target="_blank" rel="noreferrer">Visit UnknownHat Agency <ArrowRight/></a></Button></div></section>

    <section className="section faq-section" id="faq"><SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" copy="Straight answers about setup, integrations, pricing and how Hatflow works."/><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}</div></section>

    <section className="final-cta" id="contact"><div className="cta-grid"/><span className="eyebrow">START WITH HATFLOW</span><h2>Ready to Turn WhatsApp Into Your Business Operating System?</h2><p>Automate conversations. Capture leads. Manage customers. Grow faster.</p><div><Button asChild size="lg"><a href="https://hatflow.in">Get Started Now <ArrowRight/></a></Button><Button asChild size="lg" variant="outline"><a href="https://unknowhat.com" target="_blank" rel="noreferrer">Talk to an Expert</a></Button></div></section>

    <footer><div className="footer-main"><div className="footer-brand"><Logo light/><p>WhatsApp Business. Automated.</p><span>A product by <a href="https://unknowhat.com">UnknownHat Agency</a></span></div>{[["Product","Features","CRM","Automation","AI Agent","Pricing"],["Solutions","Ecommerce","Lead Generation","Customer Support","Education","Healthcare"],["Integrations","Shopify","WooCommerce","CRM","Payments","AI"],["Resources","Documentation","FAQs","Blog","Help Center"],["Company","About","UnknownHat Agency","Contact","Privacy Policy","Terms & Conditions"]].map(([heading,...links])=><div className="footer-links" key={heading}><b>{heading}</b>{links.map(x=><a href={x==="UnknownHat Agency"?"https://unknowhat.com":"#"} key={x}>{x}</a>)}</div>)}</div><div className="footer-bottom"><span>© 2026 HATFLOW. All rights reserved.</span><span>Built by UnknownHat Agency</span></div></footer>
    <a href="#contact" className="floating-contact" aria-label="Talk to HATFLOW"><MessageCircle/></a>
  </main>;
}