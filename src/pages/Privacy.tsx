export default function Privacy() {
  return (
    <div>
      <section className="relative overflow-hidden border-b py-16 md:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(16_90%_50%/0.08),transparent_60%)]" />
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Privacy Policy
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Your privacy matters to us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We collect only what we need to operate Meet Messenger and keep
              your data protected.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: March 9, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-2xl border bg-card p-8 shadow-sm">
            <div className="prose prose-neutral max-w-none">
              <h2>Information we collect</h2>
              <p>
                We collect information you provide directly to us, such as your
                name, email address, phone number, account credentials, and any
                content you send through Meet Messenger. We also collect usage
                data like device information, IP address, and analytics about
                how you interact with the service.
              </p>

              <h2>How we use your information</h2>
              <ul>
                <li>Provide and improve the Meet Messenger service.</li>
                <li>Authenticate users and secure accounts.</li>
                <li>
                  Send service-related messages, including SMS notifications you
                  opt in to receive.
                </li>
                <li>Respond to support requests and customer inquiries.</li>
                <li>Monitor for misuse, fraud, or security issues.</li>
              </ul>

              <h2>SMS and messaging data</h2>
              <p>
                If you opt in to receive SMS messages, we may collect your phone
                number, consent records, message content, delivery status, and
                engagement metrics. We do not sell, rent, or share SMS data for
                marketing purposes. Message and data rates may apply. You can
                opt out at any time by replying STOP.
              </p>

              <h2>Sharing and disclosure</h2>
              <p>
                We share information only with trusted service providers that
                help us operate Meet Messenger (for example, hosting and SMS
                delivery providers). These providers are obligated to protect
                your data and use it only to provide services on our behalf. We
                may disclose information if required by law or to protect our
                rights and users.
              </p>

              <h2>Data retention</h2>
              <p>
                We retain personal information only as long as necessary to
                provide the service and meet legal obligations. You can request
                deletion of your account and associated data by contacting
                support.
              </p>

              <h2>Security</h2>
              <p>
                We use industry-standard safeguards to protect your information,
                including encryption in transit and access controls. No system
                is 100% secure, but we work hard to protect your data.
              </p>

              <h2>Your choices</h2>
              <p>
                You can update your account information, change notification
                preferences, and opt out of SMS at any time. Unsubscribe by
                replying STOP to any SMS message. For help, reply HELP or contact
                support.
              </p>

              <h2>Children’s privacy</h2>
              <p>
                Meet Messenger is not directed to children under 13, and we do
                not knowingly collect personal information from children.
              </p>

              <h2>Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We’ll
                update the “Last updated” date and, when appropriate, notify you
                of significant changes.
              </p>

              <h2>Contact us</h2>
              <p>
                Questions about privacy or data handling? Contact us at{" "}
                <a href="mailto:support@brogrammers.agency">
                  support@brogrammers.agency
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
