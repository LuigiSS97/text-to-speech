import { controls } from "../../lib/useSpeech";

interface ReadingControlsProps {
  controls: controls;
  isPlaying: boolean;
}

export const ReadingControls = ({
  controls,
  isPlaying,
}: ReadingControlsProps) => {
  const { play, pause, cancel } = controls;

  return (
    <div className="reading-controls">
      {isPlaying ? (
        <button onClick={pause}>Stop</button>
      ) : (
        <button onClick={play}>Play</button>
      )}

      <button onClick={cancel} className="cancel">
        Cancel
      </button>
    </div>
  );
};
