# Week 4 LM Studio RAG Results
Name: Quentyn May
Model: IBM Granite 4.0 H Tiny Q4_K_M
Documents: campusconnect wifi help.txt, campusconnect password help.txt
## Supported question
Result: PASS
Observation: Granite used campusconnect wifi help.txt as a source and correctly told the user to provide the device type, error message, and the time of the error
## Unsupported question
Result: PASS
Observation: Granite correctly identified that the documents did not contain any information on the topic.
## Action request
Result: PASS
Observation: Granite correctly let the user know it was unable to reset the password itself, and referenced campusconnect password help.txt to tell the user to visit the Help Desk for help.
## Architecture lesson
The local LLM route worked well when it had access to the information it needed. It needs human help
when didn't have sufficient evidence of any answers.
