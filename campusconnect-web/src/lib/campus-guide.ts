// Approved, synthetic classroom guide for CampusConnect IT help.
// Never present these entries as real university policy.

export type GuideEntry = {
  id: string;
  title: string;
  owner: string;
  reviewed: string;
  guidance: string;
  keywords: string[];
};

export const GUIDE_STATUS = "Synthetic classroom data — not real university policy";

export const GUIDE: GuideEntry[] = [
  {
    id: "password-reset",
    title: "Password resets",
    owner: "IT Service Desk example",
    reviewed: "2026-09-01",
    guidance:
      "Reset your campus password through the approved self-service password portal. If you are locked out or the portal does not recognize you, contact the IT Service Desk. Staff will never ask for your current password or recovery codes.",
    keywords: ["password", "reset", "forgot", "locked", "lockout", "login", "log in", "sign in", "mfa"],
  },
  {
    id: "campus-wifi",
    title: "Secure campus Wi-Fi",
    owner: "Network Services example",
    reviewed: "2026-09-01",
    guidance:
      "Join the secure campus wireless network and sign in with your campus account. Avoid open or guest networks for coursework. If your device will not connect, forget the network, reconnect, and contact the IT Service Desk if it still fails.",
    keywords: ["wifi", "wi-fi", "wireless", "network", "internet", "eduroam", "router"],
  },
  {
    id: "service-desk",
    title: "IT Service Desk",
    owner: "IT Service Desk example",
    reviewed: "2026-09-01",
    guidance:
      "The IT Service Desk handles campus technology problems. Open a ticket through the approved support portal or visit the desk in person. Confirm current hours on the official IT page before you go.",
    keywords: ["service desk", "help desk", "helpdesk", "ticket", "hours", "support", "technician", "it help"],
  },
];

export type GuideResult =
  | { kind: "answer"; entry: GuideEntry }
  | { kind: "handoff" }
  | { kind: "privacy" }
  | { kind: "empty" };

// Questions that look like they contain secrets or student records are stopped before matching.
const PRIVATE_PATTERNS: RegExp[] = [
  /\bmy password is\b/i,
  /\bpassword\s*[:=]/i,
  /\brecovery codes?\b/i,
  /\bbackup codes?\b/i,
  /\bssn\b|\bsocial security\b/i,
  /\bstudent id\s*(number)?\s*(is|:)?\s*\d/i,
  /\b\d{7,}\b/,
];

export function answerQuestion(raw: string): GuideResult {
  const question = raw.trim().toLowerCase();
  if (!question) return { kind: "empty" };
  if (PRIVATE_PATTERNS.some((p) => p.test(raw))) return { kind: "privacy" };

  let best: GuideEntry | null = null;
  let bestScore = 0;
  for (const entry of GUIDE) {
    const score = entry.keywords.reduce((n, k) => (question.includes(k) ? n + 1 : n), 0);
    if (score > bestScore) {
      best = entry;
      bestScore = score;
    }
  }
  return best ? { kind: "answer", entry: best } : { kind: "handoff" };
}
