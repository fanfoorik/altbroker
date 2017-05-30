import React from 'react';

const colors = [
  {
    color: '#f8e81c',
    text: 'Черновик',
  },
  {
    color: '#e1e5e9',
    text: 'На модерации',
  },
  {
    color: '#d0011b',
    text: 'Отклонен',
  },
  {
    color: '#4da1ff',
    text: 'Размещен',
  },
  {
    color: '#00d194',
    text: 'Предварительный',
  },
  {
    color: '#6dd100',
    text: 'Продан',
  },
  {
    color: '#8b572a',
    text: 'Снят с продаж',
  },
];

export default class ColorsLegendPopover extends React.Component {
  render() {
    return (
      <div className="popover popover_md bottomed">
        <div className="popover-body">
          <div className="popover-content-wrapper active">
            <ul className="popover-color-legend-list">
              {colors.map((item) => (
                <li className="popover-color-legend-item">
                  <span className="popover-color-legend-date" style={{ backgroundColor: item.color }} />
                  <span className="popover-color-legend-value">{item.text}</span>
                </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
