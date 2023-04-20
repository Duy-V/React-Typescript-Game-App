import { MouseEvent, useState } from "react";
import styles from "./ListGroup.module.css";
import styled from 'styled-components'

const List = styled.ul`
list-style: none;
padding: 0;
`
interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li<ListItemProps>`
padding: 5px 0;
background: ${props => props.active ? 'blue' : 'none'}
`
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
      <List>
        {items?.map((item, index) => (
          <ListItem
            active = {index === selectedIndex}
            onClick={() => {
              setSelectedIndex(index);
              // onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </div>
  );
}
