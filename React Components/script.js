import {createRoot} from 'react-dom/client'
import getProducts from './data.js'
const products = getProducts()
products.then(res => console.log(res))
const h1 = {
    $$typeof:Symbol.for('react.transitional.element'),
    ref:null,
    type:'h1',
    props:{
        children:"Hello World!"
    }
}
const Card = ()=> {return <h2>Hello React</h2>}
const h2 = {
    $$typeof:Symbol.for('react.transitional.element'),
    ref:null,
    type: Card,
    props:{}
}
console.log(h2)
const container = <div>
    {[h1,h2]}
</div>
createRoot(document.querySelector('#root')).render(container)