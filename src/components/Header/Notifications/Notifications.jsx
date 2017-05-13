import React from "react";
import { connect } from "react-redux";
import DropTip from "components/DropTip/DropTip";
import IsActive from "components/IsActive";

//components
import Icon from "components/Icon";
import { triggerNotifications } from "./actions/triggerNotifications";

const Notifications = props => {

	let { notifications } = props;
	let { dispatchTriggerNotifications } = props;

	return(

		<div className="notifications">

			<div className={notifications.active ? "top-trigger active" : "top-trigger"} onClick={dispatchTriggerNotifications}>
				<Icon className="top-trigger__icon" icon="bell" width="18" height="21" />
			</div>

			<IsActive active={notifications.active}>
				<DropTip className="notifications__droptip" handleOuterClick={dispatchTriggerNotifications}>
					<div className="droptip__header notifications__header clear">
						<div className="notifications__title">Уведомления</div>
					</div>
					<div className="droptip__content clear">
						<div className="notifications__empty">
							<Icon fill="#e1e5e9" className="mb_24" icon="bell" width="86" height="99" viewBox="0 0 86 99" />
							<div>Новых уведомлений нет</div>
						</div>
					</div>
				</DropTip>
			</IsActive>

		</div>
	);
};

const mapStateToProps = state => {
    return{
        notifications: state.header.notifications
    }
}

const mapDispatchToProps = dispatch => {
    return{
        dispatchTriggerNotifications(){
            dispatch(triggerNotifications());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

