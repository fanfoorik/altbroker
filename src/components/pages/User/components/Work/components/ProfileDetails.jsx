import React, { Component } from "react";
import PropTypes from 'prop-types';

const ProfileDetails = (props) => {

  const { department, roles, workPosition, workSince } = props.data;

  return (
    <div className="profile-details row">

      <div className="col-lg-4">
        <div className="profile-details__section">
          <div className="profile__label">В компании</div>

          <div className="profile-details__detail">{workSince}</div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="profile-details__section">
          <div className="profile__label">Должность</div>

          <div className="profile-details__detail">{workPosition}</div>
        </div>

        <div className="profile-details__section">
          <div className="profile__label">Отделы</div>
          {
            department.map((item) => {
              return <div key={`profile-department-${item.ID}`} className="profile-details__detail">{item.VALUE}</div>
            })
          }
        </div>
      </div>

      <div className="col-lg-4">
        <div className="profile-details__section">
          <div className="profile__label">Роли</div>
          {
            roles.map((item) => {
              return <div key={`profile-role-${item.ID}`} className="profile-details__detail">{item.NAME}</div>
            })
          }
        </div>
      </div>

    </div>
  );
};

ProfileDetails.propTypes = {
  data: PropTypes.shape({
    department: PropTypes.array.isRequired,
    roles: PropTypes.array.isRequired,
    workPosition: PropTypes.string,
    workSince: PropTypes.string,
  }).isRequired,
};

export default ProfileDetails;
