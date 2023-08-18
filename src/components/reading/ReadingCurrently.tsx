interface ReadingCurrentlyProps {
  currentSentence: string;
  currentWord: string;
}

export const ReadingCurrently = ({
  currentSentence,
}: ReadingCurrentlyProps) => {
  return <h2 className="currently-reading">{currentSentence}</h2>;
};
