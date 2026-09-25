import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Hatflow" },
      { name: "description", content: "How Hatflow collects, uses, shares, and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — Hatflow" },
      { property: "og:description", content: "How Hatflow collects, uses, shares, and protects your personal information." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://hatflow.in/__l5e/assets-v1/a28b6960-bbad-4edc-b2d0-18ff7141082b/hatflow-social-preview.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://hatflow.in/__l5e/assets-v1/a28b6960-bbad-4edc-b2d0-18ff7141082b/hatflow-social-preview.png" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="September 25, 2026">
      <p>At <strong>Hatflow</strong>, we respect your privacy and are committed to protecting the personal information you provide while using our website, software, applications, APIs, automation services, WhatsApp-related services, and other products.</p>
      <p>This Privacy Policy explains what information we collect, how we use it, when it may be shared, how we protect it, and the choices available to you.</p>

      <h2>1. Information We Collect</h2>
      <p>Depending on how you use Hatflow, we may collect the following information:</p>
      <h3>A. Account Information</h3>
      <p>When you create an account, we may collect:</p>
      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Mobile/phone number</li>
        <li>Password or authentication credentials</li>
        <li>Business or company information</li>
        <li>Billing information</li>
        <li>Account and subscription details</li>
      </ul>
      <h3>B. Payment Information</h3>
      <p>When you purchase a Hatflow product or service, payment information may be processed by third-party payment providers. Hatflow may receive transaction-related information such as:</p>
      <ul>
        <li>Transaction ID</li>
        <li>Payment status</li>
        <li>Amount paid</li>
        <li>Payment date</li>
        <li>Billing details</li>
      </ul>
      <p>Hatflow generally does not store your complete debit/credit card, UPI, or banking credentials unless expressly stated.</p>
      <h3>C. WhatsApp &amp; Communication Data</h3>
      <p>If you connect Hatflow with WhatsApp Business, Meta services, or another communication platform, Hatflow may process information necessary to provide the requested services, including:</p>
      <ul>
        <li>Phone numbers</li>
        <li>Contact names</li>
        <li>Message content</li>
        <li>Message metadata</li>
        <li>Conversation information</li>
        <li>Template information</li>
        <li>Delivery and engagement information</li>
        <li>Business account and API information</li>
      </ul>
      <p>The information processed depends on the integrations and features you enable.</p>
      <h3>D. Technical Information</h3>
      <p>When you access our website or services, we may automatically collect certain technical information, including:</p>
      <ul>
        <li>IP address</li>
        <li>Browser type</li>
        <li>Device type</li>
        <li>Operating system</li>
        <li>Referring pages</li>
        <li>Pages visited</li>
        <li>Access time and date</li>
        <li>Usage and diagnostic information</li>
        <li>Log and security information</li>
      </ul>
      <h3>E. Cookies and Similar Technologies</h3>
      <p>Hatflow may use cookies, pixels, local storage, and similar technologies to:</p>
      <ul>
        <li>Keep users logged in</li>
        <li>Remember preferences</li>
        <li>Improve website functionality</li>
        <li>Understand website usage</li>
        <li>Measure performance</li>
        <li>Improve our services</li>
        <li>Detect fraud and security threats</li>
      </ul>
      <p>You may control cookies through your browser settings, although disabling certain cookies may affect some website functionality.</p>

      <h2>2. How We Use Your Information</h2>
      <p>We may use collected information to:</p>
      <ul>
        <li>Create and manage your Hatflow account</li>
        <li>Provide requested products and services</li>
        <li>Process subscriptions and payments</li>
        <li>Provide customer support</li>
        <li>Enable WhatsApp and API integrations</li>
        <li>Operate and maintain automation workflows</li>
        <li>Send service-related communications</li>
        <li>Send billing and account notifications</li>
        <li>Improve our software and services</li>
        <li>Monitor system performance</li>
        <li>Prevent fraud, abuse, and unauthorized access</li>
        <li>Maintain security</li>
        <li>Comply with applicable legal and regulatory requirements</li>
        <li>Communicate important changes, updates, or service information</li>
      </ul>
      <p>Where consent is required, we will seek consent for the relevant processing in accordance with applicable law.</p>

      <h2>3. Consent</h2>
      <p>By providing personal information to Hatflow, you acknowledge that your information may be processed for the purposes described in this Privacy Policy and the specific notice presented at the time of collection.</p>
      <p>Where processing is based on consent, you may withdraw your consent through the available mechanism or by contacting us.</p>
      <p>Withdrawal of consent may affect our ability to provide certain services or features that require the relevant information.</p>

      <h2>4. Sharing of Information</h2>
      <p>Hatflow does not sell your personal information as a standalone commercial product.</p>
      <p>We may share or disclose information where necessary to operate our services, including with:</p>
      <ul>
        <li>Payment processors</li>
        <li>Hosting and cloud service providers</li>
        <li>WhatsApp/Meta and other API providers</li>
        <li>Software and technology providers</li>
        <li>Analytics and security providers</li>
        <li>Customer-support providers</li>
        <li>Professional advisers</li>
        <li>Government authorities or law-enforcement agencies where legally required</li>
      </ul>
      <p>Third-party service providers may process information on our behalf or according to their own applicable terms and privacy policies.</p>

      <h2>5. Third-Party Services</h2>
      <p>Hatflow integrates with third-party platforms such as Meta, WhatsApp, payment gateways, and cloud providers. Your use of those services is also governed by their own terms and privacy policies, and Hatflow is not responsible for their data practices.</p>

      <h2>6. Data Security</h2>
      <p>We use reasonable technical and organizational measures to protect your information against unauthorized access, loss, misuse, or alteration. However, no method of transmission or storage is completely secure, and absolute security cannot be guaranteed.</p>

      <h2>7. Data Retention</h2>
      <p>We retain personal information for as long as your account is active or as needed to provide services, comply with legal obligations, resolve disputes, and enforce our agreements.</p>

      <h2>8. Your Rights and Choices</h2>
      <p>You may request access to, correction of, or deletion of your personal information, and you may withdraw consent where processing is based on it, by contacting us using the details below. Some requests may be subject to legal or operational requirements.</p>

      <h2>9. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. The revised policy becomes effective when published on this page unless a different effective date is stated.</p>

      <h2>10. Contact Us</h2>
      <p>For privacy-related questions or requests, contact:</p>
      <p><strong>Hatflow</strong><br />Email: officialhatflow@gmail.com<br />Support: +91 7055481738<br />Website: https://hatflow.in</p>
    </LegalPage>
  );
}
