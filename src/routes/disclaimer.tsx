import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Hatflow" },
      { name: "description", content: "Important disclaimers regarding the use of the Hatflow platform, automation, and third-party services." },
      { property: "og:title", content: "Disclaimer — Hatflow" },
      { property: "og:description", content: "Important disclaimers regarding the use of the Hatflow platform, automation, and third-party services." },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" updated="September 25, 2026">
      <p>The information, software, services, features, tools, and content provided through <strong>Hatflow</strong> are offered for general business and operational purposes. By accessing or using Hatflow, you acknowledge and agree to the terms stated in this Disclaimer.</p>

      <h2>1. Service Information</h2>
      <p>Hatflow provides software, automation solutions, WhatsApp API-related tools, integrations, communication features, and other digital services.</p>
      <p>While we make reasonable efforts to keep information accurate and services functional, we do not guarantee that all information, features, documentation, pricing, availability, or service descriptions will always be complete, accurate, current, or error-free.</p>

      <h2>2. Third-Party Platforms</h2>
      <p>Hatflow may integrate with or depend on third-party platforms and services, including but not limited to <strong>Meta, WhatsApp, payment gateways, hosting providers, APIs, cloud services, and other external platforms</strong>.</p>
      <p>Hatflow does not control the policies, availability, functionality, pricing, restrictions, approvals, suspensions, or changes made by such third parties. Any changes, restrictions, suspension, rejection, downtime, policy enforcement, API limitation, or termination by a third-party platform may affect Hatflow-related functionality.</p>

      <h2>3. WhatsApp &amp; Meta Services</h2>
      <p>Hatflow may provide tools or integrations designed to work with WhatsApp Business and Meta services. However, Hatflow does not guarantee approval, uninterrupted access, message delivery, account verification, template approval, or continued availability of any WhatsApp or Meta service.</p>
      <p>Users are solely responsible for complying with applicable <strong>Meta, WhatsApp, WhatsApp Business Platform, and other third-party policies</strong> when using Hatflow.</p>

      <h2>4. Automation Disclaimer</h2>
      <p>Automation features are provided to help users streamline business processes. However, automated actions, messages, workflows, integrations, and triggers may depend on third-party systems, user configuration, network availability, APIs, and other technical conditions.</p>
      <p>Hatflow does not guarantee that every automated action will execute without delay, interruption, error, or failure. Users are responsible for reviewing and configuring their automation workflows appropriately.</p>

      <h2>5. Business Results</h2>
      <p>Hatflow does not guarantee any specific business outcome, revenue, sales, leads, conversions, customer engagement, or return on investment from the use of its services.</p>
      <p>Results may vary depending on the user's industry, strategy, audience, implementation, content, offers, third-party platforms, and other factors outside Hatflow's control.</p>

      <h2>6. User Responsibility</h2>
      <p>Users are responsible for:</p>
      <ul>
        <li>The information and content they submit or process through Hatflow.</li>
        <li>Their use of WhatsApp, Meta, APIs, and connected third-party services.</li>
        <li>Maintaining appropriate permissions and account access.</li>
        <li>Compliance with applicable laws, regulations, and third-party platform policies.</li>
        <li>Reviewing automated messages and workflows before activating them.</li>
      </ul>
      <p>Hatflow is not responsible for misuse of the platform by users.</p>

      <h2>7. Technical Availability</h2>
      <p>Although Hatflow aims to provide reliable services, uninterrupted availability cannot be guaranteed. Services may occasionally be affected by maintenance, software updates, server issues, technical failures, security incidents, network problems, API changes, or third-party outages.</p>

      <h2>8. Financial and Legal Disclaimer</h2>
      <p>Hatflow does not provide legal, financial, tax, regulatory, or professional advice. Any information provided through the platform or website should not be treated as professional advice. Users should consult qualified professionals for advice specific to their situation.</p>

      <h2>9. Contact Us</h2>
      <p>For questions regarding this Disclaimer, contact:</p>
      <p><strong>Hatflow</strong><br />Email: officialhatflow@gmail.com<br />Support: +91 7055481738<br />Website: https://hatflow.in</p>
    </LegalPage>
  );
}
