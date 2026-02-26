import { useMemo, useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableStockItem from "./SortableStockItem";
import MyStockContent from "./MyStockContent";
import * as styles from "./StockList.css";
import { MOCK_STOCKS } from "../HomeStockSection.mock";

interface StockListProps<T extends string> {
  filters: readonly T[];
  selectedFilter: T;
  onFilterChange: (filter: T) => void;
}

export default function StockList<T extends string>({
  filters,
  selectedFilter,
  onFilterChange,
}: StockListProps<T>) {
  const [stocks, setStocks] = useState(MOCK_STOCKS);
  const isCustomOrder = selectedFilter === "직접 설정한 순";

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 200, tolerance: 5 },
    }),
  );

  const displayStocks = useMemo(() => {
    if (isCustomOrder) return stocks;
    const sorted = [...stocks];
    switch (selectedFilter) {
      case "현재가":
        return sorted.sort((a, b) => b.currentPriceRaw - a.currentPriceRaw);
      case "평가금액":
        return sorted.sort((a, b) => b.evaluationRaw - a.evaluationRaw);
      default:
        return sorted;
    }
  }, [stocks, selectedFilter, isCustomOrder]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setStocks((prev) => {
      const oldIndex = prev.findIndex((s) => s.id === active.id);
      const newIndex = prev.findIndex((s) => s.id === over.id);
      return arrayMove(prev, oldIndex, newIndex);
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.badgeList}>
        {filters.map((filter) => (
          <button
            key={filter}
            aria-selected={filter === selectedFilter}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className={styles.contentList}>
        {isCustomOrder ? (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={displayStocks.map((s) => s.id)}
              strategy={verticalListSortingStrategy}
            >
              {displayStocks.map((stock) => (
                <SortableStockItem key={stock.id} {...stock} />
              ))}
            </SortableContext>
          </DndContext>
        ) : (
          displayStocks.map((stock) => (
            <MyStockContent key={stock.id} {...stock} />
          ))
        )}
      </div>
    </div>
  );
}
