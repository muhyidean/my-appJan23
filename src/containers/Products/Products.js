import Product from "../../components/Product/Product";


function Products(props) {

    
    const products = [
        { id: 111, name: "laptop", price: 900 },
        { id: 112, name: "iPhone", price: 1000 },
        { id: 113, name: "dell", price: 550 }
    ];

    const productsList = products.map(p =>
        <Product id={p.id} key={p.id} name={p.name} price={p.price} />
    )

    return <div>
        <button onClick={() => props.somethingHandler(5)} > Click from products </button>
        {productsList}
    </div>

}

export default Products;