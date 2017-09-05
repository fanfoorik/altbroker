import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const Container = ({
  children,
}) => {
  return (
    <div className="gallery">
      <div className="gallery--photos-list">
        {children}
      </div>
    </div>
  );
};

export default DragDropContext(HTML5Backend)(Container);
