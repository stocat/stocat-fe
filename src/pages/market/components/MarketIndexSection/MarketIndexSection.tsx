import { Fragment } from "react";
import * as styles from "./MarketIndexSection.css.ts";
import IndexItem from "./IndexItem";
import { useMarketIndex } from "./useMarketIndex";

export default function MarketIndexSection() {
  const { tabs, activeTab, indices, onTabChange } = useMarketIndex();

  const rows = [indices.slice(0, 3), indices.slice(3, 6)];

  return (
    <section className={styles.container}>
      <div className={styles.tab_row}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={styles.tab_button}
            data-active={activeTab === tab ? "true" : undefined}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.h_divider} />

      <div className={styles.index_grid}>
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className={styles.index_row}>
            {row.map((item, i) => (
              <Fragment key={item.name}>
                {i > 0 && <div className={styles.v_divider} />}
                <IndexItem {...item} />
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
