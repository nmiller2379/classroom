import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import Header from "../components/Header";

const ViewElectronicProduct= () => {
    const {id}=useParams()
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const[inCart,setInCart]=useState(false)
    


    useEffect(() => {
        setLoading(true);
        axios({
            method: "GET",
            url:`https://dummyjson.com/products/category/smartphones`,
            
        }).then(res => {
            console.log(res.data.products,id);
            let product=res.data.products.filter(e=>e.id==id)
            console.log(product)
            setData(product);
        }).catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, []);
    console.log(id)
console.log(data)
    return( 
    <div id="container">
 
            {loading ?
            <div>
                {" "}
                <h1>Loading...</h1>
            </div>
          
:
            data.map((product) => (
                <div key={product.id} className="card">
                    <div><img src={product.images[2]} alt="#"/></div>
                    <br/>
                    <div className="productinfo">
                        <h6 id="viewtitle">{product.title}</h6><br/>
                        <h6><u>Price:</u>  ${product.price}</h6>
                        <h6><u>Category:</u>  {product.brand} ,{product.category}</h6>
                        <h6><u>Description:</u> {product.description}</h6>
                        <h6><u>Shipping Info:</u> {product.shippingInformation}</h6>
                        <h6><u>Return Policy:</u> {product.returnPolicy}</h6>
                        <h6><u>Warranty:</u> {product.warrantyInformation}</h6>
                        <h6><u>Rating:</u> {product.rating}</h6>
                        <h6><u>In-Stock:</u> {product.stock}</h6>
                        <button className="btn" onClick={()=>setInCart(!inCart)}>Buy Now</button>
                        <br/>
                        {inCart?<i>Added To Cart 🛒</i>:""}
                    </div>
                </div>
            ))}

</div>

    );
};

export default ViewElectronicProduct;