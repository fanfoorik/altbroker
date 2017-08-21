import React from 'react';

import Header from './Header';
import LeftPanel from './LeftPanel';
import Basic from './Basic';
import { fetchData, fetchLib, sendData } from 'api/editPage';

class EditPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectValues: {},
      lib: {},
      data: {},
    };

    this.onChangeStateBasicHandler = this.onChangeStateBasicHandler.bind(this);
    this.onSubmitBasicHandler = this.onSubmitBasicHandler.bind(this);
  }

  componentDidMount() {
    fetchData(this);
    fetchLib(this);
  }

  onChangeStateBasicHandler(state) {
    const newSelectState = {
      selectValues: Object.assign(this.state.selectValues, state),
    };

    const newState = Object.assign(this.state, newSelectState);

    this.setState(newState);
  }

  onSubmitBasicHandler(e) {
    e.preventDefault();
    sendData(this);
  }

  render() {
    return (
      <section className="content" id="content">
        <div className="container container__min position-rel">
          <Header />
          <div className="edit-page">
            <LeftPanel />
            <div className="edit-page__container">
              <Basic
                data={this.state.data}
                lib={this.state.lib}
                selectValues={this.state.selectValues}
                onChangeState={this.onChangeStateBasicHandler}
                onSubmit={this.onSubmitBasicHandler}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EditPage;
