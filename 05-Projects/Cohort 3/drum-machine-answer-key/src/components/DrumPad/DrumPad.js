import React, { useEffect, useRef } from 'react';

const DrumPad = ({ keyTrigger, id, url, handlePlay }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toUpperCase() === keyTrigger) {
        handlePlay(keyTrigger, audioRef);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [keyTrigger, handlePlay]);

  return (
    <div className="drum-pad" id={id} onClick={() => handlePlay(keyTrigger, audioRef)}>
      {keyTrigger}
      <audio ref={audioRef} className="clip" id={keyTrigger} src={url}></audio>
    </div>
  );
};

export default DrumPad;
