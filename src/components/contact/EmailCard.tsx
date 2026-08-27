"use client";

import { useState, useCallback } from "react";
import { Copy, Check, Mail } from "lucide-react";

export function EmailCard({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: open mailto
      window.location.href = `mailto:${email}`;
    }
  }, [email]);

  return (
    <div className="email-card">
      <div className="email-card-left">
        <div className="email-card-icon">
          <Mail size={14} />
        </div>
        <div>
          <p className="email-card-label">Email me</p>
          <p className="email-card-address">{email}</p>
          <p className="email-card-hint">Best way to reach me.</p>
        </div>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="email-copy-btn"
        aria-label={copied ? "Email copied" : "Copy email address"}
      >
        {copied ? <Check size={13} /> : <Copy size={13} />}
        <span>{copied ? "Copied!" : "Copy"}</span>
      </button>
    </div>
  );
}
