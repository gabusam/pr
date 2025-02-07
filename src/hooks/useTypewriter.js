import { useState, useEffect } from 'react';

export function useTypewriter(phrases, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let timeout;

    const currentPhrase = phrases[phraseIndex];
    const shouldType = !isDeleting && text !== currentPhrase;
    const shouldDelete = isDeleting && text !== '';

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (shouldType) {
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (shouldDelete) {
      timeout = setTimeout(() => {
        setText(text.slice(0, -1));
      }, deletingSpeed);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setPhraseIndex((current) => (current + 1) % phrases.length);
    } else if (!isDeleting && text === currentPhrase) {
      setIsWaiting(true);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, isWaiting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}