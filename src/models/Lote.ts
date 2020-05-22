import Product from './Product';

class Lote{
	private produtos:Array<Product>;
	private date: Date;

	constructor(){
		this.produtos = [];
		this.date = new Date();
	}

	public addProduct(product: Product){
		this.produtos.push(product);
	}
}