import React from 'react';

const MeasureButton = ({ onClick }) => (
  <button onClick={onClick} style={{ display: 'block', margin: '20px auto' }}>
    Measure Image Dimensions
  </button>
);

export default MeasureButton;
