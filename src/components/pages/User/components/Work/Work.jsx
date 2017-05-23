import { hostUrl } from 'utils/urls.js';
import React from 'react';

import IsActive from 'utils/IsActive';
import ProfileDetails from './components/ProfileDetails';
import UserThumbsList from './components/UserThumbsList';

export default function Work(props) {
  const { work, user } = props.data;

  return (
    <div className="profile-pane mb_24">
      <div className="profile-pane__title">Работа</div>
      <ProfileDetails data={user} />

      <div>
        <IsActive
          component={UserThumbsList}
          active={!!work.COLLEAGUE.length}
          title="Мои коллеги"
          data={work.COLLEAGUE}
        />
        <IsActive
          component={UserThumbsList}
          active={!!work.SUBORDINATES.length}
          title="Мои подчиненные"
          data={work.SUBORDINATES}
        />
      </div>
    </div>
  );
}
