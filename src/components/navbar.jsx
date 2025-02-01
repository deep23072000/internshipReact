import { Link } from "react-router-dom"
const Nav1 = ()=>{

    return(
        <>
           <Link to="/"> Home </Link>
           <Link to="/about"> About </Link>
           <Link to="/services"> Services </Link>
           <Link to="/product"> Product </Link>
           <Link to="/contact"> Contact </Link>
        </>
    )
}

export default Nav1



