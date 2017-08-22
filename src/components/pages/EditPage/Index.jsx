import React from 'react';

import Header from './Header';
import LeftPanel from './LeftPanel';
import Basic from './Basic';
import Finance from './Finance';
import Salary from './Salary';
import Staff from './Staff';
import Building from './Building';
import Asset from './Asset';
import { fetchData, fetchLib, sendData } from 'api/editPage';

class EditPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectValues: {},
      lib: {},
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
              <Salary
                data={this.state.data}
                lib={this.state.lib}
                selectValues={this.state.selectValues}
                onChangeState={this.onChangeStateBasicHandler}
                onSubmit={this.onSubmitBasicHandler}
              />
              <Finance
                data={this.state.data}
                lib={this.state.lib}
                selectValues={this.state.selectValues}
                onChangeState={this.onChangeStateBasicHandler}
                onSubmit={this.onSubmitBasicHandler}
              />
              <Staff
                data={this.state.data}
                lib={this.state.lib}
                selectValues={this.state.selectValues}
                onChangeState={this.onChangeStateBasicHandler}
                onSubmit={this.onSubmitBasicHandler}
              />
              <Building
                data={this.state.data}
                lib={this.state.lib}
                selectValues={this.state.selectValues}
                onChangeState={this.onChangeStateBasicHandler}
                onSubmit={this.onSubmitBasicHandler}
              />
              <Asset
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
