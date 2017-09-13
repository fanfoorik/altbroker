import React from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';

import Icon from 'components/Icon';
import { deleteImg } from 'api/editPage';

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
    const hoverMiddleX = (hoverBoundingRect.left - hoverBoundingRect.right);
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
  const {
    children,
    connectDragSource,
    connectDropTarget,
    dataPhoto,
    objectId,
    deletePhotoHandler,
  } = props;

  const onClickHandler = (e) => {
    deleteImg(dataPhoto.ID, dataPhoto.SRC, objectId).then((result) => {
      deletePhotoHandler(dataPhoto.SRC);
    });
  };

  return connectDragSource(connectDropTarget(
    <div className="gallery__photos-list__photo">
      {children}
      <div onClick={onClickHandler} className="gallery__btn-delete">
        <Icon icon="close" width="10" height="10" />
      </div>
    </div>,
  ));
};

export default DropTarget(
  'photos',
  cardTarget,
  connect => ({
    connectDropTarget: connect.dropTarget(),
  }))(DragSource(
  'photos',
  cardSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }))(Photo));