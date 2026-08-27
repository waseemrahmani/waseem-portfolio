"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { profile } from "@/config/profile";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      // Keep the UI silent if clipboard access is unavailable.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="email-copy"
      title="Copy email"
      aria-label="Copy email address"
    >
      <span>{profile.email}</span>
      {copied ? <Check size={13} /> : <Copy size={13} />}
    </button>
  );
}
