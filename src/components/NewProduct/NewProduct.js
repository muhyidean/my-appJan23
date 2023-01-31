import './NewProduct.css';
import axios from 'axios';
import { useRef } from 'react';

function NewProduct(props) {

    const newProductForm = useRef();


   
    const addProduct = () => {
        const form = newProductForm.current;
        const data = {
            name: form['name'].value,
            price: form['price'].value
        };
        axios.post("http://localhost:8080/api/v1/products",data)
        .then(data => {
            console.log('Success', data);
            props.flag();


        })
        .catch(error => {
            console.error('Error' ,error);
        })


    }

    return (
        <div className="NewProduct">
            <form ref={newProductForm}>
                <label>Add Product</label>

                <label>Name</label>
                <input type="text"
                    label={'name'}
                    name={'name'}
                />

                <label>Price</label>
                <input type="text"
                    label={'price'}
                    name={'price'}
                />

            </form>
            <button onClick={addProduct}> Add Product </button>
        </div>
    );


}

export default NewProduct;