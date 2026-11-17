import { describe, expect, it } from "vitest";
import { answerQuestion } from "./campus-guide";

describe("CampusConnect approved guide", () => {
  it("answers a supported Wi-Fi question from the Wi-Fi entry with an owner", () => {
    const r = answerQuestion("How do I connect to campus wifi?");
    expect(r.kind).toBe("answer");
    if (r.kind === "answer") {
      expect(r.entry.id).toBe("campus-wifi");
      expect(r.entry.owner).toBe("Network Services example");
    }
  });

  it("answers a password reset question from the password entry", () => {
    const r = answerQuestion("I forgot my password");
    expect(r.kind === "answer" && r.entry.id).toBe("password-reset");
  });

  it("refers unsupported questions to a human", () => {
    expect(answerQuestion("When is the add/drop deadline?").kind).toBe("handoff");
  });

  it("stops questions that include a password or recovery code", () => {
    expect(answerQuestion("My password is Tiger123, can you reset it?").kind).toBe("privacy");
    expect(answerQuestion("Here are my recovery codes").kind).toBe("privacy");
  });

  it("stops questions that include a long ID number", () => {
    expect(answerQuestion("My student id is 20231234, help with wifi").kind).toBe("privacy");
  });
});
