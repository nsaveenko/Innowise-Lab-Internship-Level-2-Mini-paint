import React, { useEffect, useRef } from 'react';
import './Canvas.css';

export default function Canvas() {
  const canvasRef = useRef(null);
  // const contextRef = useRef(null);

  useEffect(() => {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    // const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    // context.fillStyle = '#e0dddb';
    // context.fillRect(10, 10, 150, 100);
    // const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.scale(2, 2);
    context.strokeStyle = 'black';
    context.lineCap = 'round';
    context.lineWidth = 5;
  });

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    // contextRef.current.beginPath();
    console.log(e);
  };

  const finishDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    console.log(e);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    console.log(e);
  };

  return (
    <canvas
      onMouseDown={startDraw}
      onMouseUp={finishDraw}
      onMouseMove={draw}
      ref={canvasRef}
      id='canvas'
    />
  );
}
