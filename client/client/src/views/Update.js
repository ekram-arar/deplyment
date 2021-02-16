import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';
import ProductForm from '../components/ProductForm';
import { navigate } from '@reach/router';

export default props => {
    const { id } = props;
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/find/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
       
            })
    }, [])
    const updateProduct = e => {
        //e.preventDefault();
        axios.put('http://localhost:8000/api/find/' + id,product)
            .then(res => console.log(res));
    }
    return (
        <div>
             {loaded && (
             <>
             <ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description}/>
             <DeleteButton productId={product._id} successCallback={() => navigate("/product")}/>
             </>
             )}
        
        </div>
    )
}
