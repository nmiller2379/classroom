import React, { useState, useEffect } from "react";
import "../App.css"
import axios from "axios";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
const Electronics = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const navigate=useNavigate()
    useEffect(() => {
        setLoading(true);
        axios({
            method: "GET",
            url: 'https://dummyjson.com/products/category/smartphones',
        }).then(res => {
            console.log(res.data.products);
            setData(res.data.products);
        }).catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, []);

    return(
        <div id="container">
            <Header message="Electronics"/>
        <div className="products-container" >
            {loading && (
            <div>
                {" "}
                <h1>Loading...</h1>
            </div>
            )}

            {data.map((product) => (
                <div key={product.id} className="card">
                    <div><img src={product.images[2]} alt="#"/></div>
                    <div className="card-description">
                        <h6>{product.title}</h6>
                        <h6>Price: ${product.price}</h6>
                        <h6>Category: ${product.category}</h6>
                        <button  className="btn" onClick={()=>navigate(`/electronics/${product.id}`)}> Click for More Info</button>
                    </div>
                </div>
            ))}
        </div></div>
    );
};

export default Electronics;