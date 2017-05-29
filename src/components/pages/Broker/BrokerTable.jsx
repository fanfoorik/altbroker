import React from 'react';

import BrokerTableHeader from './BrokerTableHeader';
import fakeData from './fakeData';

const colors = {
  0: '#e1e5e9',
  1: '#ffd900',
  2: '#8b572a',
  3: '#4da1ff',
  4: '#6dd100',
};

export default function BrokerTable(props) {
  return (
    <table className="container">
      <BrokerTableHeader />

      <tbody>
        {fakeData.map((item) => {
          return (
            <tr key={`table-item-${Math.floor(Date.now() * Math.random())}`}>
              <td className="table-col__checkbox no-padding">
                <label className="checkbox">
                  <input type="checkbox" />
                  <div className="checkbox_indicator" />
                </label>
              </td>
              <td className="table-cell__color">
                <span className="table-color" style={{ backgroundColor: colors[Math.floor(Math.random() * 5)] }} />
              </td>
              <td><span className="table-cell__id">{item.id}</span></td>
              <td><img className="table-cell__img" src={item.img} alt={item.name} /></td>
              <td><span className="table-cell__name">{item.name}</span></td>
              <td><span className="table-cell__category">{item.category}</span></td>
              <td><span className="table-cell__location">{item.location}</span></td>
              <td className="align-right">
                <span className="table-cell__price">{item.price}</span>
              </td>
              <td className="align-right">
                <span className="table-cell__profit">{item.profit}</span>
              </td>
              <td><span className="table-cell__broker">{item.broker}</span></td>
              <td><span className="table-cell__dealer">{item.dealer}</span></td>
              <td><span className="table-cell__created">{item.created}</span></td>
              <td><span className="table-cell__last-update">{item.lastUpdate}</span></td>
              <td className="align-right">
                <span className="table-cell__viewed">{item.viewed}</span>
              </td>
              <td className="align-right">
                <span className="table-cell__likes">{item.likes}</span>
              </td>
              <td className="align-center clickable">
                {item.comments && <span className="table-cell__comments">{item.comments}</span>}
              </td>
              <td>
                <div className="table-cell__actions">
                  <span className="table-cell__list table-cell__dots" />
                  <span className="table-cell__dots" />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
