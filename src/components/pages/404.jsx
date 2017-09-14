import React from 'react';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="auth-page">
      <div className="auth-page__container">
        <div className="page-404">
          <div className="page-404__code">404</div>
          <div className="page-404__slogan">Вы оказались снаружи всех измерений</div>
          <Link to="/altbroker3/broker/gb/" className="btn btn-lg">Вернуться в бренный мир</Link>
        </div>
      </div>
    </div>
  );
}
