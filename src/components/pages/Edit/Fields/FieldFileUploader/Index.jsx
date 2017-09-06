import React from 'react';
import Dropzone from 'react-fine-uploader/dropzone';
import FineUploaderTraditional from 'fine-uploader-wrappers';
import Thumbnail from 'react-fine-uploader/thumbnail';
import 'react-fine-uploader/gallery/gallery.css';
import Pica from 'pica/dist/pica';
import update from 'react/lib/update';
import PropTypes from 'prop-types';

import Container from './Container';
import Photo from './Photo';
import Field from '../Field';
import {
  hostUrl,
  apiUrl,
} from 'utils/urls';

class FieldFileUploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submittedFiles: props.value,
      completeFiles: [...props.value],
    };
  }

  componentDidMount() {
    this.uploader.on('statusChange', (id, oldStatus, newStatus) => {
      if (newStatus === 'submitted') {
        this.state.submittedFiles.push(id);
        this.setState(this.state);
      }
    });

    this.uploader.on('complete', (event, id, name, responseJSON) => {
      this.state.completeFiles.push({
        ID: '',
        SRC: JSON.parse(responseJSON.response).url,
      });

      this.props.onChangeState({
        [this.props.field]: this.state.completeFiles,
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    this.state.submittedFiles = nextProps.value;
    this.state.completeFiles = [...nextProps.value];

    this.setState(this.state);
  }

  uploader = new FineUploaderTraditional({
    options: {
      deleteFile: {
        enabled: true,
        endpoint: `${hostUrl + apiUrl}tools/picture/add/`,
      },
      request: {
        endpoint: `${hostUrl + apiUrl}tools/picture/add/`,
        customHeaders: { login: localStorage.getItem('login'), token: localStorage.getItem('token') },
      },
    },
  });

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

  customResizer = resizeInfo => (
    new Promise(resolve => {
      resizeInfo.targetCanvas.height = 100;

      new Pica()
        .resize(resizeInfo.sourceCanvas, resizeInfo.targetCanvas)
        .then(data => resolve(data));
    })
  );

  render() {
    return (
      <Field {...this.props}>
        <div>
          <Container>
            {
              this.state.submittedFiles.length ?
                this.state.submittedFiles.map((photo, id) => (
                  <Photo
                    key={id}
                    index={id}
                    id={id}
                    text="Hello"
                    movePhoto={this.movePhoto}
                  >
                    {
                      photo.SRC ?
                        <img
                          src={hostUrl + photo.SRC}
                          height={100}
                          alt="Фото объекта"
                        /> :
                        <Thumbnail
                          customResizer={!this.uploader.qq.ios() && this.customResizer}
                          id={photo}
                          uploader={this.uploader}
                        />
                    }
                  </Photo>
                )) :
              <div className="gallery__photos-list__empty-block">
                Загрузите фотографии объекта
              </div>
            }
          </Container>

          <Dropzone multiple uploader={this.uploader} >
            Перетащите сюда файлы для добавления
          </Dropzone>
        </div>
      </Field>
    );
  }
}

FieldFileUploader.propProps = {
  value: PropTypes.array,
};

FieldFileUploader.defaultProps = {
  value: [],
};

export default FieldFileUploader;

