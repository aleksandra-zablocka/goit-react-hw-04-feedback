import css from './FeedbackOptions.module.css';

const coffeeBeanImg = (
  <img
    src="https://w7.pngwing.com/pngs/504/1013/png-transparent-instant-coffee-espresso-coffee-bean-arabica-coffee-coffee-beans-coffee-snout-bean.png"
    width="20px"
    height="12px"
    alt="coffee bean"
  />
);

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.answers}>
    {options.map(option => (
      <button
        className={css.answerBtn}
        type="button"
        name={option}
        key={option}
        onClick={() => onLeaveFeedback({ target: { name: option } })}
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}

        {option === 'good' && (
          <div className={css.beans}>
            {coffeeBeanImg}
            {coffeeBeanImg}
            {coffeeBeanImg}
          </div>
        )}
        {option === 'neutral' && (
          <div className={css.beans}>
            {coffeeBeanImg}
            {coffeeBeanImg}
          </div>
        )}
        {option === 'bad' && <div className={css.beans}>{coffeeBeanImg}</div>}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
