import { lazy, Suspense } from "react";
import { ClientOnly } from "@tanstack/react-router";

// Voice SDK touches browser audio APIs, so it loads only in the browser.
const VoiceCall = lazy(() => import("./VoiceCall"));

export function VoiceCard() {
  const fallback = <p className="text-sm text-muted-foreground">Loading voice assistant…</p>;
  return (
    <section aria-labelledby="voice-heading" className="panel">
      <h2 id="voice-heading" className="font-display text-xl font-semibold">
        Ask by voice
      </h2>
      <p className="mt-2 text-muted-foreground">
        Talk with the CampusConnect voice assistant. Nothing plays until you start a call, and your
        browser will ask before using the microphone.
      </p>
      <div className="widget-slot mt-4">
        <ClientOnly fallback={fallback}>
          <Suspense fallback={fallback}>
            <VoiceCall />
          </Suspense>
        </ClientOnly>
      </div>
    </section>
  );
}
