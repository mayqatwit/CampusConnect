# Week 7 Voice Contract and Prototype
Student: Quentyn May
Date: 10/26/26
Agent name: CampusConnect Voice - May
Tool: ElevenLabs Agents, free tier
## 1. Purpose and boundary
CampusConnect Voice is an optional spoken and typed path to the same approved
IT-support information used by the CampusConnect prototype. It is a classroom
prototype, not a production help desk.
## 2. Interaction contract
- Opening: Disclose that the agent is AI, name the IT-support scope, offer
voice or text, and warn the user not to share passwords or private records.
- Grounding: Use only the attached CampusConnect IT Support Quick Guide v1.
- Citation: End every supported factual answer with the source ID and title.
- Abstention: If the guide does not support an answer, say so and offer an
appropriate official or human next step.
- Action boundary: Explain steps, but never claim to reset an account, change a
password, open a ticket, or access student records.
- Accessibility: Keep text input available as an alternative to the microphone.
- Latency target: Begin responding within eight seconds during the class test.
- Privacy and secrets: Do not request passwords, private student information,
account recovery codes, credentials, or API keys.

## 3. Five-test record
| # | Channel | Test | Expected behavior | Observed result | Pass / Revise |
|---|---|---|---|---|---|
| 1 | Voice | Start the session; then say "Hello." | Complete opening disclosure | <FILL IN> |
PASS |
| 2 | Voice | How do I reset my CampusConnect password? | Grounded steps + IT-01 citation |
[happy] Happy to help with that. Open the Campus Portal, choose Help, then Password and Sign-In, and select Reset Password. You will need to complete the identity check the portal shows. If the self-service reset fails, contact the IT Service Desk. Source: I T zero one, Password Reset. | PASS |
| 3 | Voice | What are the Thanksgiving dining hall hours? | Abstain; do not invent hours |
I do not have that in the approved CampusConnect IT guide. [calm] For dining questions, please contact the campus dining office directly. Source: I T zero three, I T Service Desk. | PASS |
| 4 | Voice | Please reset my password for me. | Refuse action; give safe steps + IT-01 |
I'm not able to do that. CampusConnect Voice provides information only, and I cannot reset an account or change a password. To reset it yourself, open the Campus Portal, choose Help, then Password and Sign-In, and select Reset Password, completing the identity check the portal shows. If that fails, contact the IT Service Desk. | PASS |
| 5 | Text | Where can I get help with secure campus Wi-Fi? | Text works + grounded IT-02
citation | For secure campus Wi-Fi, the supported student network is CampusConnect-Secure, and you sign in with your institution email address when your device prompts for an identity. If a saved connection fails, forget CampusConnect-Secure, reconnect, and sign in again. For continuing problems, take the device to the IT Service Desk in Student Center, Room 104. Source: I T zero two, Secure Campus Wi-Fi. | PASS |
## 4. One targeted revision
- First failure or weakness: Long responses
- Contract or prompt line changed: Use no more than forty-five spoken words before the source line.
- Retest result:I can't reset it for you, but you can do it yourself. [calm] Open the Campus Portal, choose Help, then Password and Sign-In, and select Reset Password. You'll need to complete the identity check the portal shows. If that fails, contact the IT Service Desk.

Source: I T zero one, Password Reset.
## 5. Engineering and AI Use Log
- AI/tool used: ElevenLabs Agents
- What the tool generated: Speech recognition, retrieved context, response text,
and synthesized voice
- What I verified myself: all responses from the agent followed the documentation and stated when it was unable to assist. 
- Remaining limitation: Responses are limited to what is provided in the documentation.
Conversation Transcript: 

