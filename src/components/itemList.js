import React from 'react'
import Item from './item'

function ItemList({list, onCheck, onSelect}) {
    return (
      <div>
        {
          list.map(item => (
            <Item 
            key={item.id}
            selected={item.isSelected}
            label={item.label}
            checked={item.value}
            onCheck={() => onCheck(item)}
            onSelect={() => onSelect(item)}
            />)
          )
        }
      </div>
    )
}

export default ItemList