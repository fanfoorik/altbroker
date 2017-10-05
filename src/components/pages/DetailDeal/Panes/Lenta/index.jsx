import React, { Component } from 'react';

import { Steps } from 'antd';
const Step = Steps.Step;
const styleDiv = {
  width: '716px',
  height: '60px',
  borderRadius: '3px',
  backgroundColor: '#ffffff',
  border: 'solid 1px #e1e5e9',
  padding: '10px 20px',
  marginBottom: '20px',
};

const styleDate = {
  width: '64px',
  height: '17px',
  opacity: '0.5',
  fontFamily: 'PTSans',
  fontSize: '14px',
  color: '#313436',
};

const styleDescription = {
  width: '224px',
  height: '17px',
  fontFamily: 'PTSans',
  fontSize: '14px',
  color: '#313436',
};

const activeDiv = {
  width: '716px',
  height: '95px',
  borderRadius: '3px',
  backgroundColor: '#f5faff',
  border: 'solid 1px #4da1ff',
  padding: '10px 20px',
  marginBottom: '20px',
};

const header = {
  width: '182px',
  height: '18px',
  fontFamily: 'PTSans',
  fontSize: '16px',
  color: '#313436',
  marginBottom: '10px',
};

const steps = {
  borderLeft: '1px solid #4da1ff',
  marginLeft: '20px',
  padding: '30px 0 0 20px',
  position: 'relative',
  width: '737px',
  margin: '0 auto ',
};

const stepNumber = {
  fontFamily: 'PTSans',
  fontSize: '16px',
  textAlign: 'center',
  color: '#313436',
  display: 'inline-block',
  border: '1px solid #4da1ff',
  lineHeight: '36px',
  width: '36px',
  height: '36px',
  borderRadius: '36px',
  fontStyle: 'normal',
  backgroundColor: 'white',
};

const step = {
  position: 'relative'
}

class Lenta extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'white', border: '1px solid #e1e5e9', padding: '30px'}}>
        <div style={steps}>
          <div style={step}>
            <div style={activeDiv}>
              <h3 style={header}>
                Заполните Анкету сделки.
              </h3>
              <button className="btn">Перейти к заполнению</button>
            </div>

            <div style={styleDiv}>
              <span style={styleDate}>16 августа</span>
              <p style={styleDescription}>
                Создана сделка на продажу #12583.
              </p>
            </div>

            <div style={styleDiv}>
              <span style={styleDate}>16 августа</span>
              <p style={styleDescription}>
                Создана сделка на продажу #12583.
              </p>
            </div>
            <div style={{ position: 'relative', bottom: '-10px', left: '-40px' }}>
              <i style={stepNumber}>1</i>
              <h3 style={{ display: 'inline-block', marginLeft: '20px' }}> Создание сделки</h3>
            </div>
          </div>

          <div style={step}>
            <div style={activeDiv}>
              <h3 style={header}>
                Заполните Анкету сделки.
              </h3>
              <button className="btn">Перейти к заполнению</button>
            </div>

            <div style={styleDiv}>
              <span style={styleDate}>16 августа</span>
              <p style={styleDescription}>
                Создана сделка на продажу #12583.
              </p>
            </div>

            <div style={styleDiv}>
              <span style={styleDate}>16 августа</span>
              <p style={styleDescription}>
                Создана сделка на продажу #12583.
              </p>
            </div>
            <div style={{ position: 'relative', bottom: '-10px', left: '-40px' }}>
              <i style={stepNumber}>1</i>
              <h3 style={{ display: 'inline-block', marginLeft: '20px' }}> Создание сделки</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lenta;
