import { Fragment } from "react/jsx-runtime";
import { Product } from "../../app/models/product";
 
import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";

 

export default function Catalog(){
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
        
             // fetch('http://localhost:5000/api/products')
        //   .then(response => response.json())
        //     .then(data=>setProducts(data))

        useEffect(()=>{
            agent.Catalog.list()
                .then(products => setProducts(products))  ;
            setLoading(false);     
         },[])
        
 if(loading) return <LoadingComponent message="Loading Product(s)"/>
    return (
        <Fragment>
            <ProductList products={products}/>
 
        </Fragment>

    )
}