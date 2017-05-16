import React, { Component } from "react";

class User extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){
		console.log("componentDidMount");
	}

	render(){
		return (
			<div className="profile">
				<div className="profile__center">

					<div className="profile__menu profile-menu">
						<a className="profile-menu__link" href="#about">О себе</a>
						<a className="profile-menu__link" href="#job">Работа</a>
						<a className="profile-menu__link" href="#contact">Контакты</a>
						<a className="profile-menu__link" href="#password">Пароль</a>
					</div>

					<div className="profile__container">
					
						<div className="profile-pane mb_24 clear">
							<div className="profile-pane__title">О себе</div>
							
							<div className="profile-image">
								<div className="profile-image__userpic"></div>
							</div>

							<div className="profile-info mb_24">

								<div className="row row_gutter-24 mb_24">
									<div className="col-lg-6">
										<label>
											<div className="profile__label">Имя</div>
											<input className="input input_smaller" type="text" />
										</label>
									</div>
									<div className="col-lg-6">
										<label>
											<div className="profile__label">Имя</div>
											<input className="input input_smaller" type="text" defaultValue="Штеерзонхофензунд" />
										</label>
									</div>
								</div>

								<div className="row row_gutter-24 mb_24">
									<div className="col-lg-4">
										<div className="profile__label">Год рождения</div>
										<div>04.03.1985</div>
									</div>
									<div className="col-lg-4">
										<div className="profile__label">Скрыть год?</div>
										Да Нет
									</div>
								</div>

								<div className="mb_24">
									<div className="profile__label">Я живу в городе</div>
									<div className="selectbox">
										<select className="select">
											<option value="1">Санкт-Петербург</option>
											<option value="2">Москва</option>
										</select>
									</div>
								</div>

								<div>
									<div className="profile__label">Моя история успеха</div>
									<textarea className="textarea" rows="5" cols="5" defaultValue="sdfsdfdsf"></textarea>
								</div>

							</div>

							<div className="align_right">
								<button className="button" type="submit">Сохранить</button>
							</div>

						</div>

						<div className="profile-pane mb_24">
							22222 User ID { this.props.params.id } <br />
							22222 User ID { this.props.params.id } <br />
							22222 User ID { this.props.params.id } <br />
							22222 User ID { this.props.params.id } <br />
							22222 User ID { this.props.params.id } <br />
							22222 User ID { this.props.params.id } <br />
							22222 User ID { this.props.params.id } <br />
						</div>

						<div className="profile-pane mb_24">
							33333 User ID { this.props.params.id } <br />
							33333 User ID { this.props.params.id } <br />
							33333 User ID { this.props.params.id } <br />
							33333 User ID { this.props.params.id } <br />
							33333 User ID { this.props.params.id } <br />
							33333 User ID { this.props.params.id } <br />
							33333 User ID { this.props.params.id } <br />
						</div>

						<div className="profile-pane mb_24">
							44444 User ID { this.props.params.id } <br />
							44444 User ID { this.props.params.id } <br />
							44444 User ID { this.props.params.id } <br />
							44444 User ID { this.props.params.id } <br />
							44444 User ID { this.props.params.id } <br />
							44444 User ID { this.props.params.id } <br />
							User ID { this.props.params.id } <br />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default User;