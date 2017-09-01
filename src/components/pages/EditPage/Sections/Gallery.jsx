import React from 'react';
import Dropzone from 'react-fine-uploader/dropzone';
import PauseResumeButton from 'react-fine-uploader/pause-resume-button';
import FineUploaderTraditional from 'fine-uploader-wrappers';
import Thumbnail from 'react-fine-uploader/thumbnail';

import 'react-fine-uploader/gallery/gallery.css';

const uploader = new FineUploaderTraditional({
  options: {
    chunking: {
      enabled: true,
    },
    deleteFile: {
      enabled: true,
      endpoint: 'http://alterainvest.ru/fileuploader/endpoint.php',
    },
    request: {
      endpoint: 'http://alterainvest.ru/fileuploader/endpoint.php',
    },
    retry: {
      enableAuto: true,
    },
  },
});

class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      submittedFiles: [],
      privateFiles: [],
    };
  }

  componentDidMount() {
    uploader.on('statusChange', (id, oldStatus, newStatus) => {
      if (newStatus === 'submitted') {
        const submittedFiles = this.state.submittedFiles;

        submittedFiles.push(id);
        this.setState({ submittedFiles });
      }
    });
  }

  render() {
    return (
      <div className="page-panel">
        <div className="page-panel-title">
          <span className="page-panel-title__heading">Галерея</span>
          <span className="block-right">
            <span className="page-panel-title__status quantity-status" />
            <span className="page-panel-title__quantity">7/7</span>
          </span>
        </div>
        <div className="edit-form">
          <div className="gallery">
            Публичные фотографии
            <span> Отображаются на Альтере</span>
            <div className="gallery--photos-list">
              {
                !!this.state.submittedFiles.length ? this.state.submittedFiles.map(id => {
                  return (
                    <div key={id} className="gallery--photo">
                      <Thumbnail id={id} uploader={uploader} />
                      <PauseResumeButton id={id} uploader={uploader} />
                    </div>
                  );
                }) : <div className="gallery--photos-list--empty-block">Загрузите фотографии объекта</div>
              }
            </div>
          </div>
          <div>
            Приватные фотографии
            <span> Видны только брокерам</span>
            <div className="gallery--photos-list">
              {
                !!this.state.privateFiles.length ? this.state.privateFiles.map(id => {
                  return (
                    <div key={id}>
                      1
                    </div>
                  );
                }) : <div className="gallery--photos-list--empty-block">Загрузите фотографии объекта</div>
              }
            </div>
          </div>
          <Dropzone multiple uploader={uploader} >
            Перетащите сюда файлы для добавления
          </Dropzone>
        </div>
      </div>
    );
  }
}

export default Gallery;

