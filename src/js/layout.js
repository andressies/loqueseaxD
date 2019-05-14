import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import M from "materialize-css";

import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.js";
import { AdminView } from "./views/admin_view.js";

import { Single } from "./views/single.js";
import { CategoriaView } from "./views/categoria_view.js";
import { Drinks } from "./views/drinks.js";

import injectContext from "./store/appContext.js";

import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";

import BaseLayoutRoute from "./layouts/base.js";
import AdminLayoutRoute from "./layouts/admin_layout.js";

//create your first component
export class Layout extends React.Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Switch>

							<BaseLayoutRoute exact path="/" component={Home} />
							
							<Route path="/single/:theid" component={Single} />

						

							<AdminLayoutRoute path="/admin/view/users" component={Navbar} />

							<Route exact path="/" component={Home} />

							<Route path="/single/:theid" component={Single} />


							<Route path="/admin/view" component={AdminView} />

							<Route path="/categorias/view" component={CategoriaView} />

							<Route path="/drinks" component={Drinks} />

							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
