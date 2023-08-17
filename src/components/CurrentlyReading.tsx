// Implement a component that displays the currently read word and sentence
interface CurrentlyReadingProps {
  currentSentence: string;
}

export const CurrentlyReading = ({
  currentSentence,
}: CurrentlyReadingProps) => {
  return <div className="currently-reading">{currentSentence}</div>;
};
