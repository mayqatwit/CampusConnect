import { createFileRoute } from "@tanstack/react-router";
import { TextAsk } from "@/components/campus/TextAsk";
import { VoiceCard } from "@/components/campus/VoiceCard";
import { VideoCard } from "@/components/campus/VideoCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CampusConnect Multimodal Help" },
      {
        name: "description",
        content:
          "Ask CampusConnect about password resets, campus Wi-Fi, or the IT Service Desk by text or voice, or watch a short orientation.",
      },
      { property: "og:title", content: "CampusConnect Multimodal Help" },
      {
        property: "og:description",
        content: "Approved campus IT help by text, voice, or video, with a human when the guide can't answer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <header className="mx-auto max-w-5xl px-5 pb-6 pt-12 sm:pt-16">
        <p className="eyebrow">CampusConnect · IT help</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
          CampusConnect Multimodal Help
        </h1>
      </header>

      <main id="main" className="mx-auto max-w-5xl space-y-6 px-5 pb-16">
        <TextAsk />
        <div className="grid items-start gap-6 md:grid-cols-2">
          <VoiceCard />
          <VideoCard />
        </div>
        <p role="note" className="fallback">
          If voice or video is unavailable, type your question. Unsupported questions are referred to
          a human.
        </p>
      </main>
    </div>
  );
}
