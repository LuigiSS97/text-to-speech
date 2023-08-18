import { useEffect, useState } from "react";
import "./App.css";
import { fetchContent, parseContentIntoSentences } from "./lib/content";
import { useSpeech } from "./lib/useSpeech";
import SpeechRender from "./components/reading";

function App() {
  const [sentences, setSentences] = useState<Array<string>>([]);
  const { currentWord, isPlaying, currentSentence, controls } =
    useSpeech(sentences);

  useEffect(() => {
    const getSentences = async () => {
      const response = await fetchContent();

      const parsedResponse = parseContentIntoSentences(response.toString());
      setSentences(parsedResponse);
    };
    getSentences();
  }, []);

  return (
    <section className="App">
      <h1>Text to speech</h1>

      <SpeechRender.root>
        <SpeechRender.currentRead
          currentSentence={currentSentence}
          currentWord={currentWord}
        />
        <SpeechRender.sentences
          currentWord={currentWord}
          sentences={sentences}
        />
        <SpeechRender.controls controls={controls} isPlaying={isPlaying} />
      </SpeechRender.root>
    </section>
  );
}

export default App;
