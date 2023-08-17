// Implement a component that provides basic UI options such as playing, pausing and loading new content
interface controlsProps {
  utterance: string;
}

export const Controls = ({ utterance }: controlsProps) => {
  return (
    <div>
      {utterance !== "playing" ? <button>Play</button> : <button>stop </button>}
    </div>
  );
};
