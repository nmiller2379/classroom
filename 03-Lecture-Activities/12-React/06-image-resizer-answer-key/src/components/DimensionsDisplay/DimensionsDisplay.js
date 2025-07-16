import React from 'react';

const DimensionsDisplay = ({ width, height }) => (
  <div style={{ textAlign: 'center' }}>
    <p>Width: {width}px</p>
    <p>Height: {height}px</p>
  </div>
);

export default DimensionsDisplay;
