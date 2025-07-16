// src/components/DrumMachine.js
import React, { useState } from 'react';
import DrumPad from '../DrumPad/DrumPad';
import drumPads from '../../data/data';



const DrumMachine = () => {
  const [display, setDisplay] = useState('');

  const handlePlay = (keyTrigger, audioRef) => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    const pad = drumPads.find(p => p.keyTrigger === keyTrigger);
    setDisplay(pad.id);
  };

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="pad-bank">
        {drumPads.map((pad) => (
          <DrumPad
            key={pad.keyTrigger}
            keyTrigger={pad.keyTrigger}
            id={pad.id}
            url={pad.url}
            handlePlay={handlePlay}
          />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
