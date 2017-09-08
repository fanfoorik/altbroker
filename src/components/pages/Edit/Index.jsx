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
  Gallery,
} from './Sections';

import {
  fetchDataForEditPage,
  fetchLib,
  sendDataFromEditPage,
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
        Gallery: {},
      },
      lib: {},
    };
  }

  componentDidMount() {
    fetchDataForEditPage(this);
    fetchLib(this);
  }

  onChangeStateHandler = (section) => {
    return (state) => {
      if (state.PROPERTY_GEO_ID) {
        state.PROPERTY_METRO_NEW = null;
      }

      if (state.PROPERTY_SOBSTVEN) {
        state.PROPERTY_LANDLORD = null;
      }

      if (state.SECTION_ID_1) {
        state.SECTION_ID_2 = this.state.selectValues[section].SECTION_ID_2
          .filter(childSection => (
            !!state.SECTION_ID_1
              .filter(parentSection => parentSection.ID === childSection.parentSectionId)
              .length
          ));
      }

      this.state.selectValues[section] = { ...this.state.selectValues[section], ...state };

      this.setState({ selectValues: this.state.selectValues });
    };
  };


  onSubmitHandler = (section) => {
    return (e) => {
      e.preventDefault();
      sendDataFromEditPage(this, section);
    };
  };

  componentSections = {
    Basic,
    Finance,
    Staff,
    Building,
    Asset,
    Salary,
    Gallery,
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
    {
      title: 'Галерея',
      component: 'Gallery',
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
