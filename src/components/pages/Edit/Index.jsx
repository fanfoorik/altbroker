import React from 'react';
import LeftPanel from './LeftPanel';
import Breadcrumbs from 'components/ui/Breadcrumbs';
import { indexUrl } from 'utils/urls';
import { NotificationStack } from 'react-notification';
import { OrderedSet } from 'immutable';

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
      notifications: OrderedSet(),
      count: 0,
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
    Promise.all([
      fetchDataForEditPage(this.props.params.id),
      fetchLib(),
    ]).then(data => {
      const fields = data[0].ANSWER.FIELDS;
      const answer = data[1].ANSWER;

      if (fields.SECTION_ID_2.length) {
        fields.SECTION_ID_2.map(childSection => answer.ALL_CATEGORY_GB_2
          .filter(section => section.ID === childSection)
          .map(section => {
            if (!fields.SECTION_ID_1
                .filter(section2 => section2 === section.IBLOCK_SECTION_ID)
                .length) {
              fields.SECTION_ID_1.push(section.IBLOCK_SECTION_ID);
            }
          }),
        );
      }

      this.setState({
        data: fields,
        selectValues:
        {
          Basic: {
            NAME: fields.NAME,
            PROPERTY_GEO_ID: fields.PROPERTY_GEO_ID,
            PROPERTY_METRO_NEW: fields.PROPERTY_METRO_NEW,
            SECTION_ID_1: fields.SECTION_ID_1,
            PROPERTY_RAYON2: fields.PROPERTY_RAYON2,
            SECTION_ID_2: fields.SECTION_ID_2,
            PROPERTY_DOP_INFO: fields.PROPERTY_DOP_INFO,
            PROPERTY_SOURCE: fields.PROPERTY_SOURCE,
            PROPERTY_REASON_FOR_SALE: fields.PROPERTY_REASON_FOR_SALE,
            PROPERTY_DOP_ICON: fields.PROPERTY_DOP_ICON,
          },
          Finance: {
            PROPERTY_PRICE_BUSINESS: fields.PROPERTY_PRICE_BUSINESS,
            PROPERTY_CHIST_PRIB: fields.PROPERTY_CHIST_PRIB,
            PROPERTY_OKUP: fields.PROPERTY_OKUP,
            PROPERTY_SREDMES_OBOR: fields.PROPERTY_SREDMES_OBOR,
            PROPERTY_SREDMES_RASH: fields.PROPERTY_SREDMES_RASH,
          },
          Staff: {
            PROPERTY_KOLVO_SOTR: fields.PROPERTY_KOLVO_SOTR,
            PROPERTY_FOND_ZP: fields.PROPERTY_FOND_ZP,
            PROPERTY_STATE_INFORMATION: fields.PROPERTY_STATE_INFORMATION,
          },
          Building: {
            PROPERTY_SOBSTVEN: (fields.PROPERTY_SOBSTVEN === 'Y'),
            PROPERTY_LANDLORD: fields.PROPERTY_LANDLORD,
            PROPERTY_S_POM: fields.PROPERTY_S_POM,
            PROPERTY_RENT_PRICE: fields.PROPERTY_RENT_PRICE,
            PROPERTY_S_UCH: fields.PROPERTY_S_UCH,
            PROPERTY_ADDITIONAL_INFORMATION: fields.PROPERTY_ADDITIONAL_INFORMATION,
          },
          Asset: {
            PROPERTY_OPF: fields.PROPERTY_OPF,
            PROPERTY_DOLYA: fields.PROPERTY_DOLYA,
            PROPERTY_VOZR_BUSINESS: fields.PROPERTY_VOZR_BUSINESS,
            PROPERTY_DOP_BUSINESS_INFO: fields.PROPERTY_DOP_BUSINESS_INFO,
            PROPERTY_SRV_PRZ: fields.PROPERTY_SRV_PRZ,
            PROPERTY_NEM_ACT: fields.PROPERTY_NEM_ACT,
            PROPERTY_DOC_LIC: fields.PROPERTY_DOC_LIC,
          },
          Salary: {
            PROPERTY_KLIENT_FIO: fields.PROPERTY_KLIENT_FIO,
            PROPERTY_KLIENT_TLF: fields.PROPERTY_KLIENT_TLF,
            PROPERTY_KLIENT_EMAIL: fields.PROPERTY_KLIENT_EMAIL,
            PROPERTY_KLIENT_SAIT: fields.PROPERTY_KLIENT_SAIT,
            PROPERTY_KLIENT_MESTO: fields.PROPERTY_KLIENT_MESTO,
          },
          Gallery: {
            PROPERTY_IMGS_PRE: fields.PROPERTY_IMGS_FULL,
            PROPERTY_HIDE_IMGS_PRE: fields.PROPERTY_HIDE_IMGS_FULL,
          },
        },
      });

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

      sendDataFromEditPage(
        this.props.params.id,
        {
          ...this.state.data,
          ...this.state.selectValues[section],
        },
        section,
      ).then((result) => {
        if (result.ANSWER.SUCCESS) {
          this.addNotification('Объект успешно обновлен!');
        } else {
            if (result.ANSWER.ERROR.MESSAGE) {
              this.addNotification(result.ANSWER.ERROR.MESSAGE);
            } else {
              result.ANSWER.ERROR.map(error => {
                this.addNotification(error.VAL);
              });
            }
        }
      });
    };
  };

  addNotification = (text) => {
    const { notifications } = this.state;
    const count = this.state.count + 1;

    return this.setState({
      count,
      notifications: notifications.add({
        dismissAfter: 3000,
        key: `notification-id-${count}`,
        message: text,
      }),
    });
  };

  handleNotificationDismiss = (notification) => {
    this.setState({
      notifications: this.state.notifications.delete(notification),
    });
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
        <NotificationStack
          notifications={this.state.notifications.toArray()}
          onDismiss={instance => this.handleNotificationDismiss(instance)}
        />
      </div>
    );
  }
}

export default EditPage;
