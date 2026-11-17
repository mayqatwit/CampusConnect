import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { focusTextQuestion } from "./TextAsk";

const HEYGEN_EMBED = "https://app.heygen.com/embeds/9a9fc2af7bc041faa925f431591e7de4";
const TRANSCRIPT_SOURCE =
  "https://github.com/mayqatwit/CampusConnect/blob/feature/week-8-avatar-prototype/docs/prototypes/week-%208/VIDEO_VALIDATION.md";

const TRANSCRIPT =
  "Hello. I am an AI-generated CampusConnect presenter, not a live staff member. You can use CampusConnect for approved campus IT help. Ask about password resets, secure campus Wi-Fi, or the IT Service Desk. Please do not share passwords, recovery codes, student records, or other private information. If the chatbot cannot support an answer from its approved guide, it will direct you to a human. This video is a prerecorded introduction. You can read the same script in our GitHub project.";

export function VideoCard() {
  const [loaded, setLoaded] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <section aria-labelledby="video-heading" className="panel">
      <h2 id="video-heading" className="font-display text-xl font-semibold">
        Watch the orientation
      </h2>
      <p className="mt-2 text-muted-foreground">A 30-second prerecorded introduction. It does not answer questions.</p>

      <div className="video-frame mt-4">
        {loaded ? (
          <iframe
            src={HEYGEN_EMBED}
            title="CampusConnect AI presenter orientation video"
            allow="encrypted-media; fullscreen"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <button type="button" className="video-poster" onClick={() => setLoaded(true)}>
            <span className="video-poster-icon" aria-hidden="true">
              <Play />
            </span>
            <span className="font-semibold">Load orientation video</span>
            <span className="text-sm opacity-80">0:30 · captions available in the player</span>
          </button>
        )}
      </div>
      <p className="disclosure mt-3">AI-generated presenter — not a live staff member.</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button type="button" variant="outline" onClick={focusTextQuestion}>
          Use text instead
        </Button>
        <Button
          type="button"
          variant="outline"
          aria-expanded={showTranscript}
          aria-controls="video-transcript"
          onClick={() => setShowTranscript((v) => !v)}
        >
          {showTranscript ? "Hide video transcript" : "Read video transcript"}
        </Button>
      </div>

      {showTranscript && (
        <div id="video-transcript" className="transcript mt-4" role="region" aria-label="Video transcript">
          <p>
            <span className="font-semibold">0:00</span> {TRANSCRIPT}
          </p>
          <p className="mt-3 text-sm">
            <a href={TRANSCRIPT_SOURCE} target="_blank" rel="noreferrer" className="text-link">
              View the same script on GitHub
            </a>
          </p>
        </div>
      )}
    </section>
  );
}
