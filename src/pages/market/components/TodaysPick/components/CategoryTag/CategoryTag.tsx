import type { Category } from "../../TodaysPick.types";
import * as styles from "./CategoryTag.css";

interface CategoryTagProps {
  category: Category;
}

export default function CategoryTag({ category }: CategoryTagProps) {
  return <span className={styles.variant[category.type]}>{category.label}</span>;
}
