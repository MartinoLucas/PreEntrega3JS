

function precioProducto(){
    class CalcularPrecio{

        constructor(nombreProducto, precioDeLista, costosFijos, costosVariables, margenDeGanancia){
            this.nombreProducto = nombreProducto;
            this.precioDeLista = parseInt(precioDeLista);
            this.costosFijos = parseInt(costosFijos);
            this.costosVariables = parseInt(costosVariables);
            this.margenDeGanancia = parseFloat(margenDeGanancia);
            this.precio = 0;
        };
    
        calcularPrecio(){
            this.precio = parseInt((this.costosFijos + this.costosVariables + this.precioDeLista) * this.margenDeGanancia);
        }
    };
    
    let nombrePr = prompt("Ingrese el NOMBRE de su producto");
    let prcLista = prompt("Ingrese el PRECIO DE LISTA del producto en pesos($)")
    let costosFij = prompt("Ingrese sus COSTOS FIJOS en pesos($)");
    let costosVar = prompt("Ingrese sus COSTOS VARIABLES en pesos($)");
    let margen = prompt("Ingrese su MARGEN DE GANANCIAS en FLOAT(ej: 1.35)");

    const precioProduct1 = new CalcularPrecio(nombrePr, prcLista, costosFij, costosVar, margen);
    
    precioProduct1.calcularPrecio();

    console.log(`El precio para tu ${precioProduct1.nombreProducto} debe ser de $${precioProduct1.precio}`);
    
};
function calculadora(){
    console.log("CALCULADORA DE PRECIOS:");
    let cantProd = parseInt(prompt("Ingrese la cantidad de productos a calcular su precio"));
    for (i = 0; i <= cantProd; i++){
        precioProducto();
    };
};