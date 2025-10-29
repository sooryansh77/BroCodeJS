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

🧩 1. justify-content
➤ Used in:

Flexbox

Grid

➤ What it does:

Controls how multiple items are spaced along the main axis
(main axis = horizontal by default unless flex-direction: column).

➤ Example (Flexbox):
.container {
  display: flex;
  justify-content: center;
}


This moves the whole group of flex items to the center of the container horizontally.

✅ Think: “How are all my boxes positioned as a group?”

🧩 2. justify-items
➤ Used in:

Grid only (❌ not supported by Flexbox)

➤ What it does:

Controls how content inside each individual grid cell is aligned horizontally.

➤ Example (Grid):
.container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  justify-items: center;
}


Here, each item inside its own grid cell will be centered horizontally within that cell.

✅ Think: “How is each box’s content aligned within its own grid cell?”

⚙️ Summary Table
Property	Works In	Aligns What	Direction	Example
justify-content	Flex & Grid	The whole group of items	Along the main axis	Center all cards in a row
justify-items	Grid only	Each individual item’s content	Along the inline (horizontal) axis	Center each item inside its grid cell
🧠 Quick analogy

Imagine 3 boxes inside a container:

justify-content moves all three boxes together (e.g., move the row to the center).

justify-items moves content inside each box (e.g., center text inside each grid cell).

💡 In your flex layout:
Use justify-content, not justify-items.

So:

display: flex;
justify-content: center;
align-items: center;


✅ Centers items both horizontally and vertically.
