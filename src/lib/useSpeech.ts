import { useEffect, useState } from "react";
import {
  PlayingState,
  SpeechEngine,
  SpeechEngineOptions,
  createSpeechEngine,
} from "./speech";

export type SpeechHookResult = {
  isPlaying: boolean;
  currentWord: string;
  currentSentence: string;
  controls: controls;
};

export type controls = {
  play: () => void;
  pause: () => void;
  cancel: () => void;
};

const useSpeech = (sentences: string[]): SpeechHookResult => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWord, setCurrentWord] = useState("");
  const [currentSentence, setCurrentSentence] = useState("");

  const speechOptions: SpeechEngineOptions = {
    // the onBoundary callback watches the word limits through the speech engine progress
    onBoundary: (event) => {
      const currentSentence = sentences[currentIndex];
      const wordBoundaryIndex = event.charIndex;
      const currentWord = currentSentence.substring(0, wordBoundaryIndex);

      setCurrentWord(currentWord);
    },
    // this callback is triggered when the speech engine reaches the end of the sentence
    onEnd: () => {
      if (currentIndex + 1 < sentences.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsPlaying(false);
        setCurrentWord("");
        setCurrentSentence("");
      }
    },
    // this callback updates the state property acodingly to the speech engine progress
    onStateUpdate: (state: PlayingState) => {
      if (state === "playing") {
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    },
  };

  const speechEngine: SpeechEngine = createSpeechEngine(speechOptions);

  // The useEffect loads the sentences from the api request
  useEffect(() => {
    setCurrentSentence(sentences[currentIndex]);
    speechEngine.load(sentences[currentIndex]);
  }, [currentIndex, sentences, speechEngine]);

  const play = () => {
    speechEngine.play();
  };

  const pause = () => {
    speechEngine.pause();
  };

  const cancel = () => {
    speechEngine.cancel();
  };

  const controls = {
    play,
    pause,
    cancel,
  };

  return { controls, isPlaying, currentWord, currentSentence };
};

export { useSpeech };
