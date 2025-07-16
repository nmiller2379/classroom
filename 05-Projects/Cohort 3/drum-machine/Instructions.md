# Drum Machine Project User Stories
Working in a copy of your `basic-react-template`, build this project and fulfill the following user stories. HINT: There is some data for you to use included with these instructions. The sound files you'll need are available on the drive in `SupplementalResources/DrumMachineSounds`.

## User Stories

1. **User Story #1**: I should be able to see an outer container with a corresponding `id="drum-machine"` that contains all other elements.

2. **User Story #2**: Within `#drum-machine` I can see an element with a corresponding `id="display"`.

3. **User Story #3**: Within `#drum-machine` I can see 9 clickable drum pad elements, each with a class name of `drum-pad`, a unique `id` that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`. The drum pads must be in this order.

4. **User Story #4**: Within each `.drum-pad`, there should be an HTML5 `audio` element which has a `src` attribute pointing to an audio clip, a class name of `clip`, and an `id` corresponding to the inner text of its parent `.drum-pad` (e.g. `id="Q"`, `id="W"`, `id="E"` etc.).

5. **User Story #5**: When I click on a `.drum-pad` element, the audio clip contained in its child `audio` element should be triggered.

6. **User Story #6**: When I press the trigger key associated with each `.drum-pad`, the audio clip contained in its child `audio` element should be triggered (e.g. pressing the `Q` key should trigger the drum pad which contains the string `Q`, pressing the `W` key should trigger the drum pad which contains the string `W`, etc.).

7. **User Story #7**: When a `.drum-pad` is triggered, a string describing the associated audio clip is displayed as the inner text of the `#display` element (each string must be unique).

## Acceptance Criteria
Created a zipped version of your project without `node_modules` and submit it in your toGrade folder by EOD on Wednesday, June 26. Happy hacking!
