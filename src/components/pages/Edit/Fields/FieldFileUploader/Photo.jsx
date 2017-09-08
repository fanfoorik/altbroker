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
    const hoverMiddleX = (hoverBoundingRect.left - hoverBoundingRect.right) / 5;
    const clientOffset = monitor.getClientOffset();
    const hoverClientX = clientOffset.x - hoverBoundingRect.right;

    if (hoverClientX < hoverMiddleX) {
      return;
    }

    props.movePhoto(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  },
};

const Photo = (props) => {
  const { children, connectDragSource, connectDropTarget } = props;

  return connectDragSource(connectDropTarget(
    <div className="gallery__photos-list__photo">
      {children}
    </div>,
  ));
};

export default DropTarget(
  'photo',
  cardTarget,
  connect => ({
    connectDropTarget: connect.dropTarget(),
  }))(DragSource(
  'photo',
  cardSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }))(Photo));
