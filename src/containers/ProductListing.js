import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios';
import {setProducts} from "../redux/actions/productActions"

export default function ProductListing() {
    const product = useSelector((state)=>state)
    const dispatch = useDispatch();
    const fetchproduct = async() =>{
        const responce = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err)=>{
            console.log("ERR :",err)
        })
        dispatch(setProducts(responce.data))
    }
    useEffect(() => {
        fetchproduct()
    }, [])
    console.log("products :",product)
    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    )
}
