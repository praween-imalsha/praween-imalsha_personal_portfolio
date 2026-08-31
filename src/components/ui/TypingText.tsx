import React, { useEffect, useState } from 'react';

interface TypingTextProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
  className?: string;
}

export function TypingText({
  words,
  typeSpeed = 70,
  deleteSpeed = 35,
  pauseMs = 1600,
  className = ''
}: TypingTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setText(words[0]);
      return;
    }

    const current = words[wordIndex % words.length];

    if (!isDeleting && text === current) {
      const hold = window.setTimeout(() => setIsDeleting(true), pauseMs);
      return () => window.clearTimeout(hold);
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const tick = window.setTimeout(
      () => {
        setText((prev) =>
        isDeleting ?
        current.slice(0, prev.length - 1) :
        current.slice(0, prev.length + 1)
        );
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => window.clearTimeout(tick);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs]);

  return (
    <span className={className}>
      <span aria-live="polite">{text}</span>
      <span
        aria-hidden="true"
        className="animate-caret inline-block w-[2px] translate-y-[2px] self-stretch bg-accent ml-1 h-[1em] align-middle" />
      
    </span>);

}