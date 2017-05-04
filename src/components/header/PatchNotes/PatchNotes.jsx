import React from "react";

export default props => {

	console.log(props);

	let patchNote = props.data;
	let fetchPatchNotes = props.fetchPatchNotes;

	return(
		<div className="patch-notes">
			
			<span className="patch-notes__trigger"></span>

			<div className="patch-notes__droptip droptip">

				<div className="droptip__header clear">
					
					<div className="patch-notes__icon">
						<svg fill="#4da1ff" width="70" height="70" viewBox="0 0 70 70">
							<use xlinkHref="#icon_anchor" />
						</svg>
					</div>

					<div className="overflow_hidden">
						<div className="patch-notes__title">АльтБрокер</div>
						<div className="patch-notes__version">{patchNote.data.current.version}</div>
						<div className="patch-notes__name">{patchNote.data.current.name}</div>
					</div>
				</div>

				<div className="droptip__content fz_16">
					{patchNote.data.current.text}
				</div>

				<div className="droptip__footer">
					
					<div className="patch-notes__controls">

						<span 
							className={patchNote.data.prev.url ? "patch-note-control": "patch-note-control disabled"}
							data-href={patchNote.data.prev.url}
							onClick={(ev)=>{
								fetchPatchNotes( ev.currentTarget.getAttribute("data-href") )
							}}>
							
							<svg width="10" height="16" viewBox="0 0 10 16">
								<use xlinkHref="#icon_arrow-left" />
							</svg>
						</span>

						<span
							className={patchNote.data.next.url ? "patch-note-control": "patch-note-control disabled"}
							data-href={patchNote.data.next.url}
							onClick={(event)=>{
								fetchPatchNotes( event.currentTarget.getAttribute("data-href") )
							}}>
							
							<svg width="10" height="16" viewBox="0 0 10 16">
								<use xlinkHref="#icon_arrow-right" />
							</svg>
						</span>

					</div>

				</div>

			</div>
		</div>
	)
}

