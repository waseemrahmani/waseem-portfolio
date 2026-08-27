import { profile } from "@/config/profile";
import { EmailCard } from "@/components/contact/EmailCard";
import { SocialCards } from "@/components/contact/SocialCards";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Waseem Rahmani.",
};

export default function ContactPage() {
  return (
    <div className="site-container page-shell">
      <div className="contact-hero">
        <div className="contact-hero-left">
          <header className="page-header">
            <p className="eyebrow">Contact</p>
            <h1 className="page-title">Let&apos;s build something useful.</h1>
            <p className="page-lead">
              I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about systems, AI, and automation.
            </p>
          </header>
          <EmailCard email={profile.email} />
        </div>

        <div className="contact-hero-right">
          <p className="contact-section-label">Connect with me</p>
          <SocialCards />
        </div>
      </div>

      <section className="contact-form-section">
        <p className="contact-section-label">Send a message</p>
        <div className="contact-form-card">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
