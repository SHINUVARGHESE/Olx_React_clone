import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context'
import {Dropdown} from 'react-bootstrap'
 
function Header() {

  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const loginLink = <Link to='/login' className="loginPageLink">Login</Link>
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <Dropdown>
            <Dropdown.Toggle className='dropdownLink' style={{color:'black',boxShadow:'none' ,border:'none', backgroundColor:'whitesmoke'}}>
              <span> ENGLISH </span>
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <Dropdown.Item >English</Dropdown.Item>
              <Dropdown.Item >English</Dropdown.Item>
              <Dropdown.Item >English</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="loginPage">
          <span>{user ? user.displayName : loginLink}</span>
          <hr />
        </div>
        {user && <span style={{ cursor: 'pointer' }} onClick={() => {
          firebase.auth().signOut();
          history.push('/login')
        }}>Logout</span>}
        {user &&
          <Link to='/create'>
            <div className="sellMenu">
              <SellButton></SellButton>
              <div className="sellMenuContent">
                <SellButtonPlus></SellButtonPlus>
                <span>SELL</span>
              </div>
            </div>
          </Link>
        }
      </div>
    </div>
  );
}

export default Header;
