import React from 'react';
import { browserHistory } from 'react-router';
import Breadcrumbs from 'components/ui/Breadcrumbs';
import { indexUrl } from 'utils/urls';

import LeftPanel from '../Edit/LeftPanel';
import {
  Basic,
  Finance,
  Salary,
  Staff,
  Building,
  Asset,
  Gallery,
} from '../Edit/Sections';

import {
  fetchLib,
} from 'api/editPage';

import {
  saveData,
} from 'api/add';

class AddPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectValues: {
        Basic: {
          NAME: '',
          PROPERTY_GEO_ID: '',
          PROPERTY_METRO_NEW: '',
          SECTION_ID_1: '',
          PROPERTY_RAYON2: '',
          SECTION_ID_2: '',
          PROPERTY_DOP_INFO: '',
          PROPERTY_SOURCE: '',
          PROPERTY_REASON_FOR_SALE: '',
          PROPERTY_DOP_ICON: '',
        },
        Finance: {
          PROPERTY_PRICE_BUSINESS: '',
          PROPERTY_CHIST_PRIB: '',
          PROPERTY_OKUP: '',
          PROPERTY_SREDMES_OBOR: '',
          PROPERTY_SREDMES_RASH: '',
        },
        Staff: {
          PROPERTY_KOLVO_SOTR: '',
          PROPERTY_FOND_ZP: '',
          PROPERTY_STATE_INFORMATION: '',
        },
        Building: {
          PROPERTY_SOBSTVEN: false,
          PROPERTY_LANDLORD: '',
          PROPERTY_S_POM: '',
          PROPERTY_RENT_PRICE: '',
          PROPERTY_S_UCH: '',
          PROPERTY_ADDITIONAL_INFORMATION: '',
        },
        Asset: {
          PROPERTY_OPF: '',
          PROPERTY_DOLYA: '',
          PROPERTY_VOZR_BUSINESS: '',
          PROPERTY_DOP_BUSINESS_INFO: '',
          PROPERTY_SRV_PRZ: '',
          PROPERTY_NEM_ACT: '',
          PROPERTY_DOC_LIC: '',
        },
        Salary: {
          PROPERTY_KLIENT_FIO: '',
          PROPERTY_KLIENT_TLF: '',
          PROPERTY_KLIENT_EMAIL: '',
          PROPERTY_KLIENT_SAIT: '',
          PROPERTY_KLIENT_MESTO: '',
        },
        Gallery: {
          PROPERTY_IMGS_PRE: [],
          PROPERTY_HIDE_IMGS_PRE: [],
        },
      },
      lib: {},
    };
  }

  componentDidMount() {
    fetchLib().then(data => {
      const answer = data.ANSWER;
      this.setState({
        lib: {
          cities: answer.ALL_CITY.map(city => ({
            value: city.ID,
            label: city.NAME,
          })),
          metro: answer.ALL_METRO,
          categories: answer.ALL_CATEGORY_GB_1.map(category => ({
            label: category.NAME,
            value: category.ID,
          })),
          categories2: answer.ALL_CATEGORY_GB_2,
          sources: answer.PROPERTY_SOURCE.map(source => ({
            value: source.ID,
            label: source.VALUE,
          })),
          reasons: answer.PROPERTY_REASON_FOR_SALE.map(reason => ({
            value: reason.ID,
            label: reason.NAME,
          })),
          advantages: answer.PROPERTY_DOP_ICON.map(advantage => ({
            label: advantage.VALUE,
            value: advantage.ID,
          })),
          opf: answer.PROPERTY_OPF.map(opf => ({
            label: opf.VALUE,
            value: opf.ID,
          })),
          landlord: answer.PROPERTY_LANDLORD.map(landlord => ({
            label: landlord.VALUE,
            value: landlord.ID,
          })),
        },
      });
    });
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
        this.state.selectValues[section].SECTION_ID_2 =
          this.state.selectValues[section].SECTION_ID_2 ||
          [];

        state.SECTION_ID_2 = this.state.selectValues[section].SECTION_ID_2
          .filter(childSection => (
            !!state.SECTION_ID_1
              .filter(parentSection => parentSection.ID === childSection.parentSectionId)
              .length
          ));
      }

      this.state.selectValues[section] = { ...this.state.selectValues[section], ...state };

      this.setState(this.state);
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

  onSubmit = () => {
    this.onSubmitHandler(false);
  };

  onDraft = () => {
    this.onSubmitHandler(true);
  };

  onSubmitHandler = (draft = false) => {
    let data = {};

    Object.values(this.state.selectValues).map(value => {
      data = { ...data, ...value };
    });

    saveData(data, draft).then(data => {
      if (data !== undefined) {
        browserHistory.push('/altbroker3/broker/gb/');
      }
    });
  };

  render() {
    return (
      <div className="container container__min position-rel">
        <Breadcrumbs
          items={[
            { label: 'Бизнесы', link: `${indexUrl}broker/gb/` },
            { label: 'Добавить' },
          ]}
        />

        <div className="edit-page">
          <LeftPanel
            sections={this.sections}
            onSubmit={this.onSubmit}
            onDraft={this.onDraft}
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

export default AddPage;
