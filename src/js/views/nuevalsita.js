render() {

return (

<Context.Consumer>

{({ store, actions }) => {

const listaMenu = store.menucervezas.map((item, index) => {

return (

<li key={index}>

<div className="collapsible-header">

<i className={item.icono} />

{item.name}

</div>

​

<div className="collapsible-body ">

<span>

<ul>

<li>Categoria : {item.categoria}</li>

<li>Precio : ${item.precio}</li>

<li>

<a

onClick={() => actions.borrar(index)}

id="carrito_eliminar"

className="waves-effect waves-light btn">

<i className="fas fa-trash-alt" />

</a>

</li>

</ul>

</span>

</div>

</li>

							 <Context.Consumer>

);

});