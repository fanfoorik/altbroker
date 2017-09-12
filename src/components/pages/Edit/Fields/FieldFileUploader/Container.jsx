import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from './Non';

const Container = ({
  children,
}) => {
  return (
    <div className="gallery">
      <div className="gallery__photos-list">
        {children}
      </div>
    </div>
  );
};

export default DragDropContext(HTML5Backend)(Container);
