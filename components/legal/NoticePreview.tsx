"use client";

import React from "react";
import { Download, ShieldCheck, FileCheck } from "lucide-react";

interface NoticePreviewProps {
  caseId?: string;
  vaspName?: string;
  depositAddress?: string;
  evidenceHash?: string;
}

export function NoticePreview({
  caseId = "CS-2026-8891",
  vaspName = "CoinDCX (Neblio Technologies Pvt Ltd)",
  depositAddress = "TCOINDCXDEPOSIT9988776655443311",
  evidenceHash = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
}: NoticePreviewProps) {
  return (
    <div className="w-full max-w-3xl space-y-4">
      {/* Notice header */}
      <div className="glass-panel flex items-center justify-between gap-4 px-5 py-4">
        <div>
          <p className="font-display text-base font-bold text-[var(--primary)] uppercase tracking-wide">
            Formal Freeze Order — Section 94 BNSS, 2023
          </p>
          <p className="text-xs text-[var(--muted-foreground)] mt-0.5 font-mono">
            Reference Case ID: {caseId}
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-bold text-white hover:bg-[var(--primary-hover)] transition-colors shrink-0 cursor-pointer"
        >
          <Download className="size-4" />
          Download PDF
        </button>
      </div>

      {/* Notice body */}
      <div className="glass-panel p-6 space-y-4 text-sm leading-relaxed text-[var(--foreground)]">
        <p className="font-semibold">TO: Nodal Compliance Officer, {vaspName}</p>
        <p className="text-[var(--muted-foreground)]">
          WHEREAS information has been laid before the undersigned Cyber Crime Police Station regarding stolen victim
          funds routed through crypto networks and attributed to accounts maintained on your Virtual Asset Service
          Provider (VASP) platform…
        </p>
        <p className="font-semibold text-[var(--primary)]">
          YOU ARE HEREBY DIRECTED TO IMMEDIATELY FREEZE AND RESTRAIN MOVEMENT ON THE SPECIFIED DEPOSIT ACCOUNT:
        </p>
        <div className="rounded-xl border-2 border-[color-mix(in_oklab,var(--primary)_40%,transparent)] bg-[color-mix(in_oklab,var(--primary)_5%,transparent)] p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
            KYC Deposit Address
          </p>
          <p className="font-mono text-sm text-[var(--foreground)] break-all">{depositAddress}</p>
        </div>
      </div>

      {/* Evidence certificate */}
      <div className="glass-panel p-5 space-y-3">
        <div className="flex items-center gap-2 text-[var(--primary)] font-semibold text-sm border-b border-[color-mix(in_oklab,var(--border)_40%,transparent)] pb-3">
          <ShieldCheck className="size-4" />
          Section 63 BSA Evidence Certificate (Digital Hash Stamp)
        </div>
        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
          This document carries a cryptographically verifiable SHA-256 hash stamp corresponding to the graph traversal
          chain recorded at the time of legal notice issuance.
        </p>
        <div className="flex items-center gap-2">
          <FileCheck className="size-4 text-[var(--primary)] shrink-0" />
          <code className="flex-1 truncate rounded-lg bg-white/60 border border-[color-mix(in_oklab,var(--border)_50%,transparent)] px-3 py-1.5 font-mono text-xs text-[var(--foreground)]">
            {evidenceHash}
          </code>
        </div>
      </div>
    </div>
  );
}
