import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {

    return (
      <div>
          <nav>
              <ul>
                  <li><NavLink className='nav_style' to='/'>Home</NavLink></li>
                  <li><NavLink className='nav_style' to='/note'>Note</NavLink></li>
                  <li><NavLink className='nav_style' to='/create'>Create</NavLink></li>
                  <li><NavLink className='nav_style' to='/about'>About</NavLink></li>
              </ul>
          </nav>
      </div>
    );
  }
  
  
  export default Header;