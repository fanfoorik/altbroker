import React from "react";
import { connect } from "react-redux";
import htmlParser from 'html-react-parser';

import DropTip from "components/DropTip/DropTip";
import IsActive from "components/IsActive";
import Icon from "components/Icon";

//actions
import { triggerPatchNotes, fetchPatchNotes } from './actions/patchNotesAction';

const PatchNotes = props => {

	let patchNotes = props.patchNotes;

	let { dispatchFetchPatchNotes } = props;
	let { dispatchTriggerPatchNotes } = props;

	return(
		<div className="patch-notes">

			<span ref={(trg) => trg} className="patch-notes__trigger" onClick={dispatchTriggerPatchNotes}>
				<Icon icon="info" width="13" height="13" />
			</span>

			<IsActive active={patchNotes.active}>
				<DropTip handleOuterClick={dispatchTriggerPatchNotes} className="patch-notes__droptip">
					<div className="droptip__header clear">
						
						<div className="patch-notes__icon">
							<svg fill="#4da1ff" width="70" height="70" viewBox="0 0 70 70">
								<use xlinkHref="#icon_anchor" />
							</svg>
						</div>

						<div className="overflow_hidden">
							<div className="patch-notes__title">АльтБрокер</div>
							<div className="patch-notes__version">{patchNotes.data.current.version}</div>
							<div className="patch-notes__name">{patchNotes.data.current.name}</div>
						</div>
					</div>

					<div className="droptip__content fz_16">
						{
							htmlParser( patchNotes.data.current.text )
						}
					</div>

					<div className="droptip__footer">
						
						<div className="patch-notes__controls">

							<span 
								className={patchNotes.data.prev.url ? "patch-note-control": "patch-note-control disabled"}
								title={patchNotes.data.prev.name}
								onClick={()=>{
									if(patchNotes.data.prev.url){
										dispatchFetchPatchNotes( patchNotes.data.prev.url );
									}
								}}>

								<Icon icon="arrow-left" width="10" height="16" viewBox="0 0 10 16" />
							</span>

							<span
								className={patchNotes.data.next.url ? "patch-note-control": "patch-note-control disabled"}
								title={patchNotes.data.next.name}
								onClick={(event)=>{
									if(patchNotes.data.next.url){
										dispatchFetchPatchNotes( patchNotes.data.next.url );
									}
								}}>

								<Icon icon="arrow-right" width="10" height="16" viewBox="0 0 10 16" />
							</span>

						</div>

					</div>
				</DropTip>
			</IsActive>
			
		</div>
	)
}

const mapStateToProps = state => {
    return{
        patchNotes: state.header.patchNotes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        dispatchTriggerPatchNotes(url){
            dispatch(triggerPatchNotes());
        },
        dispatchFetchPatchNotes(url){
            dispatch(fetchPatchNotes(url));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatchNotes);
