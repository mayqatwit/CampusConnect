import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { GUIDE, GUIDE_STATUS, answerQuestion, type GuideResult } from "@/lib/campus-guide";

export const ASK_INPUT_ID = "ask-question";

export function TextAsk() {
  const [question, setQuestion] = useState("");
  const [asked, setAsked] = useState("");
  const [result, setResult] = useState<GuideResult | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setAsked(question.trim());
    setResult(answerQuestion(question));
  }

  return (
    <section aria-labelledby="ask-heading" className="panel panel-primary">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="ask-heading" className="font-display text-2xl font-semibold">
          Ask a question
        </h2>
        <span className="tag">Primary path · text</span>
      </div>
      <p className="mt-2 text-muted-foreground">
        Answers come only from the approved CampusConnect IT guide: password resets, secure campus
        Wi-Fi, and the IT Service Desk.
      </p>

      <form onSubmit={onSubmit} className="mt-5 space-y-3">
        <label htmlFor={ASK_INPUT_ID} className="block font-semibold">
          Your question
        </label>
        <textarea
          id={ASK_INPUT_ID}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={3}
          aria-describedby="ask-privacy"
          placeholder="e.g. How do I reset my campus password?"
          className="field"
        />
        <p id="ask-privacy" className="text-sm text-muted-foreground">
          Do not share passwords, recovery codes, student records, or other private information.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button type="submit" size="lg" disabled={!question.trim()}>
            Ask CampusConnect
          </Button>
          {GUIDE.map((g) => (
            <Button
              key={g.id}
              type="button"
              variant="outline"
              size="lg"
              onClick={() => {
                const q = `Help with ${g.title.toLowerCase()}`;
                setQuestion(q);
                setAsked(q);
                setResult(answerQuestion(q));
              }}
            >
              {g.title}
            </Button>
          ))}
        </div>
      </form>

      <div aria-live="polite" className="mt-6">
        {result && result.kind !== "empty" && (
          <div className="answer">
            <p className="text-sm text-muted-foreground">
              You asked: <span className="text-foreground">“{asked}”</span>
            </p>
            {result.kind === "answer" && (
              <>
                <h3 className="mt-2 font-display text-xl font-semibold">{result.entry.title}</h3>
                <p className="mt-2 leading-relaxed">{result.entry.guidance}</p>
                <dl className="source-meta mt-4">
                  <div>
                    <dt>Source</dt>
                    <dd>Approved guide: {result.entry.title}</dd>
                  </div>
                  <div>
                    <dt>Owner</dt>
                    <dd>{result.entry.owner}</dd>
                  </div>
                  <div>
                    <dt>Reviewed</dt>
                    <dd>{result.entry.reviewed}</dd>
                  </div>
                </dl>
                <p className="mt-3 text-sm text-muted-foreground">{GUIDE_STATUS}.</p>
              </>
            )}
            {result.kind === "handoff" && (
              <>
                <h3 className="mt-2 font-display text-xl font-semibold">Referred to a human</h3>
                <p className="mt-2 leading-relaxed">
                  The approved guide doesn’t cover this question, so CampusConnect won’t guess.
                  Please contact the IT Service Desk, and a staff member will help you.
                </p>
              </>
            )}
            {result.kind === "privacy" && (
              <>
                <h3 className="mt-2 font-display text-xl font-semibold">Please remove private details</h3>
                <p className="mt-2 leading-relaxed">
                  Your question looks like it includes a password, recovery code, or ID number.
                  Nothing was looked up. Remove the private details and ask again, or contact the
                  IT Service Desk directly.
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export function focusTextQuestion() {
  const el = document.getElementById(ASK_INPUT_ID);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  el.focus({ preventScroll: true });
}
