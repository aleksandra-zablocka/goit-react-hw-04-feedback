import css from './ThankYou.module.css';

const ThankYou = ({ message }) => {
    return <p className={css.thankYou}>{message}</p>;
  };
  
  export default ThankYou;
  