import React from 'react';

import Breadcrumbs from 'components/ui/Breadcrumbs';
import StatePanel from './StatePanel';

const Header = props => {
  return (
    <div>
      <Breadcrumbs
        items={[
          { label: 'Сделки' },
          { label: 'Сделка на поиск #535252' },
        ]}
      />
      <StatePanel />
    </div>
  );
};

export default Header;
