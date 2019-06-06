const getState = ({ getStore, setStore }) => {
	return {
		store: {

			pedidos: [
				{
					id: 1,
					name: "heineken",
					categoria: "cerveza",
					precio: "123123",
					imagen: "https://www.biernet.nl/images/merken/38870-heineken%20pilsener.jpg",
					icono: "fas fa-beer"
				},

				{
					id: 2,
					name: "corona 3",
					categoria: "cerveza",
					precio: "123123",
					imagen: "http://www.elefete.com/wp-content/uploads/2018/05/cerveza-corona.jpg",
					icono: "fas fa-beer"
				},
				{
					id: 3,
					name: "corona 5",
					categoria: "cerveza",
					precio: "123123",
					imagen: "http://www.elefete.com/wp-content/uploads/2018/05/cerveza-corona.jpg",
					icono: "fas fa-beer"
				},
				{
					id: 4,
					name: "corona 6",
					categoria: "cerveza",
					precio: "123123",
					imagen: "http://www.elefete.com/wp-content/uploads/2018/05/cerveza-corona.jpg",
					icono: "fas fa-beer"
				},
				{
					id: 6,
					name: "heineken 5",
					categoria: "cerveza",
					precio: "123123",
					imagen: "http://www.elefete.com/wp-content/uploads/2018/05/cerveza-corona.jpg",
					icono: "fas fa-beer"
				},
				{
					id: 7,
					name: "corona 6",
					categoria: "cerveza",
					precio: "123123",
					imagen: "http://www.elefete.com/wp-content/uploads/2018/05/cerveza-corona.jpg",
					icono: "fas fa-beer"
				},
				{
					id: 8,
					name: "heineken",
					categoria: "cerveza",
					precio: "123123",
					imagen: "http://www.elefete.com/wp-content/uploads/2018/05/cerveza-corona.jpg",
					icono: "fas fa-beer"
				}
			],
			tomados: [],
			menucervezas: [
				{
					name: "heineken",

					categoria: "cerveza",

					precio: "123123",

					imagen: "https://www.biernet.nl/images/merken/38870-heineken%20pilsener.jpg"
				}
			],

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
=======
			lista: [],
			pedido: [],
			registerBartender: {
				password: "",
				name: "",
				first_name: "",
				last_name: "",
				email: ""
			},
			agregarCerveza: {
				name: "",
				categoria: "cerveza",
				precio: "",
				imagen: "",
				icono: "fas fa-wine-glass-alt"
			},
			bartenders: [
				{
>>>>>>> a848fc30abc3348db4e85ba62fe37099d3c9f34e
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
=======
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


			tomarPedido: item => {
				const store = getStore();
				const newPedido = store.pedidos.filter(el => el.id !== item.id);
				const newTomado = store.tomados;
				newTomado.push(item);
				setStore({ pedidos: newPedido, tomados: newTomado });
			},
			borrarOrden(index) {
				const store = getStore();
				const x = store.tomados.filter((e, i) => {
					return i !== index;
				});

				setStore({
					tomados: x
				});
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
<<<<<<< HEAD
=======
			agregarCervezaCarta: item => {
				const store = getStore();
				const tmp = store.menucervezas;
				tmp.push(store.agregarCerveza);
				setStore({
					menucervezas: tmp,
					agregarCerveza: {
						name: "",
						categoria: "cerveza",
						precio: "",
						imagen: "",
						icono: "fas fa-wine-glass-alt"
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

			agregarTrago(e) {
				const store = getStore();
				const { value, name } = e.target;
				let newVal = store.agregarCerveza;
				newVal[name] = value;
				setStore({
					agregarCerveza: newVal
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

			borrarCartaVinos(index) {
				const store = getStore();
				setStore({
					menuvinos: store.menuvinos.filter((e, i) => {
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
