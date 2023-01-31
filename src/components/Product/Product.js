

function Product(props) {

    
    return (
        <div className="Content">
            <h3>Name: {props.name}</h3>
            <h3>Price: {props.price}</h3>
        </div>
    );


}

export default Product;