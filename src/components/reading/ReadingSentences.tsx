interface ReadingSentencesProps {
  sentences: string[];
  currentWord: string;
}

export const ReadingSentences = ({
  sentences,
  currentWord,
}: ReadingSentencesProps) => {
  return (
    <div>
      {sentences.map((sentence) => {
        const isCurrentSentence =
          sentence.includes(currentWord) && "currentword";

        return <p className={isCurrentSentence as string}>{sentence}</p>;
      })}
    </div>
  );
};
