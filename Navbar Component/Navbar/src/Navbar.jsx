import {Link, useMatch, useResolvedPath} from 'react-router-dom'
export default function Navbar(){
    return(
    <nav className="nav">
        <ul className="nav__items">
            <CustomLink to = "/Home" children = "Home" className = "list__items" />
            <CustomLink to = "/Price" children = "Price" className = "list__items" />
            <CustomLink to = "/About" children = "About" className = "list__items" />

        </ul>
    </nav>
    )
}

function CustomLink({to, children ,...props}){
    const resolvedPath = useResolvedPath(to);
    const currPath = useMatch({path: resolvedPath.pathname , end : true})
    return (
        <li className = {`${currPath? `active`:""} ${props.className || ''}`}  >
        <Link to = {to} >{children}</Link>
        </li>
    )
}