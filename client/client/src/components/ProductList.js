import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';
export default props => {
    const [product,setProduct]=useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/')
        .then(res => setProduct(res.data));
    }, [])
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }
    
    return (
        <div>
            <h1>All Products:</h1>
            {props.product.map((product, idx)=>{
               return <p key={idx}>
               <Link to={"/" + "product"+"/"+product._id}>
                   {product.title}
               </Link>
            |
            <Link to={"/product/" + product._id + "/edit"}>
                Edit
            </Link>
                                    |
                    <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)}/>
                     
                    
                    </p>
            })}
        </div>
    )
}