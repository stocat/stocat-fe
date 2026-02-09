import * as styles from "./Kospi.css";

export default function Kospi() {
  return (
    <section className={styles.container}>

      <div className={styles.tab_row}>

        <button className={styles.tab_button} data-active="true">한국</button>
        <button className={styles.tab_button}>미국</button>
        <button className={styles.tab_button}>CRYPTO</button>
      </div>


      <div className={styles.index_container}>
        

        <div className={styles.index_group}>
          <span className={styles.index_name}>코스피</span>
          <div className={styles.value_row}>
            <span className={styles.index_value}>4,220.56</span>
            <span className={styles.index_change}>+2.2%</span>
          </div>
        </div>


        <div className={styles.divider} />


        <div className={styles.index_group}>
          <span className={styles.index_name}>코스닥</span>
          <div className={styles.value_row}>
            <span className={styles.index_value}>932.59</span>
            <span className={styles.index_change}>+1.4%</span>
          </div>
        </div>

      </div>
    </section>
  );
}