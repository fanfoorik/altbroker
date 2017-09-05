import React from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    };
  },
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    props.movePhoto(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  },
};

const Photo = (props) => {
  const { children, connectDragSource, connectDropTarget } = props;

  return connectDragSource(connectDropTarget(
    <div className="gallery--photo">
      {children}
    </div>,
));
};

export default DropTarget('photo', cardTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(DragSource('photo', cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(Photo));
