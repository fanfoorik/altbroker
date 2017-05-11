import React from "react";
import Icon from "components/Icon";
import StickersOverlay from "./components/StickersOverlay";
import Sticker from "./components/Sticker";

export default props => {

	let { triggerStickers } = props;
	let { stickers } = props;

	return(

		<div className="stickers">

			<div className={stickers.active ? "stickers__trigger active" : "stickers__trigger"} onClick={triggerStickers}>
				<Icon className="stickers__trigger-icon" icon="icon_message" width="18" height="21" viewBox="0 0 18 21" />
			</div>

			{
				stickers.active &&

				<StickersOverlay handleOuterClick={triggerStickers}>
					<div style={{width: "20%"}}>
						<Sticker />
					</div>
				</StickersOverlay>
			}
		</div>
	);
};