import line from '../../../../assets/icons/line.svg';
import cartier from '../../../../assets/images/cartier.png';
import './HighJewerly.css'

const HighJewerly: React.FC = () => {
  return (
    <section className="high-jewerly">
      <div className='high-jewerly__container'>
        <div className="high-jewerly__inf light">
            <h1 className="high-jewerly__title">HIGH JEWELRY</h1>
            <div className='high-jewerly__link-line'>
              <img src={line} alt='line' className='high-jewerly__image'></img>
              <a href='#' className='high-jewerly__link'>Смотреть коллекцию</a>
            </div>
        </div>
        <div className='product black'>
          <p className='product__name'>КОЛЬЦО TRINITY, Cartier</p>
          <p className='product__material'>Белое золото, бриллианты</p>
          <p className='product__price'>498 000 ₽</p>
        </div>
      </div>
        <img src={cartier} alt='cartier' className='cartier'></img>
    </section>
  );
};

export default HighJewerly;
