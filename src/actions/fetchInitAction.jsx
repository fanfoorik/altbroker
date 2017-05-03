import ajax from "js/ajax";

const parseMenu = data => {

	let origNav = data.MENU;
	let nav = [];

	for(let el in origNav){
		let origSubnav = origNav[el].CHILDREN;
		origNav[el].subnav = [];

		for(let childEl in origSubnav ){
			origNav[el].subnav.push( origSubnav[childEl] )
		}

		delete origNav[el].CHILDREN;

		nav.push(origNav[el]);
	}

	return nav;
}

export const fetchInit = () => (dispatch) => {

    if(dev){

	    ajax.get("init.json")
			.then(res => res.data)
			.then(data => {

				let response = data.ANSWER;

				console.log( parseMenu(response) );

			})
			.catch(function(error){
				console.log(error);
			});
	}
};
