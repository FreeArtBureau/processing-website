import React, { useState } from 'react';
import ColorDraggable from './ColorDraggable';
import css from './Color.module.css';
import { rgbToHex, hexToRgb } from '../../utils/editor';

const Color = (props) => {
  const { shapes, shapesInx, tabIndex } = props;
  const [colorClass, setColorClass] = useState(true);

  const blurRest = (e, value) => {
    setColorClass(!value);
  };

  return (
    <span className={colorClass ? css.root : css.blur}>
      <ColorDraggable
        onChange={props.onChange}
        shape={shapes[shapesInx]}
        shapesInx={shapesInx}
        blurRest={blurRest}
        colorInx={'r'}
        tabIndex={tabIndex}
      />
      ,&nbsp;
      <ColorDraggable
        onChange={props.onChange}
        shape={shapes[shapesInx]}
        shapesInx={shapesInx}
        blurRest={blurRest}
        colorInx={'g'}
        tabIndex={tabIndex}
      />
      ,&nbsp;
      <ColorDraggable
        onChange={props.onChange}
        shape={shapes[shapesInx]}
        shapesInx={shapesInx}
        blurRest={blurRest}
        colorInx={'b'}
        tabIndex={tabIndex}
      />
      <input
        type="color"
        className={css.color}
        onChange={(e) =>
          props.onChange(
            e,
            ['shapes', shapesInx, 'color'],
            hexToRgb(e.target.value)
          )
        }
        value={rgbToHex(shapes[shapesInx].color)}
        aria-label="Choose color"
        tabIndex={tabIndex}
      />
    </span>
  );
};

export default Color;
