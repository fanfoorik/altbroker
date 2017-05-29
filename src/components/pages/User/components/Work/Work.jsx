import React  from 'react';
import { hostUrl } from 'utils/urls.js';
import IsActive from 'utils/IsActive';
import HeadThumbsList from './components/HeadThumbsList';
import UserThumbsList from './components/UserThumbsList';
import ProfileDetails from './components/ProfileDetails';

const Work = props => {
  const {
    head,
    colleague,
    subordinates,
    workDetails,
  } = props.work;

  return (
    <div className="profile-pane" data-anchor="work">

      <div className="profile-pane__title">Работа</div>

      <ProfileDetails data={workDetails} />

      <div>

        <IsActive
          component={HeadThumbsList}
          active={!!head.length}
          title="Pуководители"
          data={head}
        />

        <IsActive
          component={UserThumbsList}
          active={!!colleague.length}
          title="Коллеги"
          data={colleague}
        />

        <IsActive
          component={UserThumbsList}
          active={!!subordinates.length}
          title="Подчиненные"
          data={subordinates}
        />

      </div>

    </div>
  );
};

export default Work;
