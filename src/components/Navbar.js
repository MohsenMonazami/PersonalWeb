import "../styles/Navbar.css";

const Navbar = () => {
  return (
    
    <nav className="row justify-content-center Navbar m-0">
      <div className="col-lg-1">
        <a className="Nav_item" href="#Home">Home</a>
        <div></div>
      </div>
      <div className="col-lg-1">
        <a className="Nav_item" href="#Skills">Skills</a>
        <div></div>
      </div>
      <div className="col-lg-1 justif">
        <a className="Nav_item" href="#Portfolio">Portfolio</a>
        <div></div>
      </div>
      <div className="col-lg-1 justif">
        <a className="Nav_item" href="#Contact">Contact</a>
        <div></div>
      </div>
    </nav>

  );
};

export default Navbar;
