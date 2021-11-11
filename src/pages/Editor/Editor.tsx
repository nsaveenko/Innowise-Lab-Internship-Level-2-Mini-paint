import React from 'react';
import Header from '../../components/Header/Header';
import Canvas from '../../components/Canvas/Canvas';
import Tools from '../../components/Tools/Tools';
import './Editor.css';

const Editor: React.FC = () => {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <h2>Editor</h2>
        <div className='editor-container'>
          <Tools />
          <Canvas />
        </div>
      </div>
    </>
  );
};

export default Editor;
