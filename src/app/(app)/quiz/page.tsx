"use client";

import { useState } from "react";
import { Star, X, Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { quizQuestions } from "@/data/quiz";

export default function QuizPage() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[index];
  const isLast = index === quizQuestions.length - 1;

  function choose(i: number) {
    if (revealed) return;
    setSelected(i);
  }

  function handleNext() {
    if (!revealed) {
      setRevealed(true);
      if (selected === question.answerIndex) setScore((s) => s + 1);
      return;
    }
    if (isLast) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setRevealed(false);
  }

  function handleSkip() {
    if (isLast) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setRevealed(false);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="mx-auto max-w-lg text-center">
        <Card className="p-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-[#8a6d2e]">
            <Star className="h-7 w-7" strokeWidth={1.75} />
          </div>
          <h1 className="mt-4 font-display text-2xl font-semibold text-ink">Quiz complete!</h1>
          <p className="mt-2 text-sm text-muted">
            You scored {score} out of {quizQuestions.length}.
          </p>
          <p className="mt-1 text-sm text-forest font-medium">+{score * 10} XP earned</p>
          <Button className="mt-6" onClick={restart}>
            Try Again
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <div>
        <div className="flex items-center justify-between text-sm text-muted">
          <span>
            Question {index + 1} of {quizQuestions.length}
          </span>
          <span className="inline-flex items-center gap-1 font-medium text-forest">
            <Star className="h-3.5 w-3.5" /> {score * 10} XP
          </span>
        </div>
        <div className="mt-2">
          <ProgressBar value={((index + (revealed ? 1 : 0)) / quizQuestions.length) * 100} />
        </div>
      </div>

      <Card className="p-6">
        <h1 className="font-display text-xl font-semibold text-ink">{question.question}</h1>

        <div className="mt-5 space-y-2.5">
          {question.options.map((opt, i) => {
            const isSelected = selected === i;
            const isCorrect = i === question.answerIndex;
            let stateClasses = "border-border hover:border-forest/40";
            if (revealed) {
              if (isCorrect) stateClasses = "border-forest bg-forest/5";
              else if (isSelected && !isCorrect) stateClasses = "border-red-300 bg-red-50";
            } else if (isSelected) {
              stateClasses = "border-forest bg-forest/5";
            }

            return (
              <button
                key={opt}
                onClick={() => choose(i)}
                className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left text-sm font-medium text-ink transition-colors ${stateClasses}`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                      isSelected || (revealed && isCorrect)
                        ? "border-forest bg-forest"
                        : "border-border"
                    }`}
                  >
                    {(isSelected || (revealed && isCorrect)) && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </span>
                  {opt}
                </span>
                {revealed && isCorrect && <Check className="h-4 w-4 text-forest" />}
                {revealed && isSelected && !isCorrect && <X className="h-4 w-4 text-red-500" />}
              </button>
            );
          })}
        </div>
      </Card>

      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={handleSkip}>
          Skip
        </Button>
        <Button onClick={handleNext} disabled={selected === null && !revealed}>
          {revealed ? (isLast ? "Finish" : "Next") : "Check"}
        </Button>
      </div>
    </div>
  );
}
