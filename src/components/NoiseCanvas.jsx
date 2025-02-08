import React, { useEffect, useRef } from 'react';

function NoiseCanvas({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    const drawNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const pixels = imageData.data;

      for (let i = 0; i < pixels.length; i += 4) {
        const value = Math.random() * 255; // Grayscale value
        pixels[i] = pixels[i + 1] = pixels[i + 2] = value; // R, G, B
        pixels[i + 3] = 20; // Alpha for subtle transparency
      }

      ctx.putImageData(imageData, 0, 0);
      requestAnimationFrame(drawNoise);
    };

    // Set up canvas size and noise drawing
    resizeCanvas();
    drawNoise();

    // Resize canvas on window resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    ></canvas>
  );
}

export default NoiseCanvas;
