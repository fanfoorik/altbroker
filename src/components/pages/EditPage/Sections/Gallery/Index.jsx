import React from 'react';
import Dropzone from 'react-fine-uploader/dropzone';
import FineUploaderTraditional from 'fine-uploader-wrappers';
import Thumbnail from 'react-fine-uploader/thumbnail';
import 'react-fine-uploader/gallery/gallery.css';
import Pica from 'pica/dist/pica';
import update from 'react/lib/update';

import Container from './Container';
import Photo from './Photo';

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

  movePhoto = (dragIndex, hoverIndex) => {
    const { submittedFiles } = this.state;
    const dragCard = submittedFiles[dragIndex];

    this.setState(update(this.state, {
      submittedFiles: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      },
    }));
  };

  customResizer = (resizeInfo) => {
    return new Promise((resolve) => {
      resizeInfo.targetCanvas.height = 100;

      new Pica()
        .resize(resizeInfo.sourceCanvas, resizeInfo.targetCanvas)
        .then(data => resolve(data));
    });
  };

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
          <Container>
            {
              !!this.state.submittedFiles.length ? this.state.submittedFiles.map(id => {
                return (
                  <Photo
                    key={id}
                    index={id}
                    id={id}
                    text="Hello"
                    movePhoto={this.movePhoto}
                  >
                    <Thumbnail
                      customResizer={!uploader.qq.ios() && this.customResizer}
                      id={id}
                      uploader={uploader}
                    />
                  </Photo>
                );
              }) : <div className="gallery--photos-list--empty-block">Загрузите фотографии объекта</div>
            }
          </Container>
          <Container>
            {
              !!this.state.privateFiles.length ? this.state.privateFiles.map(id => {
                return (
                  <Photo
                    key={id}
                    index={id}
                    id={id}
                    text="Hello"
                    movePhoto={this.movePhoto}
                  >
                    <div className="gallery--photo">
                      {id}
                    </div>
                  </Photo>
                );
              }) : <div className="gallery--photos-list--empty-block">Загрузите фотографии объекта</div>
            }
          </Container>
          <Dropzone multiple uploader={uploader} >
            Перетащите сюда файлы для добавления
          </Dropzone>
        </div>
      </div>
    );
  }
}

export default Gallery;

