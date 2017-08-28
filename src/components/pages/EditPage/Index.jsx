import React from 'react';

import Header from './Header';
import LeftPanel from './LeftPanel';
import {
  Basic,
  Finance,
  Salary,
  Staff,
  Building,
  Asset,
} from './Sections';

import {
  fetchData,
  fetchLib,
  sendData,
} from 'api/editPage';

class EditPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectValues: {
        Basic: {},
        Finance: {},
        Staff: {},
        Building: {},
        Asset: {},
        Salary: {},
      },
      lib: {},
    };

    this.onChangeStateHandler = this.onChangeStateHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  componentDidMount() {
    fetchData(this);
    fetchLib(this);
  }

  onChangeStateHandler(section) {
    return (state, type = 'selectValues') => {
      if (state.PROPERTY_SOBSTVEN !== undefined && state.PROPERTY_SOBSTVEN) {
        state.PROPERTY_LANDLORD = null;
      }

      const newStateSection = {
        [section]: Object.assign(this.state[type][section], state),
      };

      const newSelectState = {
        [type]: Object.assign(this.state[type], newStateSection),
      };

      const newState = Object.assign(this.state, newSelectState);

      this.setState(newState);
    };
  }


  onSubmitHandler(section) {
    return (e) => {
      e.preventDefault();
      sendData(this, section);
    };
  }

  componentSections = {
    Basic,
    Finance,
    Staff,
    Building,
    Asset,
    Salary,
  };

  sections = [
    {
      title: 'Основное',
      component: 'Basic',
    },
    {
      title: 'Финансы',
      component: 'Finance',
    },
    {
      title: 'Штат',
      component: 'Staff',
    },
    {
      title: 'Помещение',
      component: 'Building',
    },
    {
      title: 'Активы',
      component: 'Asset',
    },
    {
      title: 'Продавец',
      component: 'Salary',
    },
  ];

  render() {
    return (
      <section className="content" id="content">
        <div className="container container__min position-rel">
          <Header />
          <div className="edit-page">
            <LeftPanel sections={this.sections} selectValues={this.state.selectValues} />
            <div className="edit-page__container">
              {
                this.sections.map((section, index) => {
                  const Component = this.componentSections[section.component];

                  return (
                    <Component
                      lib={this.state.lib}
                      key={index}
                      selectValues={this.state.selectValues[section.component]}
                      onChangeState={this.onChangeStateHandler(section.component)}
                      onSubmit={this.onSubmitHandler(section.component)}
                    />
                  );
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EditPage;
