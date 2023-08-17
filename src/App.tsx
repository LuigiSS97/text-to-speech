import { useEffect, useState } from "react";
import "./App.css";

import { Controls } from "./components/Controls";
import { CurrentlyReading } from "./components/CurrentlyReading";
import { fetchContent, parseContentIntoSentences } from "./lib/content";

function App() {
  const [sentences, setSentences] = useState<Array<string>>([]);
  // const { currentWord, currentSentence, controls } = useSpeech(sentences);

  useEffect(() => {
    const fetchData = async () => {
      await fetchContent();
    };
    const response = fetchData();
    const parsedResponse = parseContentIntoSentences(response.toString());
    setSentences(parsedResponse);
  }, []);

  return (
    <div className="App">
      <h1>Text to speech</h1>
      <div>
        <CurrentlyReading currentSentence={"This is a sentence"} />
      </div>
      <div>
        <Controls utterance={""} />
      </div>
    </div>
  );
}

export default App;
