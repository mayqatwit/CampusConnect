# CampusConnect Requirements Specification v1
Status: Draft — Week 3
Student: Quentyn May
Branch: docs/week-3-requirements-ai
## 1. Problem statement
Students who need IT Support information need a reliable way to find the correct
next step because the current experience may be scattered, difficult to search, or
hard to verify as current.
## 2. Evidence carried forward from Week 2
- E-01: "The date of the portal and public page do not match"
- E-02: "More personalized pages feel more helpful"
- A-01: Users are not looking at the correct page when looking for information
## 3. One user journey inside the MVP
A student asks one typed IT Support question. CampusConnect searches only approved
IT Support material, returns a short answer with a visible source, or says the
available sources do not support an answer.
## 4. Four requirements
- FR-01 — The system shall accept one typed IT Support question.
- GR-01 — Every factual answer shall identify the approved source used.
- SF-01 — If approved sources are insufficient, the system shall not invent an
answer and shall provide a helpful IT Support next step.
- NFR-01 — A keyboard user shall be able to submit a question and read the result.
## 5. MVP boundary
IN: one typed question, approved IT Support material, one grounded answer, visible
source, safe failure, and helpful next step.
OUT: password resets, ticket creation, personal student records, voice, automatic
actions, and answers from unapproved material.
## 6. AI critique and human decision
- ChatGPT suggestion: GR-01
The requirement does not define what makes a source “approved” or how source identification must appear to the student.
Without a testable definition, grounding and safe-failure behavior cannot be consistently verified (ASSUMPTION).
Smallest testable revision: Define “approved source” as material explicitly included in the MVP source set, and require every factual answer to display that source’s name or link.
- Claude suggestion: SF-01 (with GR-01 and Section 3)
SF-01 has no testable trigger: "approved sources are insufficient" and "helpful IT Support next step" are undefined, and Section 3 says "approved IT Support material" without saying what that is or where it comes from. That means no one can tell when the system should answer versus abstain, and the E-01 "dates do not match" evidence is not tied to any requirement about currency.
Safe failure is the core promise of the MVP, and if the abstain condition and the next step cannot be checked, then a pass or fail on grounding (GR-01) and on Week 4 local-versus-hosted comparisons will come down to opinion instead of a repeatable test.
RECOMMENDATION: Add a pass/fail sentence to SF-01, such as "Given a question with no matching passage in the approved-source list, the response states the sources do not support an answer and names one specific IT Support contact or page," and list the approved sources by name in Section 3 (ASSUMPTION: you have that list from Week 2, and I have not seen it, so please do not let me invent one).
- My decision: Accepted
- My reason: Claude makes a good point about defining triggers and desired behaviors in certain situations. Knowing what and where information should be coming from is vital.
