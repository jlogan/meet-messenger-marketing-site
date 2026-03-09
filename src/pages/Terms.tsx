export default function Terms() {
  return (
    <div>
      <section className="relative overflow-hidden border-b py-16 md:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(16_90%_50%/0.08),transparent_60%)]" />
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Terms of Service
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Clear terms, simple expectations
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              By using Meet Messenger, you agree to the terms below.
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
              <h2>Acceptance of terms</h2>
              <p>
                These Terms of Service (“Terms”) govern your access to and use
                of Meet Messenger. By accessing or using the service, you agree
                to be bound by these Terms and our Privacy Policy.
              </p>

              <h2>Accounts and eligibility</h2>
              <p>
                You must provide accurate information when creating an account
                and maintain the security of your credentials. You are
                responsible for all activity under your account.
              </p>

              <h2>Messaging consent</h2>
              <p>
                If you provide a phone number and opt in to receive SMS
                communications, you consent to receive transactional or
                service-related messages from Meet Messenger. Message and data
                rates may apply. You can opt out at any time by replying STOP.
                For help, reply HELP or contact support.
              </p>

              <h2>Acceptable use</h2>
              <ul>
                <li>Do not send spam, phishing, or abusive content.</li>
                <li>Do not attempt to access unauthorized accounts or data.</li>
                <li>Do not disrupt or interfere with service operations.</li>
                <li>Comply with all applicable laws and regulations.</li>
              </ul>

              <h2>Content</h2>
              <p>
                You retain ownership of the content you send through Meet
                Messenger. You grant us a limited license to host and process
                content solely to operate the service.
              </p>

              <h2>Termination</h2>
              <p>
                We may suspend or terminate access to the service if you violate
                these Terms or if necessary to protect users and the integrity
                of the platform.
              </p>

              <h2>Disclaimers</h2>
              <p>
                The service is provided “as is” without warranties of any kind.
                We do not guarantee uninterrupted or error-free operation.
              </p>

              <h2>Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, Meet Messenger will not
                be liable for indirect, incidental, special, or consequential
                damages, or any loss of profits or data.
              </p>

              <h2>Changes to terms</h2>
              <p>
                We may update these Terms from time to time. We’ll update the
                “Last updated” date and, when appropriate, notify you of
                significant changes.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about these Terms? Contact us at{" "}
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
