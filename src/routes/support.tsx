import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { WHATSAPP_URL } from "@/components/info-page";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — Hatflow" },
      { name: "description", content: "Get help with your Hatflow account, billing, WhatsApp integration, automation, and technical queries." },
      { property: "og:title", content: "Support — Hatflow" },
      { property: "og:description", content: "Get help with your Hatflow account, billing, WhatsApp integration, automation, and technical queries." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://hatflow.in/hatflow-social-preview.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://hatflow.in/hatflow-social-preview.png" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <LegalPage title="Hatflow Support" updated="September 25, 2026">
      <p>Need help with Hatflow? Our support team is available to assist you with account, billing, technical, API, WhatsApp integration, automation, and other service-related queries.</p>

      <h2>How Can We Help?</h2>
      <p>You can contact us for assistance with:</p>
      <ul>
        <li>Account and login issues</li>
        <li>Subscription and billing queries</li>
        <li>WhatsApp API setup and integration</li>
        <li>Automation and workflow issues</li>
        <li>API and technical problems</li>
        <li>Account configuration</li>
        <li>Service-related questions</li>
        <li>General Hatflow support</li>
      </ul>

      <h2>Contact Support</h2>
      <p><strong>Email:</strong> officialhatflow@gmail.com<br /><strong>Support Number:</strong> +91 7055481738<br /><strong>Website:</strong> https://hatflow.in</p>
      <p><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Chat with us on WhatsApp →</a></p>

      <h2>Before Contacting Support</h2>
      <p>For faster assistance, please include your <strong>registered email address, account details, issue description, screenshots, and relevant error messages</strong> whenever applicable.</p>
      <p>Do not share your password, OTP, API secret, access token, or other confidential credentials with anyone claiming to be Hatflow Support.</p>

      <h2>Technical Support</h2>
      <p>For technical or integration-related issues, our team may request additional information such as error screenshots, workflow details, API responses, or configuration information necessary to investigate the issue.</p>
      <p>Hatflow may require reasonable time to investigate issues involving third-party services, APIs, Meta, WhatsApp, payment gateways, hosting providers, or other external platforms.</p>

      <h2>Payment &amp; Refund Support</h2>
      <p>For payment-related concerns, contact us with your transaction details.</p>
      <p>Please note that Hatflow follows its <strong>Return &amp; Refund Policy</strong>, under which purchases are generally non-refundable except where required by applicable law or specifically approved by Hatflow.</p>

      <h2>Customer Support Contact</h2>
      <p><strong>Hatflow</strong><br />Email: officialhatflow@gmail.com<br />Support: +91 7055481738<br />Website: https://hatflow.in</p>
    </LegalPage>
  );
}
