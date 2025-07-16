import React, { forwardRef } from 'react';
import airplane from "../../assets/airplane7.jpg"

const ImageDisplay = forwardRef(({ width, height }, ref) => (
    <img
        ref={ref}
        src={airplane}
        alt="Placeholder"
        style={{ display: 'block', margin: '0 auto', width: `${width}px`, height: `${height}px` }}
    />
));

export default ImageDisplay;
