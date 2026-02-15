import {createRoot} from 'react-dom/client'
import React from 'react'
import getProducts from './data.js'
import './style.css'
async function getData(){
    const productsList = await getProducts()
    console.log(productsList[0])
    return productsList[0]
}



const h1 = {
    $$typeof:Symbol.for('react.transitional.element'),
    ref:null,
    type:'h1',
    props:{
        children:"Hello World!"
    }
}
const Card = (props)=> {
    const {title,image,description,category,price,rating} = props
    console.log(props)
    return (
        <div className="card">
            <h3>S{title}</h3>
            <img src={image} alt="" />
            <p>{description}</p>
            <p>{category }</p>
            <p>{rating}*</p>
            <p>${price}</p>
            <p>Best Seller</p>
        </div>
    )
}

const h2 = {
    $$typeof:Symbol.for('react.transitional.element'),
    ref:null,
    type: 'h2',
    props:{
        children:"Hi"
    }
}

async function getCard(product){
    
    const card = React.createElement(Card,{
        
        image: product.image,
        title:product.title,
        key:product.key, //Key is used by react to manage multiple elements
        //  when there are siblings we don't need to access it explicitly otherwise will get error
        description:product.description,
        category:product.category,
        price:product.price,
        rating:product.rating,
        className:'card'
    
    })
    // const  card = {
    //     $$typeof:Symbol.for('react.transitional.element'),
    //     ref:null,
    //     type: Card,
    //     props:{
    //         image: product.image,
    //         title:product.title,
    //         key:product.key,
    //         description:product.description,
    //         category:product.category,
    //         price:product.price,
    //         rating:product.rating,
    //         className:'card'
    //     }
    // }
    return card;
}
async function wait(){
    const productsList = await getData()
    const cardsList = []
    for(let i = 0 ; i < productsList.length ; i ++){
        cardsList[i] =  getCard(productsList[i])
    }
    
    return cardsList;
}
const container = <div className = 'container'>
    {  
     wait()
    }
</div>
createRoot(document.querySelector('#root')).render(container)