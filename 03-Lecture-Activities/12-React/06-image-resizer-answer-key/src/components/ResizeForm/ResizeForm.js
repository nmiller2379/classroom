import React, { useState } from 'react';

const ResizeForm = ({ onResize }) => {
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    const handleResize = () => {
        const parsedWidth = parseInt(width, 10);
        console.log(parsedWidth)
        const parsedHeight = parseInt(height, 10);

        onResize(parsedWidth, parsedHeight);
        
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <input
                type="number"
                placeholder="Width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                style={{ marginRight: '10px' }}
            />
            <input
                type="number"
                placeholder="Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            />
            <button onClick={handleResize} style={{ display: 'block', margin: '20px auto' }}>
                Resize Image
            </button>
        </div>
    );
};

export default ResizeForm;
