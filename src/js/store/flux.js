const getState = ({ getStore, setStore }) => {
	return {
		store: {
			lista: [],
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
			agregar: item => {
				const store = getStore();
				const tmp = store.lista;
				tmp.push(item);
				setStore({ lista: tmp });
				console.log(item);
			}
		}
	};
};

export default getState;
