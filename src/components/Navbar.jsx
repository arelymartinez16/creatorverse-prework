import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="inner-container">
                    <h3>Creatorverse</h3>
                    <div className="links">
                        <Link className="link" reloadDocument to={"/"} >View all Creators</Link>
                        <Link className="link" reloadDocument to={"/add"}>Add a Creator</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar