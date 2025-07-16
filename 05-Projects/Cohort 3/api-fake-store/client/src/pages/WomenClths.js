import React, { useState, useEffect } from "react";
import "../App.css"
import axios from "axios";
import Header from "../components/Header";

const WomenClothing = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios({
            method: "GET",
            // url: "https://fakestoreapi.com/products",
            // url: 'https://fakestoreapi.com/products/1',
            // url: 'https://fakestoreapi.com/products?limit=5',
            // url: 'https://fakestoreapi.com/products?sort=desc',
            // url: 'https://fakestoreapi.com/products/categories',
            url: "https://fakestoreapi.com/products/category/women's clothing",
        }).then(res => {
            console.log(res.data);
            setData(res.data);
        }).catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, []);

    return(
        <div id="container">
            <Header message="Womens Clothing"/>
        <div className="products-container" >
            {loading && (
            <div>
                {" "}
                <h1>Loading...</h1>
            </div>
            )}

            {data.map((product) => (
                <div key={product.id} className="card">
                    <div><img src={product.image} alt="#"/></div>
                    <div className="card-description">
                        <h6>{product.title}</h6>
                        <h6>Price: ${product.price}</h6>
                        <h6>Category: {product.category}</h6>
                    </div>
                </div>
            ))}
        </div></div>
    );
};

export default WomenClothing;