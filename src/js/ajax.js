
import axios from "axios";

export default axios.create({
	baseURL: "http://alterainvest.ru/",
	headers:{
		"login": "vh.mrk@alterainvest.ru",
		"token": "56f845acd90aa6a306b93219e3af8052"
	}
});

