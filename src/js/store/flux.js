const getState = ({ getStore, setStore }) => {
	return {
		store: {
			lista: [],
			pedido: [],
			registerBartender: {
				password: "",
				name: "",
				first_name: "",
				last_name: "",
				email: ""
			},
			bartenders: [
				{
					name: "bartender1",
					first_name: "kfrkfir",
					lastName: "qwerty",
					age: "24",
					password: "mnbmnb",
					email: "asdas@gmail.com"
				},
				{
					name: "bartender1",
					first_name: "kfrkfir",
					lastName: "qwerty",
					age: "24",
					password: "mnbmnb",
					email: "asdas@gmail.com"
				},
				{
					name: "bartender1",
					first_name: "kfrkfir",
					lastName: "qwerty",
					age: "24",
					password: "mnbmnb",
					email: "asdas@gmail.com"
				}
			],
			clientes: [
				{
					name: "asdasdsa1",
					lastName: "qwerty",
					age: "24",
					email: "asdas@gmail.com"
				},
				{
					name: "asdasdsa2",
					lastName: "qwerty",
					age: "24",
					email: "asdas@gmail.com"
				},
				{
					name: "asdasdsa3",
					lastName: "qwerty",
					age: "24",
					email: "asdas@gmail.com"
				},
				{
					name: "asdasdsa4",
					lastName: "qwerty",
					age: "24",
					email: "asdas@gmail.com"
				},
				{
					name: "asdasdsa5",
					lastName: "qwerty",
					age: "24",
					email: "asdas@gmail.com"
				}
			],

			menuvinos: [
				{
					name: "juguito de uva",
					categoria: "vino",
					precio: "123123",
					imagen:
						"https://cdn.shopify.com/s/files/1/2196/9115/articles/shutterstock_562243966-1_2048x.jpg?v=1534175641",
					icono: "fas fa-wine-glass-alt"
				},
				{
					name: "juguito de uva",
					categoria: "vino",
					precio: "123123",
					imagen:
						"https://cdn.shopify.com/s/files/1/2196/9115/articles/shutterstock_562243966-1_2048x.jpg?v=1534175641",
					icono: "fas fa-wine-glass-alt"
				},

				{
					name: "asdasd",
					categoria: "vino",
					precio: "123123",
					imagen: "https://publiko.mx/wp-content/uploads/2019/02/vino.jpg",
					icono: "fas fa-wine-glass-alt"
				},
				{
					name: "corona 2",
					categoria: "vino",
					precio: "12",
					imagen: "http://www.elefete.com/wp-content/uploads/2018/05/cerveza-corona.jpg",
					icono: "fas fa-wine-glass-alt"
				}
			],
			menuotros: [
				{
					name: "juguito de uva",
					categoria: "vino",
					precio: "123123",
					imagen:
						"https://cdn.shopify.com/s/files/1/2196/9115/articles/shutterstock_562243966-1_2048x.jpg?v=1534175641",
					icono: "fas fa-wine-glass-alt"
				},
				{
					name: "juguito de uva",
					categoria: "vino",
					precio: "123123",
					imagen:
						"https://cdn.shopify.com/s/files/1/2196/9115/articles/shutterstock_562243966-1_2048x.jpg?v=1534175641",
					icono: "fas fa-wine-glass-alt"
				},

				{
					name: "asdasd",
					categoria: "vino",
					precio: "123123",
					imagen: "https://publiko.mx/wp-content/uploads/2019/02/vino.jpg",
					icono: "fas fa-wine-glass-alt"
				},
				{
					name: "corona 2",
					categoria: "vino",
					precio: "12",
					imagen: "http://www.elefete.com/wp-content/uploads/2018/05/cerveza-corona.jpg",
					icono: "fas fa-wine-glass-alt"
				}
			],
			menucervezas: [
				{
					name: "heineken",
					categoria: "cerveza",
					precio: "123123",
					imagen: "https://www.biernet.nl/images/merken/38870-heineken%20pilsener.jpg",
					icono: "fas fa-beer"
				},

				{
					name: "corona",
					categoria: "cerveza",
					precio: "123123",
					imagen: "http://www.elefete.com/wp-content/uploads/2018/05/cerveza-corona.jpg",
					icono: "fas fa-beer"
				},
				{
					name: "corona 2",
					categoria: "cerveza",
					precio: "12",
					imagen: "http://www.elefete.com/wp-content/uploads/2018/05/cerveza-corona.jpg",
					icono: "fas fa-beer"
				},
				{
					name: "corona 2",
					categoria: "cerveza",
					precio: "12",
					imagen: "http://www.elefete.com/wp-content/uploads/2018/05/cerveza-corona.jpg",
					icono: "fas fa-beer"
				},
				{
					name: "corona 3",
					categoria: "cerveza",
					precio: "12",
					imagen: "http://www.elefete.com/wp-content/uploads/2018/05/cerveza-corona.jpg",
					icono: "fas fa-beer"
				}
			]
		},

		actions: {
			login: (username, password, path) => {
				let data = {
					username: username,
					password: password
				};
				fetch("http://127.0.0.1:8000/api/login/", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						console.log(resp);
						if (resp.token) {
							localStorage.setItem("token", resp.token);
							if (resp.role_id == 1) {
								path.push("/categorias/view");
							}
							if (resp.role_id == 2) {
								path.push("/bartender/view");
							}
						}
					});
			},
			registerCliente: (username, first_name, last_name, email, password) => {
				let data = {
					username: username,
					first_name: first_name,
					last_name: last_name,
					email: email,
					password: password
				};
				fetch("http://127.0.0.1:8000/api/registercliente/", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			test: () => {
				const store = getStore();
				console.log(store.menuvinos);
			},
			//agrega y guarda un elemnto a una lista//
			agregar: item => {
				const store = getStore();
				const tmp = store.lista;
				tmp.push(item);
				setStore({ lista: tmp });
				console.log(item);
			},
			enviar: item => {
				const store = getStore();
				const tmp = store.pedido;
				tmp.push(store.menucervezas);
				setStore({ pedido: tmp });
				console.log(tmp);
			},
			enviarBartender: item => {
				const store = getStore();
				const tmp = store.bartenders;
				tmp.push(store.registerBartender);
				setStore({
					bartenders: tmp,
					registerBartender: {
						password: "",
						name: "",
						first_name: "",
						last_name: "",
						email: ""
					}
				});
				console.log(tmp);
			},
			mostrar() {
				const store = getStore();
				console.log(store.registerBartender);
			},
			/*handleChange(e) {
				const store = getStore();
				let target = e.target;
				let value = target.type === "checkbox" ? target.checked : target.value;
				let name = target.name;

				setStore({
					[name]: value
				});
			},*/
			handleSubmit(e) {
				const store = getStore();
				e.preventDefault();

				console.log("The form was submitted with the following data:");
				console.log(store.registerBartender);
			},
			handleinput(e) {
				const store = getStore();

				const { value, name } = e.target;
				setStore({
					[name]: value
				});
				console.log(store.registerBartender);
			},
			handleprueba(e) {
				const store = getStore();
				const { value, name } = e.target;
				let newVal = store.registerBartender;
				newVal[name] = value;
				setStore({
					registerBartender: newVal
				});
			},

			prueba(index) {
				const store = getStore();
				console.log(index);
			},

			//borra un elemento d ela lista//
			borrar(index) {
				const store = getStore();
				setStore({
					menucervezas: store.menucervezas.filter((e, i) => {
						return i !== index;
					})
				});
			},
			borrarBartender(index) {
				const store = getStore();
				setStore({
					bartenders: store.bartenders.filter((e, i) => {
						return i !== index;
					})
				});
			},
			borrarCliente(index) {
				const store = getStore();
				setStore({
					clientes: store.clientes.filter((e, i) => {
						return i !== index;
					})
				});
			}
		}
	};
};

export default getState;
