import React from 'react';
import PenIcon from '../../asserts/Icons/PenIcon/PenIcon';
import LineIcon from '../../asserts/Icons/LineIcon/LineIcon';
import RectangleIcon from '../../asserts/Icons/RectangleIcon/RectangleIcon';
import CircleIcon from '../../asserts/Icons/CircleIcon/CircleIcon';
import ColorPickIcon from '../../asserts/Icons/ColorPickIcon/ColorPickIcon';
import './Tools.css';

export default function Tools() {
  return (
    <div className='tools'>
      <ul className='tool-list'>
        <li>
          <button className='tool-item' type='submit'>
            <PenIcon width='2em' height='2em' />
          </button>
        </li>
        <li>
          <button className='tool-item' type='submit'>
            <ColorPickIcon width='2em' height='2em' />
          </button>
        </li>
        <li>
          <button className='tool-item' type='submit'>
            <LineIcon width='2em' height='2em' />
          </button>
        </li>
        <li>
          <button className='tool-item' type='submit'>
            <RectangleIcon width='2em' height='2em' />
          </button>
        </li>
        <li>
          <button className='tool-item' type='submit'>
            <CircleIcon width='2em' height='2em' />
          </button>
        </li>
      </ul>
    </div>
  );
}
