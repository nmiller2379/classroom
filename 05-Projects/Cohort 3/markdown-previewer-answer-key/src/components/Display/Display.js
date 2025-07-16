import React, { useState } from "react";
import Editor from "../Editor/Editor";
import Previewer from "../Previewer/Previewer";


export default function Display() {
  const [markdown, setMarkdown] =
    useState(`# Welcome to my React Markdown Previewer!

        ## This is a sub-heading...
        
        Here's some code, \`<div></div>\`, between 2 backticks.
        
        \`\`\`
        // this is multi-line code:
        
        function anotherExample(firstLine, lastLine) {
          if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
            return multiLineCode;
          }
        }
        \`\`\`
        
        You can also make text **bold**... whoa!
        Or _italic_.
        Or... wait for it... **_both!_**
        And feel free to go crazy ~~crossing stuff out~~.
        
        There's also [links](https://www.freecodecamp.com), and
        > Block Quotes!
        
        And if you want to get really crazy, even tables:
        
        Wild Header | Crazy Header | Another Header?
        ------------ | ------------- | -------------
        Your content can | be here, and it | can be here....
        And here. | Okay. | I think we get it.
        
        - And of course there are lists.
          - Some are bulleted.
             - With different indentation levels.
                - That look like this.
        
        
        1. And there are numbered lists too.
        1. Use just 1s if you want!
        1. But the list goes on...
        
        ![React Logo w/ Text](https://goo.gl/Umyytc)
        
        \`<div></div>\` with backticks\``);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <Editor markdown={markdown} handleChange={handleChange} />
      <Previewer markdown={markdown} />
    </div>
  );
}
