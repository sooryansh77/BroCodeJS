Align item aligns the elements in the vertical axis in their own row, if wrap is enabled.

Align-content aligns the elements as a whole shifting the whole content either at the start, end, or space in between or around, taking the whole parent element in consideration.

![[image-18.png]]
Align-items: flex-start, there are two rows because flex-wrap: wrap giving us two rows each containing 4 flex items.

![[image-19.png]]

If we don't specify the height of the flex items the default behaviour is to stretch it across the vertical axis taking maximum space in their row.

![[image-20.png]]
align-content: flex-start, see how the flex-items are not at the start of their individual rows, but at the start of the parent element itself.

![[image-21.png]]

align-content: center

![[image-22.png]]

	align-content: space-between