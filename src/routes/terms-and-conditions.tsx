import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Hatflow" },
      { name: "description", content: "The terms that govern your access to and use of the Hatflow platform and services." },
      { property: "og:title", content: "Terms & Conditions — Hatflow" },
      { property: "og:description", content: "The terms that govern your access to and use of the Hatflow platform and services." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://hatflow.in/hatflow-social-preview.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://hatflow.in/hatflow-social-preview.png" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated="September 25, 2026">
      <p>Welcome to <strong>Hatflow</strong>. These Terms &amp; Conditions ("Terms") govern your access to and use of the Hatflow website, platform, software, applications, APIs, automation tools, WhatsApp-related services, subscriptions, and other products or services provided by Hatflow.</p>
      <p>By registering for an account, purchasing a plan, accessing, or using Hatflow, you agree to be legally bound by these Terms. If you do not agree with these Terms, you must not use Hatflow.</p>

      <h2>1. About Hatflow</h2>
      <p>Hatflow is a digital software and automation platform that may provide services including, but not limited to:</p>
      <ul>
        <li>WhatsApp API and communication integrations</li>
        <li>Business automation</li>
        <li>Chatbots and workflow automation</li>
        <li>API integrations</li>
        <li>Messaging and notification tools</li>
        <li>Customer communication tools</li>
        <li>Business process automation</li>
        <li>Subscription-based software features</li>
        <li>Other digital products and services</li>
      </ul>
      <p>The exact features available to you depend on your selected plan, subscription, account configuration, and applicable third-party services.</p>

      <h2>2. Account Registration</h2>
      <p>To use certain Hatflow services, you may be required to create an account. You agree to:</p>
      <ul>
        <li>Provide accurate and complete information.</li>
        <li>Keep your account information updated.</li>
        <li>Maintain the confidentiality of your login credentials.</li>
        <li>Take responsibility for activity performed through your account.</li>
        <li>Immediately notify Hatflow if you suspect unauthorized access.</li>
      </ul>
      <p>You must not create an account using false information or impersonate another individual or organization.</p>

      <h2>3. Eligibility</h2>
      <p>By using Hatflow, you confirm that you have the legal capacity to enter into these Terms and that your use of the service is lawful. Where you are using Hatflow on behalf of a business or organization, you confirm that you have authority to accept these Terms on its behalf.</p>

      <h2>4. Subscription and Pricing</h2>
      <p>Certain Hatflow services may be offered through paid subscription plans. Subscription pricing, features, limits, billing cycles, credits, usage restrictions, and other commercial terms will be displayed on the relevant Hatflow page or order process.</p>
      <p>Hatflow reserves the right to modify pricing, features, usage limits, or subscription plans in the future. Any price change affecting an existing recurring subscription will be communicated where required by applicable law or the applicable agreement.</p>

      <h2>5. Payments</h2>
      <p>Payments may be processed through third-party payment gateway providers. By making a payment, you confirm that:</p>
      <ul>
        <li>The information provided for payment is accurate.</li>
        <li>You are authorized to use the selected payment method.</li>
        <li>The transaction is made for legitimate business or personal purposes.</li>
      </ul>
      <p>A successful payment may activate the applicable subscription, credits, features, or services.</p>

      <h2>6. No-Refund Policy</h2>
      <p>All purchases of Hatflow subscriptions, plans, credits, services, setups, and digital products are <strong>non-refundable</strong>, except where a refund is required by applicable law or expressly approved by Hatflow.</p>
      <p>Changing your mind, selecting an incorrect plan, not using the service, not achieving expected results, or discontinuing use does not automatically create a right to a refund.</p>
      <p>For additional details, please refer to Hatflow's <strong>Return &amp; Refund Policy</strong>.</p>

      <h2>7. Subscription Cancellation and Renewal</h2>
      <p>You may cancel a subscription according to the cancellation functionality or process made available by Hatflow. Cancellation generally prevents future renewal but does not automatically refund amounts already paid for the current billing period.</p>
      <p>Unless otherwise stated, services remain available until the end of the applicable paid subscription period, subject to these Terms.</p>

      <h2>8. Third-Party Services and APIs</h2>
      <p>Hatflow may depend on or integrate with third-party services, including:</p>
      <ul>
        <li>Meta</li>
        <li>WhatsApp</li>
        <li>WhatsApp Business Platform</li>
        <li>Payment gateways</li>
        <li>Cloud providers</li>
        <li>Hosting providers</li>
        <li>APIs</li>
        <li>Analytics services</li>
        <li>Communication providers</li>
        <li>Other external technology platforms</li>
      </ul>
      <p>Third-party services are controlled independently by their respective providers. Hatflow does not guarantee the availability, approval, functionality, pricing, delivery, continuity, or policies of third-party services. Changes to third-party APIs, policies, account requirements, pricing, restrictions, suspensions, or technical systems may affect Hatflow functionality.</p>

      <h2>9. WhatsApp and Meta Compliance</h2>
      <p>Where Hatflow is used with WhatsApp or Meta services, you are responsible for complying with all applicable Meta and WhatsApp policies, requirements, messaging rules, consent requirements, business verification requirements, template requirements, and other applicable rules.</p>
      <p>Hatflow does not guarantee:</p>
      <ul>
        <li>WhatsApp Business approval</li>
        <li>Meta Business verification</li>
        <li>Message template approval</li>
        <li>Unlimited message delivery</li>
        <li>Delivery of every message</li>
        <li>Continued access to a WhatsApp account</li>
        <li>Protection against third-party account restrictions or suspension</li>
      </ul>
      <p>A third-party restriction or suspension does not automatically create a right to a refund.</p>

      <h2>10. Automation and User Configuration</h2>
      <p>Hatflow provides automation tools based on configurations, triggers, workflows, APIs, and user-defined conditions. You are responsible for reviewing and testing workflows before enabling them for production use.</p>
      <p>Hatflow does not guarantee that an automation will execute without:</p>
      <ul>
        <li>Delays</li>
        <li>Errors</li>
        <li>Failed triggers</li>
        <li>API interruptions</li>
        <li>Duplicate events</li>
        <li>Third-party failures</li>
        <li>Configuration issues</li>
        <li>Network failures</li>
      </ul>
      <p>You remain responsible for the business actions, communications, and consequences resulting from workflows configured through your account.</p>

      <h2>11. Acceptable Use</h2>
      <p>You agree not to use Hatflow to:</p>
      <ul>
        <li>Violate any applicable law or regulation.</li>
        <li>Send unlawful, fraudulent, deceptive, abusive, or misleading communications.</li>
        <li>Conduct spam campaigns.</li>
        <li>Harass, threaten, or impersonate others.</li>
        <li>Distribute malware or malicious code.</li>
        <li>Attempt unauthorized access to Hatflow or third-party systems.</li>
        <li>Circumvent security or usage restrictions.</li>
        <li>Interfere with Hatflow infrastructure.</li>
        <li>Reverse engineer or attempt to extract source code except where legally permitted.</li>
        <li>Use Hatflow for activities prohibited by Meta, WhatsApp, payment providers, or other connected platforms.</li>
        <li>Process or upload data without having the necessary legal authority or permissions.</li>
      </ul>
      <p>Hatflow may restrict or terminate access where misuse is identified or reasonably suspected.</p>

      <h2>12. User Content and Data</h2>
      <p>You retain ownership of content and information that you submit to Hatflow, subject to the rights required for Hatflow to provide the services. You are responsible for ensuring that you have the necessary rights, permissions, notices, and lawful basis to upload, process, transmit, or automate such information through Hatflow.</p>
      <p>Hatflow may process information as described in its <strong>Privacy Policy</strong> and as necessary to operate, secure, maintain, and improve the services.</p>

      <h2>13. Intellectual Property</h2>
      <p>All Hatflow software, platform components, website content, branding, logos, designs, interfaces, documentation, code, graphics, trademarks, and other proprietary materials are owned by or licensed to Hatflow unless otherwise stated. Nothing in these Terms transfers ownership of Hatflow's intellectual property to you.</p>
      <p>You receive only the limited right to access and use the services during the applicable subscription or authorization period. You must not copy, reproduce, sell, sublicense, distribute, modify, or commercially exploit Hatflow's proprietary materials without written authorization.</p>

      <h2>14. Service Availability</h2>
      <p>Hatflow aims to maintain reliable service but does not guarantee that the platform will always be:</p>
      <ul>
        <li>Available</li>
        <li>Uninterrupted</li>
        <li>Error-free</li>
        <li>Secure from every possible threat</li>
        <li>Compatible with every device or third-party service</li>
      </ul>
      <p>Services may be temporarily unavailable due to maintenance, upgrades, technical failures, infrastructure issues, security incidents, internet failures, API changes, or third-party outages.</p>

      <h2>15. Account Suspension or Termination</h2>
      <p>Hatflow may suspend, restrict, or terminate an account where reasonably necessary, including in cases involving:</p>
      <ul>
        <li>Violation of these Terms</li>
        <li>Fraudulent activity</li>
        <li>Abuse or misuse</li>
        <li>Security threats</li>
        <li>Illegal activity</li>
        <li>Payment issues</li>
        <li>Unauthorized use</li>
        <li>Violation of third-party policies</li>
        <li>Requests from authorities or third-party providers</li>
      </ul>
      <p>Where appropriate, Hatflow may provide notice before taking action; however, immediate suspension may be applied where necessary to protect Hatflow, users, third parties, or the platform. Suspension or termination due to a user's breach does not automatically create any refund entitlement.</p>

      <h2>16. Disclaimer of Warranties</h2>
      <p>Hatflow services are provided on an <strong>"as available" and "as is"</strong> basis to the extent permitted by applicable law. Hatflow does not guarantee that the services will produce specific business results, including:</p>
      <ul>
        <li>Revenue</li>
        <li>Sales</li>
        <li>Leads</li>
        <li>Conversions</li>
        <li>Customer responses</li>
        <li>Marketing performance</li>
        <li>Return on investment</li>
      </ul>
      <p>Any business outcome depends on multiple factors outside Hatflow's control.</p>

      <h2>17. Limitation of Liability</h2>
      <p>To the maximum extent permitted by applicable law, Hatflow shall not be liable for indirect, incidental, special, consequential, or business losses arising from or relating to the use or inability to use the services. This may include loss of:</p>
      <ul>
        <li>Revenue</li>
        <li>Profits</li>
        <li>Data</li>
        <li>Leads</li>
        <li>Customers</li>
        <li>Business opportunities</li>
        <li>Account access</li>
        <li>Third-party platform access</li>
      </ul>
      <p>Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited under applicable law.</p>

      <h2>18. Indemnification</h2>
      <p>You agree to defend, indemnify, and hold harmless Hatflow and its officers, employees, contractors, and service providers from claims, losses, damages, liabilities, costs, and expenses arising from:</p>
      <ul>
        <li>Your misuse of Hatflow.</li>
        <li>Your violation of these Terms.</li>
        <li>Your violation of applicable law.</li>
        <li>Your violation of third-party platform policies.</li>
        <li>Your content or communications.</li>
        <li>Your unauthorized processing or use of personal information.</li>
        <li>Your infringement of another party's rights.</li>
      </ul>

      <h2>19. Privacy</h2>
      <p>Your use of Hatflow is also subject to our <strong>Privacy Policy</strong>, which explains how we collect, use, store, and protect personal information. By using Hatflow, you acknowledge that you have reviewed the Privacy Policy.</p>

      <h2>20. Changes to Services</h2>
      <p>Hatflow may add, modify, suspend, or discontinue features or services from time to time. We may update functionality, interfaces, integrations, limits, technical requirements, or service architecture where necessary. Where applicable, changes will be communicated through the website, account interface, email, or other reasonable means.</p>

      <h2>21. Changes to These Terms</h2>
      <p>Hatflow may update these Terms from time to time. The revised Terms will become effective when published on the website unless a different effective date is stated. Your continued use of Hatflow after the revised Terms become effective constitutes acceptance of the updated Terms.</p>

      <h2>22. Governing Law</h2>
      <p>These Terms shall be governed by and interpreted in accordance with the laws of <strong>India</strong>, subject to applicable statutory and regulatory requirements. Any dispute arising from or relating to these Terms or Hatflow services shall be subject to the jurisdiction of the competent courts in India, unless otherwise required by applicable law.</p>

      <h2>23. Severability</h2>
      <p>If any provision of these Terms is found to be invalid, unlawful, or unenforceable, the remaining provisions will continue to remain effective to the maximum extent permitted by law.</p>

      <h2>24. Entire Agreement</h2>
      <p>These Terms, together with the Privacy Policy, Return &amp; Refund Policy, Disclaimer, and any applicable service-specific agreement, constitute the agreement governing your use of Hatflow.</p>

      <h2>25. Contact Us</h2>
      <p>For questions, support, legal notices, or concerns regarding these Terms, contact:</p>
      <p><strong>Hatflow</strong><br />Email: officialhatflow@gmail.com<br />Support Number: +91 7055481738<br />Website: https://hatflow.in</p>
      <p>By creating an account, purchasing a service, or using Hatflow, you confirm that you have read, understood, and agreed to these Terms &amp; Conditions.</p>
    </LegalPage>
  );
}
