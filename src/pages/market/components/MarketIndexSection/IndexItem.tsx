import * as styles from "./MarketIndexSection.css.ts";

type IndexItemProps = {
    name: string;
    value: string;
    change: string;
};

export default function IndexItem({ name, value, change }: IndexItemProps) {
    const isPositive = change.startsWith("+");

    return (
        <div className={styles.index_group}>
            <span className={styles.index_name}>{name}</span>
            <div className={styles.value_row}>
                <span className={styles.index_value}>{value}</span>
                <span className={isPositive ? styles.index_change_positive : styles.index_change_negative}>
                    {change}
                </span>
            </div>
        </div>
    );
}
