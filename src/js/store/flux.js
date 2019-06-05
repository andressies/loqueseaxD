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
			}
		}
	};
};

export default getState;
