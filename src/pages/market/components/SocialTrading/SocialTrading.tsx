import * as styles from "./SocialTrading.css";
import CTACard from "./CTACard";

export default function SocialTrading() {
    return (
        <section className={styles.container}>
            <div className={styles.cardGrid}>
                <CTACard
                    label={"다른 기업도\n궁금하다면?"}
                    hasDecoration
                />
                <CTACard
                    label={"친구들은 어떻게\n투자하고 있을까요?"}
                    hasDecoration
                />
            </div>
        </section>
    );
}