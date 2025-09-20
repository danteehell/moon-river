// Header.tsx
import logo from '../../../assets/icons/logo.svg';
import heart from '../../../assets/icons/heart.svg';
import profile from '../../../assets/icons/profile.svg';
import basket from '../../../assets/icons/basket.svg';
import menu from '../../../assets/icons/menu.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo header__logo--light">
          <a href="#" className="header__logo-link">
            <img 
            src={logo} 
            alt="logo" 
            className="header__logo-img" />
          </a>
        </div>
        <div className="header__menu header__menu--black">
          <a href="#" className="header__favourites-link">
            <img
              src={heart}
              alt="favourites"
              className="header__icon header__icon--favourites"
            />
          </a>
          <a href="#" className="header__profile-link">
            <img
              src={profile}
              alt="profile"
              className="header__icon header__icon--profile"
            />
          </a>
          <a href="#" className="header__basket-link">
            <img
              src={basket}
              alt="basket"
              className="header__icon header__icon--basket"
            />
            <span className="header__basket-count">0</span>
          </a>
          <button className="header__menu-button" aria-label="Открыть меню">
            <img
              src={menu}
              alt="menu"
              className="header__icon header__icon--menu"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
