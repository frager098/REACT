import {createRoot} from 'react-dom/client'

const h1 = {
    $$typeof:Symbol.for('react.transitional.element'),
    ref:null,
    type:'h1',
    props:{
        children:"Hi"
    }
}
createRoot(document.querySelector('#root')).render(h1)