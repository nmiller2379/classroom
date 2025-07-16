import Heater1 from "../assets/sounds/Heater-1.mp3";
import Heater2 from "../assets/sounds/Heater-2.mp3";
import Heater3 from "../assets/sounds/Heater-3.mp3";
import Heater4 from "../assets/sounds/Heater-4_1.mp3";
import Chord from "../assets/sounds/Chord_1.mp3";
import OpenHh from "../assets/sounds/Bld_H1.mp3";
import KickNHat from "../assets/sounds/Kick_n_Hat.mp3"
import Kick from "../assets/sounds/punchy_kick_1.mp3"
import ClosedHh from "../assets/sounds/punchy_kick_1.mp3"


const drumPads = [
    { keyTrigger: 'Q', id: 'Heater-1', url: Heater1 },
    { keyTrigger: 'W', id: 'Heater-2', url: Heater2 },
    { keyTrigger: 'E', id: 'Heater-3', url: Heater3 },
    { keyTrigger: 'A', id: 'Heater-4', url: Heater4 },
    { keyTrigger: 'S', id: 'Chord', url: Chord },
    { keyTrigger: 'D', id: 'Open-HH', url: OpenHh },
    { keyTrigger: 'Z', id: 'Kick-n-Hat', url: KickNHat },
    { keyTrigger: 'X', id: 'Kick', url: Kick },
    { keyTrigger: 'C', id: 'Closed-HH', url: ClosedHh },
  ];

export default drumPads