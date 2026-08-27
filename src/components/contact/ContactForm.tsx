"use client";

import { useState, useRef, useCallback } from "react";
import { Send } from "lucide-react";
import { profile } from "@/config/profile";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function validateName(value: string): string | undefined {
  const v = value.trim();
  if (!v) return "Please enter your name.";
  if (v.length < 2 || v.length > 80) return "Name must be between 2 and 80 characters.";
  return undefined;
}

function validateEmail(value: string): string | undefined {
  const v = value.trim();
  if (!v) return "Please enter a valid email address.";
  if (v.length > 254) return "Email must be at most 254 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Please enter a valid email address.";
  return undefined;
}

function validateMessage(value: string): string | undefined {
  const v = value.trim();
  if (!v) return "Please enter at least 20 characters.";
  if (v.length < 20) return "Please enter at least 20 characters.";
  if (v.length > 2000) return "Message must be at most 2000 characters.";
  return undefined;
}

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validate = useCallback((): FormErrors => {
    const form = formRef.current;
    if (!form) return {};
    const data = new FormData(form);
    const name = (data.get("name") as string) ?? "";
    const email = (data.get("email") as string) ?? "";
    const message = (data.get("message") as string) ?? "";
    return {
      name: validateName(name),
      email: validateEmail(email),
      message: validateMessage(message),
    };
  }, []);

  const handleBlur = useCallback(() => {
    setErrors(validate());
  }, [validate]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (newErrors.name || newErrors.email || newErrors.message) return;

    setState("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = {};
    for (const [key, val] of formData.entries()) {
      if (key === "website") continue;
      payload[key] = (val as string).trim();
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setErrors({});
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="contact-success">
        <p className="contact-success-title">Message sent</p>
        <p className="contact-success-text">Thanks for reaching out. I&apos;ll get back to you soon.</p>
        <button
          type="button"
          className="contact-reset-btn"
          onClick={() => setState("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="field-row">
        <div className="field-group">
          <label className="field-label" htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={80}
            autoComplete="name"
            placeholder="Your name"
            className="field"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            onBlur={handleBlur}
          />
          {errors.name && <p className="field-error" id="name-error" role="alert">{errors.name}</p>}
        </div>

        <div className="field-group">
          <label className="field-label" htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="you@example.com"
            className="field"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            onBlur={handleBlur}
          />
          {errors.email && <p className="field-error" id="email-error" role="alert">{errors.email}</p>}
        </div>
      </div>

      <div className="field-group">
        <label className="field-label" htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={20}
          maxLength={2000}
          rows={4}
          placeholder="Tell me a little about your project or idea..."
          className="field"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          onBlur={handleBlur}
        />
        {errors.message && <p className="field-error" id="message-error" role="alert">{errors.message}</p>}
      </div>

      <div className="contact-submit">
        <button
          type="submit"
          disabled={state === "sending"}
          className="contact-submit-btn"
        >
          {state === "sending" ? "Sending..." : (
            <>
              Send Message
              <Send size={14} />
            </>
          )}
        </button>
        <p className="contact-reply-note">I usually reply within 24–48 hours.</p>
      </div>

      {state === "error" && (
        <p className="contact-error-global" role="alert">
          Something went wrong. Please try again or <a href={`mailto:${profile.email}`} className="contact-error-link">contact me directly by email</a>.
        </p>
      )}
    </form>
  );
}
