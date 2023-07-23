import css from './ThankYou.module.css';
import PropTypes from 'prop-types';

const ThankYou = ({ message }) => {
    return <p className={css.thankYou}>{message}</p>;
  };
  
  ThankYou.propTypes = {
    message: PropTypes.string,
  };
  
  export default ThankYou;
  