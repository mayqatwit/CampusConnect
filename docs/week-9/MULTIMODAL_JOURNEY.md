# Lab09 Multimodal Journey Evidence
Branch: feature/week-9-multimodal-integration
## Journey A — Supported
- Input method used: text
- RAG answer observed: Reset your campus password through the approved self-service password portal. If you are locked out or the portal does not recognize you, contact the IT Service Desk. Staff will never ask for your current password or recovery codes.
- Citation or source observed: Approved guide: Password resets
- Voice behavior: Not able to test due to browser safety guardrails
- Video remained optional: yes
## Journey B — Unsupported
- Question used: Thanksgiving dining hall hours
- Abstention or human next step observed: The IT Service Desk handles campus technology problems. Open a ticket through the approved support portal or visit the desk in person. Confirm current hours on the official IT page before you go.
- Text fallback worked with video muted/skipped: yes
## Traceability
- Requirement: one optional multimodal CampusConnect journey
- Files changed: campusconnect-web/ (all files in here)
- Known limitation: Voice has trouble with some browsers (firefox)
## Pull Request Information
Link: https://github.com/mayqatwit/CampusConnect/pull/5
Reviewer name: Andrew Giacalone
Review decision: Mostly good, just needs work with the voice integration with Firefox.
