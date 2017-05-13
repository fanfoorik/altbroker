import React from "react";
import { connect } from "react-redux";

//components
import Icon from "components/Icon";
import Stickers from "./components/Stickers";
import { triggerStickers } from "./actions/triggerStickers";

const StickersTrigger = props => {

	let { stickers } = props;
	let { dispatchTriggerStickers } = props;

	return(

		<div className="stickers">

			<div className={stickers.active ? "stickers__trigger active" : "stickers__trigger"} onClick={dispatchTriggerStickers}>
				<Icon className="stickers__trigger-icon" icon="message" width="18" height="21" />
			</div>

			{
				stickers.active &&

				<Stickers handleOuterClick={dispatchTriggerStickers} />
			}
		</div>
	);
};

const mapStateToProps = state => {
    return{
        stickers: state.header.stickers
    }
}

const mapDispatchToProps = dispatch => {
    return{
        dispatchTriggerStickers(){
            dispatch(triggerStickers());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StickersTrigger)

