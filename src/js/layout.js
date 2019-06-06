import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import M from "materialize-css";

import ScrollToTop from "./component/scrollToTop";

import { AdminView } from "./views/admin_view.js";

import { BartenderView } from "./views/bartender_view.js";

import { Single } from "./views/single.js";
import { CategoriaView } from "./views/categoria_view.js";
import { Drinks } from "./views/drinks.js";
import { Home } from "./views/home.js";
import { DrinksVinos } from "./views/drinks_vinos.js";
import { RegisterView } from "./views/register_view.js";
import { Carrito } from "./views/carrito.js";
import { DrinksOtros } from "./views/drinks_otro.js";
import { CartaCervezas } from "./views/admin_carta.js";
import { CartaVinos } from "./views/admin_carta_vinos.js";
import { AdminViewClientes } from "./views/admin_view_clientes.js";
import { AdminViewBartenders } from "./views/admin_view_bartender.js";

import injectContext from "./store/appContext.js";

import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";

import BaseLayoutRoute from "./layouts/base.js";
import EmptyLayoutRoute from "./layouts/empty";
import AdminLayoutRoute from "./layouts/admin_layout.js";
import SignInForm from "./views/SignInForm";

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
							<EmptyLayoutRoute exact path="/" component={Home} />

							<Route path="/single/:theid" component={Single} />

							<AdminLayoutRoute path="/admin/view/users" component={Navbar} />

							<Route path="/bartender/view" component={BartenderView} />

							<Route path="/single/:theid" component={Single} />

							<Route path="/admin/view" component={AdminView} />

							<Route path="/clientes" component={AdminViewClientes} />

							<Route path="/user_bartender" component={AdminViewBartenders} />

							<Route exact path="/categorias/view" component={CategoriaView} />

							<Route path="/drinks" component={Drinks} />

							<Route path="/carta" component={CartaCervezas} />

							<Route path="/cartaVinos" component={CartaVinos} />

							<Route path="/drinksOtros" component={DrinksOtros} />

							<Route path="/vinos" component={DrinksVinos} />

							<Route path="/carrito" component={Carrito} />

							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
