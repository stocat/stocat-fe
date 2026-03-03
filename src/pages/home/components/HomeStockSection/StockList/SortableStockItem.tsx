import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import MyStockContent from "./MyStockContent";

interface SortableStockItemProps {
  id: string;
  name: string;
  averagePrice: string;
  currentPrice: string;
  changeRate: number;
}

export default function SortableStockItem({
  id,
  ...stockProps
}: SortableStockItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <MyStockContent {...stockProps} />
    </div>
  );
}
