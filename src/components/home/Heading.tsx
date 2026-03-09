import styles from "./heading.module.css";

export default function Heading() {
    return (<div className={styles.heading}>
        <h2>FPL Week In Review</h2>
        <p>
            Use your FPL League ID to generate a snapshot of your
            league at the last gameweek. View your league standings,
            view everyones picks and chips played.
        </p>
    </div>);
}