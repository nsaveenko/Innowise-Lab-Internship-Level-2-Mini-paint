import React, { FC, useState } from 'react';
import Header from '../../components/Header/Header';
import Canvas from '../../components/Canvas/Canvas';
import Tools from '../../components/Tools/Tools';
import './Editor.css';

const Editor: FC = () => {
  const [color, setColor] = useState<string>('#000');
  const [width, setWidth] = useState<string>('5');
  const [tool, setTool] = useState<string>('pen');

  return (
    <>
      <Header />
      <div className='wrapper'>
        <h2>Editor</h2>
        <div className='editor-container'>
          <Tools
            color={color}
            width={width}
            setColor={setColor}
            setWidth={setWidth}
            setTool={setTool}
          />
          <h4 className='tool-title'>
            <strong>Active tool:</strong>
            { tool }
          </h4>
          <Canvas
            width={width}
            color={color}
            tool={tool}
          />
        </div>
      </div>
    </>
  );
};

export default Editor;
