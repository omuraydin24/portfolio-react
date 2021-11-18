import './NavBar.scss';
import { Person, Mail } from '@mui/icons-material';
const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={'navbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#about" className="logo">
            Ror.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+90 531 980 05 92</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>ommuraydin@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
