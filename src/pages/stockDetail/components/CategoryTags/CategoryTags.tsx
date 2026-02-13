import type { CategoryTag } from "../../StockDetail.types";
import * as styles from "./CategoryTags.css";

interface CategoryTagsProps {
  categories: CategoryTag[];
  onCategoryClick?: (category: CategoryTag) => void;
}

export default function CategoryTags({ categories, onCategoryClick }: CategoryTagsProps) {
  return (
    <div className={styles.container}>
      {categories.map((category, index) => (
        <button
          key={index}
          type="button"
          className={styles.tag}
          onClick={() => onCategoryClick?.(category)}
        >
          {category.label}
        </button>
      ))}
      <span className={styles.helpIcon} title="카테고리 도움말">
        ?
      </span>
    </div>
  );
}
