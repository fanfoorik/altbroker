import React from "react";
import htmlParser from 'html-react-parser';

import DropTip from "components/DropTip/DropTip";

export default props => {

	let patchNotes = props.data;

	let fetchPatchNotes = props.fetchPatchNotes;
	let triggerPatchNotes = props.triggerPatchNotes;

	return(
		<div className="patch-notes">

			<span ref={(trg) => trg} className="patch-notes__trigger" onClick={triggerPatchNotes}>
				<svg width="13" height="13">
					<use xlinkHref="#icon_info" />
				</svg>
			</span>

			{
				patchNotes.active && 
				
				<DropTip handleOuterClick={triggerPatchNotes} className="patch-notes__droptip">
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
										fetchPatchNotes( patchNotes.data.prev.url );
									}
								}}>
								
								<svg width="10" height="16" viewBox="0 0 10 16">
									<use xlinkHref="#icon_arrow-left" />
								</svg>
							</span>

							<span
								className={patchNotes.data.next.url ? "patch-note-control": "patch-note-control disabled"}
								title={patchNotes.data.next.name}
								onClick={(event)=>{
									if(patchNotes.data.next.url){
										fetchPatchNotes( patchNotes.data.next.url );
									}
								}}>

								<svg width="10" height="16" viewBox="0 0 10 16">
									<use xlinkHref="#icon_arrow-right" />
								</svg>
							</span>

						</div>

					</div>
				</DropTip>
			}
		</div>
	)
}
