import { MouseEvent, useState } from "react";
import styles from "./ListGroup.module.css";
import styled from 'styled-components'


interface Props {
  items: string[];
  heading: string;
  // onSelectItem: (item: string) => void;
}
export default function ListGroup({ items, heading}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group" style={{backgroundColor: 'yellow'}}>
        {items?.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
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
