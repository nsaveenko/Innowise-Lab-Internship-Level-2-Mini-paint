import React, { useEffect, useRef, useState } from 'react';
import './Canvas.css';
import { ICanvas } from './ICanvas';

export default function Canvas({ color, width }: ICanvas) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [previousPosition, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const ctx = canvasCtxRef.current;

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
    }
  }, []);

  const draw = (x: number, y: number) => {
    if (isMouseDown) {
      ctx!.beginPath();
      ctx!.strokeStyle = color;
      ctx!.lineWidth = +width;
      ctx!.lineJoin = 'round';
      ctx!.moveTo(
        previousPosition.x,
        previousPosition.y,
      );
      ctx!.lineTo(x, y);
      ctx!.closePath();
      ctx!.stroke();

      setPosition({ x, y });
    }
  };

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setPosition({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
    setIsMouseDown(true);
  };

  const finishDraw = () => {
    setIsMouseDown(false);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const clear = () => {
    ctx!.clearRect(0, 0, ctx!.canvas.width, ctx!.canvas.height);
  };

  const download = async () => {
    const image = ctx!.canvas.toDataURL('image/png');
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = 'image.png';
    link.click();
  };

  return (
    <>
      <canvas
        width={500}
        height={500}
        onMouseDown={startDraw}
        onMouseUp={finishDraw}
        onMouseMove={onMouseMove}
        onMouseLeave={finishDraw}
        ref={canvasRef}
        id='canvas'
      />
      <div className='canvas-addictional-container'>
        <button className='primary-button' type='submit' onClick={clear}>
          Clear
        </button>
        <button className='primary-button' type='submit' onClick={download}>
          Save
        </button>
      </div>
    </>
  );
}
