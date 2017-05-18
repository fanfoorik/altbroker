import React, { Component } from "react";
import PropTypes from 'prop-types';

const ProfileDetails = ({data}) =>  {

    let department = data.UF_DEP2_TEXT;
    let roles = data.CURUSER_GROUPS_TEXT;
    let workPosition= data.WORK_POSITION;

    return(
        <div className="profile-details row">

            <div className="col-lg-4">
                <div className="profile-details__section">
                    <div className="profile__label">В компании</div>

                    <div className="profile-details__detail">2 года 5 месяцев</div>
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
                        department.map((item)=>{
                            return <div key={`profile-department-${item.ID}`} className="profile-details__detail">{item.VALUE}</div>
                        })
                    }
                </div>
            </div>

            <div className="col-lg-4">
                <div className="profile-details__section">
                    <div className="profile__label">Роли</div>
                    {
                        roles.map((item)=>{
                            return <div key={`profile-role-${item.ID}`} className="profile-details__detail">{item.NAME}</div>
                        })
                    }
                </div>
            </div>

        </div>
    )
};

ProfileDetails.propTypes = {
    data: PropTypes.shape({
        "UF_DEP2_TEXT": PropTypes.array.isRequired,
        "CURUSER_GROUPS_TEXT": PropTypes.array.isRequired,
        "WORK_POSITION": PropTypes.string
    }).isRequired
};

export default ProfileDetails;