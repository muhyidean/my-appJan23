import Product from "../../components/Product/Product";
import axios from "axios";
import { useEffect, useState } from "react";

function Products(props) {

    const [productsState, setProductsState] = useState([]);
    
    const fetchData = () => {
        axios.get("http://localhost:8080/api/v1/products")
        .then(response => {
            setProductsState(response.data)
        })
        .catch(error => {
            console.log(error.message)
        })
    }



    useEffect( ()=> {
        fetchData();
    } , [props.flag])


    // const products = [
    //     { id: 111, name: "laptop", price: 900 },
    //     { id: 112, name: "iPhone", price: 1000 },
    //     { id: 113, name: "dell", price: 550 }
    // ];

    const productsList = productsState.map(p =>
        <Product id={p.id} key={p.id} name={p.name} price={p.price} />
    )

    return <div>
        {productsList}
    </div>

}

export default Products;