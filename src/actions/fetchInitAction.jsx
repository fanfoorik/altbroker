import ajax from "js/ajax";
import getHeaders from "js/getHeaders";
import { api_url } from "path.js";


export const fetchInit = () => dispatch => {

    ajax.get(api_url+"init/",{
    	headers:getHeaders()
    })
		.then(res => res.data)
		.then(data => {
			let menu = data.ANSWER.MENU;
			let patchNotes = data.ANSWER.PATCHNOUTS;

			dispatch({
				type: "SET_PATCH_NOTES",
				payload:patchNotes
			});
		})
		.catch(function(error){
			console.log('fetch init error -',error);
		});
};

function parseMenu(menu){

	let nav = [];

	for(let el in menu){
		let origSubnav = menu[el].CHILDREN;
		menu[el].subnav = [];

		for(let childEl in origSubnav ){
			menu[el].subnav.push( origSubnav[childEl] )
		}

		delete menu[el].CHILDREN;

		nav.push(menu[el]);
	}

	return nav;
}
