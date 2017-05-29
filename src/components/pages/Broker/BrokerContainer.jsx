import React from 'react';

import BrokerActions from './BrokerActions';
import BrokerPaginator from './BrokerPaginator';
import BrokerTable from './BrokerTable';

export default function BrokerContainer(props) {
  return (
    <div>
      <BrokerTable />
      <BrokerPaginator />
      <BrokerActions />
    </div>
  );
}
