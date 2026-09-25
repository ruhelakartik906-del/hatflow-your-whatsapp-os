import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { WHATSAPP_URL } from "@/components/info-page";

export const Route = createFileRoute("/refund-return-policy")({
  head: () => ({ meta: [
    { title: "Return & Refund Policy | Hatflow" },
    { name: "description", content: "Hatflow's Return & Refund Policy: digital products and subscriptions are non-refundable, with guidance on cancellations, plan changes, service issues, third-party services and payment errors." },
    { property: "og:title", content: "Return & Refund Policy | Hatflow" },
    { property: "og:description", content: "Digital products and subscriptions are non-refundable. Read how Hatflow handles cancellations, plan changes, service issues and payment errors." },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://hatflow.in/hatflow-social-preview.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: "https://hatflow.in/hatflow-social-preview.png" },
  ]}),
  component: RefundPagePage,
});

function RefundPagePage() {
  return (
    <LegalPage title="Return & Refund Policy" updated="September 25, 2026">
      <p>
        At <strong>Hatflow</strong>, we provide digital products, software, subscriptions, WhatsApp API
        services, automation tools, and other technology-based services. Due to the digital and
        service-based nature of our offerings, all purchases are considered final.
      </p>

      <h2>1. No Refund Policy</h2>
      <p>
        Once a payment has been successfully completed for any Hatflow product, subscription, plan,
        service, credit, setup, or other digital offering, <strong>the amount paid is non-refundable</strong>.
      </p>
      <p>
        Customers are advised to carefully review the selected plan, features, pricing, usage limits, and
        service requirements before making payment.
      </p>

      <h2>2. No Returns</h2>
      <p>
        Hatflow products and services are digital and non-physical in nature. Therefore,{" "}
        <strong>physical returns are not applicable</strong>.
      </p>
      <p>
        Once access to a service, subscription, account, credits, API, automation feature, or other digital
        product has been provided, it cannot be returned or exchanged.
      </p>

      <h2>3. Incorrect Plan or Purchase</h2>
      <p>
        If a customer purchases an incorrect plan, selects the wrong package, or changes their mind after
        payment, the payment will <strong>not be refunded</strong>.
      </p>
      <p>
        Where technically and commercially feasible, Hatflow may allow the customer to upgrade their plan by
        paying the applicable price difference.
      </p>

      <h2>4. Subscription Cancellation</h2>
      <p>
        Customers may cancel their subscription or choose not to renew it for the next billing cycle.
        However, cancellation does not create an entitlement to a refund for any amount already paid.
      </p>
      <p>
        The subscription will remain available until the end of the applicable paid period, subject to the
        terms of the selected plan.
      </p>

      <h2>5. Service Issues</h2>
      <p>
        If a customer experiences a technical issue, they may contact Hatflow Support. Our team will make
        reasonable efforts to investigate and resolve genuine technical problems.
      </p>
      <p>
        Technical issues, temporary downtime, third-party service failures, API restrictions, WhatsApp/Meta
        restrictions, internet connectivity issues, or configuration problems{" "}
        <strong>do not automatically qualify for a refund</strong>.
      </p>

      <h2>6. Third-Party Services</h2>
      <p>
        Hatflow may rely on third-party platforms and services, including but not limited to{" "}
        <strong>Meta, WhatsApp, payment gateways, hosting providers, APIs, and other external service
        providers</strong>.
      </p>
      <p>
        Hatflow is not responsible for refunds arising solely from restrictions, suspension, policy changes,
        downtime, errors, or service limitations caused by third-party platforms.
      </p>

      <h2>7. Duplicate or Unauthorized Transactions</h2>
      <p>
        If you believe you have been charged more than once for the same transaction, or a payment was
        processed incorrectly, please contact our support team with the relevant transaction details.
      </p>
      <p>Such cases will be reviewed individually and corrected where a genuine payment error is verified.</p>

      <h2>8. Exceptional Cases</h2>
      <p>
        Hatflow reserves the right to review exceptional cases at its sole discretion. Any exception, credit,
        adjustment, or refund approved by Hatflow will be considered a{" "}
        <strong>special exception and does not create a general right to a refund</strong>.
      </p>

      <h2>9. Agreement to This Policy</h2>
      <p>
        By purchasing or using Hatflow's products and services, you acknowledge that you have read,
        understood, and agreed to this Return &amp; Refund Policy.
      </p>
      <p>This policy applies to all Hatflow purchases unless a separate written agreement explicitly states otherwise.</p>

      <h2>10. Contact Us</h2>
      <p>For support, technical issues, or payment-related queries, please contact:</p>
      <ul>
        <li><strong>Hatflow</strong></li>
        <li><strong>Email:</strong> officialhatflow@gmail.com</li>
        <li><strong>Support Number:</strong> +91 7055481738</li>
        <li><strong>Website:</strong> https://hatflow.in</li>
      </ul>
      <p>
        Hatflow reserves the right to update this Return &amp; Refund Policy at any time. Any changes will be
        published on this page.
      </p>

      <a className="legal-contact" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        Chat with us on WhatsApp: +91 70554 81738
      </a>
    </LegalPage>
  );
}
