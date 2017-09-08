import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dropzone from 'react-fine-uploader/dropzone';

const DropzoneCustom = (props) => {
  return (
    <Dropzone multiple={props.multiple} uploader={props.uploader} >
      Перетащите сюда файлы для добавления
    </Dropzone>
  );
};

export default DragDropContext(HTML5Backend)(DropzoneCustom);
