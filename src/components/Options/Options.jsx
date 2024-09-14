import styles from "./Options.module.css";

const Options = ({ onFeedback, totalFeedback, onReset }) => {
  return (
    <div className={styles.options}>
      <button onClick={() => onFeedback("good")}>Good</button>
      <button onClick={() => onFeedback("neutral")}>Neutral</button>
      <button onClick={() => onFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button className={styles.reset} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
