# Week 8 AI Presenter Prototype and Validation
Student: Quentyn May
Date: 11/02
Branch: feature/week-8-avatar-prototype
HeyGen project: CampusConnect AI Presenter Introduction
## Prototype hypothesis
A short AI presenter will help a new user understand the supported
IT topics, privacy boundary, and human fallback.
## Shared video
AI-generated presenter - not a live staff member.
This is a prerecorded introduction. It does not answer questions.
[Watch the CampusConnect presenter](https://app.heygen.com/videos/campusconnect-ai-presenter-introduction-9a9fc2af7bc041faa925f431591e7de4)
## Transcript
Hello. I am an AI-generated CampusConnect presenter, not a live staff member. You can use CampusConnect for approved campus IT help. Ask about password resets, secure campus Wi-Fi, or the IT Service Desk. Please do not share passwords, recovery codes, student records, or other private information. If the chatbot cannot support an answer from its approved guide, it will direct you to a human. This video is a prerecorded introduction. You can read the same script in our GitHub project.
## Five checks
1. AI disclosure, IT topics, privacy, and fallback: PASS
2. Full script and video duration: 30.6 seconds PASS
3. Captions on and readable: PASS
4. Muted video and GitHub transcript: PASS
5. Share link works without HeyGen sign-in: PASS
## Design decision
Decision: KEEP

Reason based on my checks: It was able to responsibly follow all requirements without any issues during generation.

One improvement for later: Add more scripts and give more features for people to interact with the presenter.
## Engineering and AI Use Log
AI tool used: HeyGen
What HeyGen generated: The video of the presenter

What I verified myself: The video followed all requirements like following the script, staying under 60s, with captions etc.

Remaining limitation: Not able to do much with the avatar itself, it can only speak in the videos. No hand gestures or anything.
