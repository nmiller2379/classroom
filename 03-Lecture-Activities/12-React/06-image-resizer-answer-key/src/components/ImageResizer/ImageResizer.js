import React, { useRef, useState } from 'react';
import ImageDisplay from '../ImageDisplay/ImageDisplay';
import MeasureButton from '../MeasureButton/MeasureButton';
import DimensionsDisplay from '../DimensionsDisplay/DimensionsDisplay';
import ResizeForm from '../ResizeForm/ResizeForm';

const ImageResizer = () => {
    const imageRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 300, height: 200 });
    const [measuredDimensions, setMeasuredDimensions] = useState({ width: 0, height: 0 });

    const measureDimensions = () => {
        if (imageRef.current) {
            setMeasuredDimensions({
                // The clientWidth and clientHeight properties are read-only properties on an element. They provide the interior dimensions of the element, including padding but not the border, margin, or vertical scrollbar (if present). These are standard parts of the DOM API, which means they are available on any element that is part of the HTML document object model. Here we access them as a property on current object because current is a reference to the DOM element.   
                width: imageRef.current.clientWidth,
                height: imageRef.current.clientHeight,
            });
        }
    };

    const resizeImage = (width, height) => {
        setDimensions({ width, height });
    };

    return (
        <div style={{ padding: '20px' }}>
            <ImageDisplay ref={imageRef} width={dimensions.width} height={dimensions.height} />
            <ResizeForm onResize={resizeImage} />
            <MeasureButton onClick={measureDimensions} />
            <DimensionsDisplay width={measuredDimensions.width} height={measuredDimensions.height} />
        </div>
    );
};

export default ImageResizer;
