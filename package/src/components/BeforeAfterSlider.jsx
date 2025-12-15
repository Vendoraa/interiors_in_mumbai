import React, { useState, useRef, useEffect } from 'react';

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        const width = containerRect.width;

        let position = (x / width) * 100;
        position = Math.max(0, Math.min(100, position));

        setSliderPosition(position);
    };

    const handleTouchMove = (e) => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - containerRect.left;
        const width = containerRect.width;

        let position = (x / width) * 100;
        position = Math.max(0, Math.min(100, position));

        setSliderPosition(position);
    };

    useEffect(() => {
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="before-after-container"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            style={{
                position: 'relative',
                width: '100%',
                // Height is now auto to fit the image
                overflow: 'hidden',
                cursor: 'ew-resize',
                userSelect: 'none'
            }}
        >
            {/* After Image (Background Layer) */}
            <img
                src={afterImage}
                alt="After Transformation"
                style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto', // Maintain aspect ratio
                    pointerEvents: 'none'
                }}
            />

            {/* Before Image (Foreground Layer with clip-path) */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                    pointerEvents: 'none'
                }}
            >
                <img
                    src={beforeImage}
                    alt="Before Transformation"
                    style={{
                        display: 'block',
                        width: '100%',
                        height: '100%', // Match container height (which is set by the After image)
                        objectFit: 'cover' // Ensure it covers the same area
                    }}
                />
            </div>

            {/* Slider Handle */}
            <div
                className="slider-handle"
                onMouseDown={handleMouseDown}
                onTouchStart={() => setIsDragging(true)}
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: `${sliderPosition}%`,
                    width: '4px',
                    backgroundColor: '#fff',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    boxShadow: '0 0 10px rgba(0,0,0,0.5)'
                }}
            >
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
                }}>
                    <i className="fa fa-arrows-h" style={{ color: '#333' }}></i>
                </div>
            </div>

            {/* Labels */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                padding: '5px 10px',
                borderRadius: '4px',
                fontSize: '14px',
                zIndex: 5,
                pointerEvents: 'none'
            }}>Before</div>

            <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                padding: '5px 10px',
                borderRadius: '4px',
                fontSize: '14px',
                zIndex: 5,
                pointerEvents: 'none'
            }}>After</div>
        </div>
    );
};

export default BeforeAfterSlider;
