//interface
interface CamisetaBase{
    SetColor(color);
    GetColor();
}
//Decorador
function estampar(logo: string){
	return function(target: Function){
		target.prototype.estampacion = function():void{
			console.log("Camiseta estampada con el logo de: "+logo);
		}
	}
}

// Clase (molde del objeto)
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{
    //propiedades
    private color: string;
    private  modelo: string;
    private  marca: string;
    private  talla: string;
    private  precio: number;
    //constructor inicializa los valores, metodo que se ejecuta siempre
    constructor(color, modelo,marca,talla,precio){

        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    //metodos
    public SetColor(color) {
        this.color = color;

    }
    public GetColor() {
        return this.color;
    }

}

class Sudadera extends Camiseta {
    public capucha: boolean;

    SetCapucha(capucha: boolean) {
        this.capucha = capucha;
    }

    GetCapucha(): boolean {
        return this.capucha;
    }
}

var camiseta = new Camiseta("agda", "mandagga larga", "nikafdae", "l",14);
console.log(camiseta);
camiseta.estampacion();

var sudadera_nike = new Sudadera("rojo","manga larga","adidas","m",40);
sudadera_nike.SetCapucha(true);
sudadera_nike.SetColor("azul");
console.log(sudadera_nike);
