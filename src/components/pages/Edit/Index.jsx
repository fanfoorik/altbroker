import React from 'react';
import LeftPanel from './LeftPanel';
import Breadcrumbs from 'components/ui/Breadcrumbs';
import { indexUrl } from 'utils/urls';

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
      anchor: 'basic',
    },
    {
      title: 'Финансы',
      component: 'Finance',
      anchor: 'finance',
    },
    {
      title: 'Штат',
      component: 'Staff',
      anchor: 'staff',
    },
    {
      title: 'Помещение',
      component: 'Building',
      anchor: 'building',
    },
    {
      title: 'Активы',
      component: 'Asset',
      anchor: 'asset',
    },
    {
      title: 'Продавец',
      component: 'Salary',
      anchor: 'salary',
    },
    {
      title: 'Галерея',
      component: 'Gallery',
      anchor: 'gallery',
    },
  ];

  render() {
    return (
      <div className="container container__min position-rel">
        <Breadcrumbs
          items={[
            { label: 'Бизнесы', link: `${indexUrl}broker/gb/` },
            { label: 'Редактировать' },
          ]}
        />

        <div className="edit-page">
          <LeftPanel
            sections={this.sections}
            anchar={window.location.hash.substr(1)}
            selectValues={this.state.selectValues}
          />
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
                    objectId={this.props.params.id}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default EditPage;
