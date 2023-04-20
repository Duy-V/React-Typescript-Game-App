import { MouseEvent, useState } from "react";
import styles from "./ListGroup.module.css";
interface Props {
  items: string[];
  heading: string;
  // onSelectItem: (item: string) => void;
}
export default function ListGroup({ items, heading}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className={[styles.ListGroup, styles.container].join('')}>
        {items?.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              // onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
