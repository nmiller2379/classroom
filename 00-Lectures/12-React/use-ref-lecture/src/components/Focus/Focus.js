import React, { useRef } from 'react'

export default function Focus() {
    const inputRef = useRef(null);

    const focusInput = () => {
      inputRef.current.focus();
    };
  
    return (
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    );
}

