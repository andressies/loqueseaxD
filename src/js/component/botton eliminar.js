function eliminarCajaResumen(){
    //Si existe la caja o el div...
    var div = document.getElementById('div');
    if(div !== null){
        while (div.hasChildNodes()){
            div.removeChild(div.lastChild);
        }
    }else{
        alert ("No existe la caja previamente creada.");
    }
}