import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { usePics } from '../../contexts/PicsContext';
import { ICanvas } from './ICanvas';
import './Canvas.css';

export default function Canvas({ color, width, tool }: ICanvas) {
  const { currentUserEmail } = useAuth();
  const { uploadPic } = usePics();
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

  const clear = () => {
    ctx!.clearRect(0, 0, ctx!.canvas.width, ctx!.canvas.height);
  };

  const draw = (x: number, y: number) => {
    ctx!.beginPath();
    ctx!.strokeStyle = color;
    ctx!.lineWidth = +width;
    ctx!.lineJoin = 'round';
    ctx!.moveTo(previousPosition.x, previousPosition.y);
    ctx!.lineTo(x, y);
    ctx!.closePath();
    ctx!.stroke();

    setPosition({ x, y });
  };

  const drawLine = (x: number, y: number) => {
    clear();
    ctx!.beginPath();
    ctx!.lineJoin = 'round';
    ctx!.strokeStyle = color;
    ctx!.lineWidth = +width;
    ctx!.moveTo(
      previousPosition.x,
      previousPosition.y,
    );
    ctx!.lineTo(x, y);
    ctx!.stroke();
  };

  const drawRectangle = (x: number, y: number) => {
    clear();
    ctx!.strokeStyle = color;
    ctx!.lineWidth = +width;
    const recWidth = x - previousPosition.x;
    const recHeight = y - previousPosition.y;
    ctx!.strokeRect(previousPosition.x, previousPosition.y, recWidth, recHeight);
  };

  const drawCircle = (x: number, y: number) => {
    ctx!.strokeStyle = color;
    ctx!.lineWidth = +width;
    const radius = Math.sqrt((x - y) ** 2);
    clear();
    ctx!.beginPath();
    ctx!.arc(previousPosition.x, previousPosition.y, radius, 0, 2 * Math.PI, false);
    ctx!.stroke();
  };

  const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    setPosition({ x, y });
    setIsMouseDown(true);
  };

  const finishDraw = () => {
    setIsMouseDown(false);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isMouseDown) {
      switch (tool) {
        case 'pen':
          draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          break;
        case 'line':
          drawLine(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          break;
        case 'rectangle':
          drawRectangle(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          break;
        case 'circle':
          drawCircle(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          break;
        default:
          draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          break;
      }
    }
  };

  const download = async () => {
    const url = ctx!.canvas.toDataURL();
    const pic = url.substring(22, url.length);
    await uploadPic(pic, currentUserEmail);
  };

  return (
    <>
      <canvas
        width={500}
        height={500}
        onMouseDown={onMouseDown}
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
