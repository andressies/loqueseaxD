import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";


export class Home extends React.Component {
	render() {
		return (
			<div className="valign-wrapper layout-external center-align">
				<img
					className="user_login_img"
					src="https://cdn.iconscout.com/icon/free/png-256/account-profile-avatar-man-circle-round-user-30452.png"
					height="100"
					width="100"
				/>
				<div className="row">
					<form className="col s12">
						<div className="row">
							<div className="input-field col s6">
								<i className="material-icons prefix">account_circle</i>
								<input id="icon_prefix" type="text" className="validate" />
								<label htmlFor="icon_prefix">First Name</label>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

