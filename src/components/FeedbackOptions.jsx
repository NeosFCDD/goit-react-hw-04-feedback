import css from "components/Feedback.module.css";
import PropTypes from "prop-types";

export const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return (
        <ul className={css.buttons}>
            {options.map((label) => (
                <li key={label} className={css.buttons__item}>
                    <button
                        className={css.button}
                        name={label}
                        type="button"
                        onClick={onLeaveFeedback}>
                        {label.charAt(0).toUpperCase() + label.slice(1)}
                    </button>
                </li>
            ))}
    </ul>
    );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
  };