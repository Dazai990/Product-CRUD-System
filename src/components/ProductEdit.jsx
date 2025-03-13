import { useState } from "react";
import {PRODUCT_API_BASE_URL} from './ProductView'
import {useParams} from 'react-router-dom'

const ProductEdit = ()=>{
    const {nm,br,pr} = useParams()
   const [product,setProduct] = useState({
    name:nm,
    brand:br,
    price:pr
   })


   //update product by calling backend rest api
   const updateProduct = (base_url,product)=>{
    fetch(base_url+'/update-product',{
        method:"PUT",
        headers:{
            'content-type':'application/json',
            'accept':'application/json'
        },
        body:JSON.stringify({
            name:product.name,
            brand:product.brand,
            price:product.price
        })
    })
       .then(response=>{
        if(response.ok)
            return response.json()
        else if(response.status=='404')
            return response.json()
        else 
        throw Error(`Server Error ${response.statusText}`)
       })
       .then(data=>alert(data.message))
       .catch(err=>console.error(err))
   }
   const handleSubmit = (e)=>{
    e.preventDefault();
    updateProduct(PRODUCT_API_BASE_URL,product)
   }

   return (
    <div className="container w-50 rounded border my-3 p-3">
        <h2>Product Update Form</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input className="form-control bg-secondary" placeholder="Product Name" 
                value={product.name} 
                onChange={(e)=>setProduct({...product,name:e.target.value})} readOnly></input>
            </div>
            <div className="mb-3">
                <input className="form-control bg-secondary" placeholder="Product Brand" 
                value={product.brand} 
                onChange={(e)=>setProduct({...product,brand:e.target.value})} readOnly></input>
            </div>
            <div className="mb-3">
                <input type="number" className="form-control" placeholder="Product Price" 
                value={product.price} 
                onChange={(e)=>setProduct({...product,price:e.target.value})}></input>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-outline-success" type='submit'>Update</button>
            </div>
        </form>

    </div>
   )
}

export default ProductEdit;