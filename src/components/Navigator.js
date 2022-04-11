import { Link } from "react-router-dom";


function Navigator() {
    return (
      <nav className="nav-container">
        <div className="nav__tittle"><h1><Link to="/">Distribuidora ByM</Link></h1></div>
        <div className="nav__panel"><Link to="/admin">Panel</Link></div>
	    </nav>
    );
}
  
export default Navigator;