import { useState,useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import {useNavigate} from 'react-router-dom'


export const PRODUCT_API_BASE_URL = "http://localhost:4000/api/products"

const ProductView = () =>{
    const [products,setProducts] = useState([])
    const navigate = useNavigate();

    //component service method to get all products from backend rest api 
    const getAllProducts = (base_url)=>{

        //fetch api to call backend rest api (restful web service)
        //asyncronous call

        //configure request method, headers, body, etc
        fetch(base_url + "/all",{
             method:"GET",
             headers:{
                accept:'application/json'
             }
        }) 
        
        //get the server http response
          .then(response=>{
            if(response.ok)
                return response.json()
            else if(response.status==="404")
                return response.json()
            else 
            throw Error(`Server Error: ${response.statusText}`)
          })

          //get the data of response
          .then(data=>setProducts(data)) //get the data of response and update
          //  components state using backend data

         .catch(err=>console.error(err))  //handle server error if any
    }

    //calling useEffect hook
    useEffect( ()=>{
        getAllProducts(PRODUCT_API_BASE_URL)
    },[products] );

    //delete product by calling backend rest api
    const deleteProduct = (base_url,product)=>{
        fetch(base_url+'/delete-product',{
            method:"DELETE",
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

    const handleDelete = (product)=>{
      deleteProduct(PRODUCT_API_BASE_URL,product)
    }
    const handleEdit = (product)=>{
  navigate(`/edit/${product.name}/${product.brand}/${product.price}`)
    }

    //rendering logic
    return (
        <div>
            <table className="table table-striped table-primary">
                <thead>
                    <tr className="table-secondary">
                        <th>Product Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <td colSpan={2}></td>
                    </tr>
                </thead>
                <tbody>
                    { products.map(p=><tr key={p._id}>
                        <td>{p.name}</td>
                        <td>{p.brand}</td>
                        <td>{p.price}</td>
                        <td><button title="Edit" className="btn btn-warning" onClick={()=>handleEdit(p)}><MdEdit /></button></td>
                        <td><button title="Delete" className="btn btn-danger" onClick={()=>handleDelete(p)}><MdDelete /></button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )


}

export default ProductView;