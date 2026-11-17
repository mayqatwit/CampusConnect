import { useEffect, useState } from "react";
import { ConversationProvider, useConversation } from "@elevenlabs/react";
import { Mic, PhoneOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { focusTextQuestion } from "./TextAsk";

// Public agent ID (safe in the browser; no secret key is used).
const ELEVENLABS_AGENT_ID = "agent_6701m5x6e184fc4skvt9qybvbapd";

const UNAVAILABLE =
  "Voice is unavailable right now. A browser privacy setting, ad blocker, or network filter may be blocking it.";

function VoiceControls() {
  const [problem, setProblem] = useState<string | null>(null);
  const conversation = useConversation({
    onError: () => setProblem(UNAVAILABLE),
  });
  const { status, isSpeaking } = conversation;

  // If connecting hangs (blocked request), stop waiting and offer text.
  useEffect(() => {
    if (status !== "connecting") return;
    const t = window.setTimeout(() => {
      setProblem(UNAVAILABLE);
      conversation.endSession();
    }, 15000);
    return () => window.clearTimeout(t);
  }, [status, conversation]);

  async function start() {
    setProblem(null);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      setProblem("Microphone access was not allowed, so a voice call can’t start.");
      return;
    }
    try {
      conversation.startSession({ agentId: ELEVENLABS_AGENT_ID, connectionType: "websocket" });
    } catch {
      setProblem(UNAVAILABLE);
    }
  }

  const live = status === "connected";
  const statusText = problem
    ? problem
    : status === "connecting"
      ? "Connecting…"
      : live
        ? isSpeaking
          ? "Connected — the assistant is speaking."
          : "Connected — the assistant is listening."
        : "Not in a call.";

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {live || status === "connecting" ? (
          <Button type="button" size="lg" variant="destructive" onClick={() => conversation.endSession()}>
            <PhoneOff aria-hidden="true" />
            End voice call
          </Button>
        ) : (
          <Button type="button" size="lg" onClick={start}>
            <Mic aria-hidden="true" />
            Start voice call
          </Button>
        )}
      </div>
      <p role="status" aria-live="polite" className={problem ? "voice-status voice-status-problem" : "voice-status"}>
        {statusText}
      </p>
      {problem && (
        <Button type="button" variant="outline" className="mt-3" onClick={focusTextQuestion}>
          Use text instead
        </Button>
      )}
    </div>
  );
}

export default function VoiceCall() {
  return (
    <ConversationProvider>
      <VoiceControls />
    </ConversationProvider>
  );
}
