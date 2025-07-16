import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
export default function Home() {

    const [Img1, setImg1] = useState([{}])
    const [Img2, setImg2] = useState([{}])
    const [Img3, setImg3] = useState([{}])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products/category/jewelery?limit=1",
        }).then(res => {
            console.log(res.data);
            setImg1(res.data);
        }).catch(error => console.log(error))

        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products/category/electronics?limit=1",
        }).then(res => {
            console.log(res.data);
            setImg2(res.data);
        }).catch(error => console.log(error))

        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products/category/women's clothing?limit=1",
        }).then(res => {
            console.log(res.data);
            setImg3(res.data);

        }).catch(error => console.log(error))
            
        .finally(() => setLoading(false));

    }, []);


    console.log(Img2, Img3)
    return (
        <div id="container">
            <Header message="Home Page" />
            {loading ?
                <div>
                    {" "}
                    <h1>Loading...</h1>
                </div> :
                <div className="main-products-container">

                    <Link to={"/jewlery"} className={"mainBtn"}><img src={Img1[0]["image"]} /><br/>Check Out jewlery</Link>

                    <Link to={"/electronics"} className={"mainBtn"}><img src={Img2[0]["image"]} /><br/>Check Out Electronics</Link>

                    <Link to={"/womensClothing"} className={"mainBtn"}><img src={Img3[0]["image"]} /><br/>Check out Women's Apparel</Link>

                </div>





            }



        </div>
    )
}