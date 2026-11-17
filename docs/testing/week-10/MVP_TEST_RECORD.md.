# Week 10 MVP Test, CI, and Freeze
Student: Quentyn May
Date: 11/16/26
Branch: release/week-10-rc1
Local URL: http://127.0.0.1:7860
Environment: Firefox on Ubuntu 24.04.5
## 1. Six-test MVP record
| # | Quality area | Action and expected result | Observed evidence | Result |
|---|---|---|---|---|
| 1 | Supported retrieval | Ask: "How do I reset my CampusConnect password?" The answer uses
the approved password-reset passage. | Approved guide: Password resets | PASS |
| 2 | Citation support | Open the displayed source from Test 1. At least one important answer
claim is directly supported by the source passage. | The agent supported the password reset workflow closely | PASS |
| 3 | Unsupported query | Ask: "What are the Thanksgiving dining hall hours?" The system
states its IT-support limit and does not invent hours, a source, phone number, or office. |
The IT Service Desk handles campus technology problems. Open a ticket through the approved support portal or visit the desk in person. Confirm current hours on the official IT page before you go. | PASS |
| 4 | Voice and text fallback | Use the supported answer. If voice works, its meaning matches
the visible grounded answer. If voice is unavailable, the text, source, and a clear Continue
in text or retry path remain. | Voice unavailable, text answer was unchanged and still correct | PASS |
| 5 | Video accessibility | Mute the tab and skip the video. AI disclosure and transcript
remain visible, and the chatbot is reachable by keyboard. | AI-generated presenter — not a live staff member. | PASS |
| 6 | Latency and recovery | Time one supported question. Class target: grounded text in 5
seconds or less. If slower, the question is preserved and progress, retry, or text fallback is
clear. | The grounded response was returned in much less than 1 second, almost instantly | PASS |
## 2. Lighthouse and manual accessibility evidence
Performance score: 100
Accessibility score: 100
One important Lighthouse finding or "none listed": Render-blocking requests
Keyboard plus muted-video result: Keyboard has proper accessibility access
## 3. Defect decision and retest
Highest-severity finding: NONE
Severity: NONE
Smallest repair made: No repair required
Focused retest result: N/A
## 4. Release gate
Release decision: GO
Decision reason: No issues were present in the Lighthouse report, page performance was very good. 
GitHub Actions run: <PASTE RUN URL>
Release tag if GO: v0.9.0-rc1
## 5. Engineering and AI Use Log
What I tested myself: Accessibility features with keyboard
What remained human-reviewed rather than automated: Visuals on the page itself
Known limitation carried into Week 11 Red Teaming: Voice action still unsupported
